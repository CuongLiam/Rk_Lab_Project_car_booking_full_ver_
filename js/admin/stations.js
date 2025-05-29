// import { fakeData } from "../fake-data.js";

// const stations = fakeData.stations;

let stations = [];

try {
    stations = JSON.parse(localStorage.getItem("stations")) || [];
} catch {
    stations = [];
}

let currentPage = 1;
const itemsPerPage = 10;


// Render table
function renderStations() {
    const tbody = document.getElementById('station-list');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedStations = stations.slice(start, end);

    tbody.innerHTML = paginatedStations.map(s => `
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td><img src="${s.image}" alt="" style="width:60px;height:40px;object-fit:cover"></td>
            <td>${s.wallpaper}</td>
            <td>${s.descriptions}</td>
            <td>${s.location}</td>
            <td colspan="2" class="d-flex justify-space-between p-2" style="gap: 10px;">
                <button class="btn btn-warning btn-sm" disabled>Edit</button>
                <button class="btn btn-danger btn-sm" disabled>Delete</button>
            </td>
        </tr>
    `).join('');

    renderPagination();
}

function renderPagination() {
    let pagination = document.getElementById('station-pagination');
    if (!pagination) {
        pagination = document.createElement('div');
        pagination.id = 'station-pagination';
        pagination.className = 'd-flex justify-content-center mt-3';
        document.querySelector('.main-content').appendChild(pagination);
    }

    const totalPages = Math.ceil(stations.length / itemsPerPage);
    let html = '';

    html += `<button class="btn btn-sm btn-outline-primary me-2" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">&lt;</button>`;

    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="btn btn-sm ${i === currentPage ? 'btn-primary' : 'btn-outline-primary'} mx-1" data-page="${i}">${i}</button>`;
    }

    html += `<button class="btn btn-sm btn-outline-primary ms-2" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">&gt;</button>`;

    pagination.innerHTML = html;

    // Add event listeners
    pagination.querySelectorAll('button[data-page]').forEach(btn => {
        btn.onclick = function () {
            const page = Number(this.getAttribute('data-page'));
            if (page >= 1 && page <= totalPages) {
                currentPage = page;
                renderStations();
            }
        };
    });
}

document.addEventListener('DOMContentLoaded', renderStations);