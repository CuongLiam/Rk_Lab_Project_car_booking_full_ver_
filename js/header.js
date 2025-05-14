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
      const target = this.getAttribute("data-href");
      if (target) {
        window.location.href = target;
      }
    });
  });
});
