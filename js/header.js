document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-main .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Remove active classes from all
      navLinks.forEach((l) => l.classList.remove("active", "custom-active"));
      // Add to clicked
      this.classList.add("active", "custom-active");
      // Redirect
      const target = this.getAttribute("href");
      if (target) {
        window.location.href = target;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("../pages/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load header");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});
