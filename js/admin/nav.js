//Chuyển trang cho navbar

handleNavClick("dashboard", "dashboard.html");
handleNavClick("schedules", "schedules.html");
handleNavClick("tickets", "ticket.html");
handleNavClick("routes", "routes.html");
handleNavClick("stations", "station.html");
handleNavClick("busCompanies", "busCompanies.html");

function handleNavClick(id, url) {
    const element = document.getElementById(id);
    if (element) {
        element.onclick = function() {
            document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
            this.classList.add("active");
            window.location.href = url;
        };
    }
}