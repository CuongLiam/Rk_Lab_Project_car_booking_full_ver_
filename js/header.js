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
      sessionStorage.removeItem(DONE_KEY);  // reset for next session
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
      // if you have a saved page, haven't yet redirected,
      // and you're not already there → do one replace
      if (savedHref
       && !window.location.href.endsWith(savedHref)
       && !redirected
      ) {
        sessionStorage.setItem(DONE_KEY, "1");
        return window.location.replace(savedHref);
      }

      initNavLinks();
    })
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
