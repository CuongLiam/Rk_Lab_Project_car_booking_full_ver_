const itemsPerPage = 8;
let currentPage = 1;

function getRoutes() {
    return JSON.parse(localStorage.getItem("routes")) || [];
}

function renderRoutes(page) {
    const routes = getRoutes();
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentRoutes = routes.slice(start, end);

    const container = document.getElementById("route-container");
    container.innerHTML = "";

    currentRoutes.forEach(route => {
        container.innerHTML += `
            <div class="card-route">
                <img src="${route.img}" alt="${route.title}">
                <div class="textInCard">
                    <p>${route.title}</p>
                    <span>${route.desc}</span>
                </div>
            </div>
        `;
    });

    renderPagination(routes.length);
}

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const prev = document.createElement("div");
    prev.className = "pageItem";
    prev.innerText = "<";
    prev.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderRoutes(currentPage);
        }
    };
    pagination.appendChild(prev);

    for (let i = 1; i <= totalPages; i++) {
        const page = document.createElement("div");
        page.className = "pageItem";
        page.innerText = i;
        if (i === currentPage) {
            page.style.backgroundColor = "#1295DB";
            page.style.color = "#FFFFFF";
        }
        page.onclick = () => {
            currentPage = i;
            renderRoutes(currentPage);
        };
        pagination.appendChild(page);
    }

    const next = document.createElement("div");
    next.className = "pageItem";
    next.innerText = ">";
    next.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderRoutes(currentPage);
        }
    };
    pagination.appendChild(next);
}

document.addEventListener("DOMContentLoaded", () => {
    renderRoutes(currentPage);
});
