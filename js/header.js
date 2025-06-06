const NAV_KEY      = "activeNavLinkHref";
const DONE_KEY     = "redirectDone";

function initNavLinks() {
  const allLinks = document.querySelectorAll(".nav-link");
  allLinks.forEach(l => l.classList.remove("active","custom-active"));

  const savedHref = localStorage.getItem(NAV_KEY);
  if (savedHref) {
    allLinks.forEach(link => {
      if (link.getAttribute("href") === savedHref) {
        link.classList.add("active","custom-active");
      }
    });
  }

  allLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const href = link.getAttribute("href");
      localStorage.setItem(NAV_KEY, href);
      sessionStorage.removeItem(DONE_KEY);
      window.location.href = href;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("../pages/header.html")
    .then(r => { if (!r.ok) throw ""; return r.text() })
    .then(html => {
      document.getElementById("header-container").innerHTML = html;

      const savedHref = localStorage.getItem(NAV_KEY);
      const redirected = sessionStorage.getItem(DONE_KEY);
      if (
        savedHref &&
        !window.location.href.endsWith(savedHref) &&
        !redirected
      ) {
        sessionStorage.setItem(DONE_KEY, "1");
        return window.location.replace(savedHref);
      }

      initNavLinks();

      const loggedUser = JSON.parse(localStorage.getItem("loggedUser") || "null");
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      const emailEl = document.getElementById("user-email");
      const phoneEl = document.getElementById("user-phone");

      if (loggedUser && loggedUser.email) {
        // Show email in header
        if (emailEl) emailEl.textContent = loggedUser.email;

        // Find user info by email
        const userInfo = users.find(u => u.email === loggedUser.email);
        if (phoneEl) phoneEl.textContent = "SĐT: " + (userInfo?.phone || "Chưa cập nhật");
      } else {
        // Not logged in
        if (emailEl) emailEl.textContent = "User";
        if (phoneEl) phoneEl.textContent = "SĐT: Chưa cập nhật";
      }

      const logoutBtn = document.getElementById("user-logout-btn");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
          // localStorage.removeItem("currUser");
          window.location.href = "../pages/login.html";
        });
      }
    }) // <-- this closes the .then(html => { ... }) block
    .catch(console.error);
});

// document.addEventListener("DOMContentLoaded", function () {
//     fetch("../pages/header.html")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Failed to load header");
//             }
//             return response.text();
//         })
//         .then(data => {
//             document.getElementById("header-container").innerHTML = data;
//         })
//         .catch(error => console.error("Error loading header:", error));
// });
