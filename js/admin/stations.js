const stationModal = document.getElementById('station-modal');
const stationForm = document.getElementById('station-form');
const stationModalTitle = document.getElementById('station-modal-title');
const closeModalBtn = document.getElementById('close-modal');
const cancelModalBtn = document.getElementById('cancel-modal');
const addStationBtn = document.getElementById('add-station');

const deleteModal = document.getElementById('delete-modal');
const cancelDeleteBtn = document.getElementById('cancel-delete');
const confirmDeleteBtn = document.getElementById('confirm-delete');

let editingStationId = null;
let deletingStationId = null;

function loadStations() {
    try {
        return JSON.parse(localStorage.getItem("stations")) || [];
    } catch {
        return [];
    }
}
function saveStations(data) {
    localStorage.setItem("stations", JSON.stringify(data));
}

let stations = loadStations();

let currentPage = 1;
const itemsPerPage = 10;

let searchKeyword = "";

function renderStations() {
    stations = loadStations();

    // search
    let filtered = stations.filter(item => {
        return (
            String(item.id).includes(searchKeyword) ||
            item.name.toLowerCase().includes(searchKeyword)
        );
    });

    const tbody = document.getElementById('station-list');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedStations = filtered.slice(start, end);

    tbody.innerHTML = paginatedStations.map(s => `
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td><img src="${s.image}" alt="" style="width:60px;height:40px;object-fit:cover"></td>
            <td>${s.wallpaper}</td>
            <td>${s.descriptions}</td>
            <td>${s.location}</td>
            <td colspan="2" class="d-flex justify-content-between p-2" style="gap: 5px;">
                <button class="btn btn-warning btn-sm">Edit</button>
                <button class="btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>
    `).join('');

    renderPagination(filtered.length);
}

function renderPagination(totalItems) {
    let pagination = document.getElementById('station-pagination');
    if (!pagination) {
        pagination = document.createElement('div');
        pagination.id = 'station-pagination';
        pagination.className = 'd-flex justify-content-center mt-3';
        document.querySelector('.main-content').appendChild(pagination);
    }

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let html = '';

    html += `<button class="btn btn-sm btn-outline-primary me-2" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">&lt;&lt;</button>`;

    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="btn btn-sm ${i === currentPage ? 'btn-primary' : 'btn-outline-primary'} mx-1" data-page="${i}">${i}</button>`;
    }

    html += `<button class="btn btn-sm btn-outline-primary ms-2" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">&gt;&gt;</button>`;

    pagination.innerHTML = html;

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

document.getElementById('search-station').addEventListener('input', function (e) {
    searchKeyword = e.target.value.toLowerCase().trim();
    currentPage = 1; // Reset to 1st page on search
    renderStations();
});



document.addEventListener('DOMContentLoaded', renderStations);

// Modal ---
function showModal(modal) {
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    modal.setAttribute('aria-modal', 'true');
    modal.removeAttribute('aria-hidden');
    document.body.classList.add('modal-open');
    modal._outsideClickHandler = function(e) {
        if (e.target === modal) {
            hideModal(modal);
        }
    };
    modal.addEventListener('mousedown', modal._outsideClickHandler);
}
function hideModal(modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
    document.body.classList.remove('modal-open');
    if (modal._outsideClickHandler) {
        modal.removeEventListener('mousedown', modal._outsideClickHandler);
        modal._outsideClickHandler = null;
    }
    setTimeout(() => {
        modal.style.display = 'none';
    }, 250);
}

// Add Station
addStationBtn.addEventListener('click', () => {
    editingStationId = null;
    stationForm.reset();
    stationModalTitle.textContent = 'Add Station';
    document.getElementById('station-error').innerHTML = "";
    showModal(stationModal);
});

// Edit/Delete Station
document.getElementById('station-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-warning')) {
        const tr = e.target.closest('tr');
        const id = Number(tr.children[0].textContent);
        const station = stations.find(s => s.id === id);
        if (station) {
            editingStationId = id;
            document.getElementById('station-id').value = station.id;
            document.getElementById('station-name').value = station.name;
            document.getElementById('station-image').value = station.image;
            document.getElementById('station-wallpaper').value = station.wallpaper;
            document.getElementById('station-descriptions').value = station.descriptions;
            document.getElementById('station-location').value = station.location;
            stationModalTitle.textContent = 'Edit Station';
            document.getElementById('station-error').innerHTML = "";
            showModal(stationModal);
        }
    }
    if (e.target.classList.contains('btn-danger')) {
        const tr = e.target.closest('tr');
        const id = Number(tr.children[0].textContent);
        deletingStationId = id;
        showModal(deleteModal);
    }
});

// Close modals
closeModalBtn.addEventListener('click', () => hideModal(stationModal));
cancelModalBtn.addEventListener('click', () => hideModal(stationModal));
cancelDeleteBtn.addEventListener('click', () => hideModal(deleteModal));

// Add/Edit logic + validation
stationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('station-id').value;
    const name = document.getElementById('station-name').value.trim();
    const image = document.getElementById('station-image').value;
    const wallpaper = document.getElementById('station-wallpaper').value;
    const descriptions = document.getElementById('station-descriptions').value;
    const location = document.getElementById('station-location').value;
    const errorEl = document.getElementById('station-error');

    let data = loadStations();

    const nameExists = data.some(
        s => s.name.trim().toLowerCase() === name.toLowerCase() && (!editingStationId || s.id !== editingStationId)
    );
    if (nameExists) {
        errorEl.innerHTML = "Stations names cannot be repeated";
        return;
    }

    if (!editingStationId && data.some(s => String(s.id) === id && id !== "")) {
        errorEl.innerHTML = "Station ID must be unique!";
        return;
    }

    errorEl.innerHTML = "";

    if (editingStationId) {
        // Edit
        const idx = data.findIndex(s => s.id === editingStationId);
        if (idx !== -1) {
            data[idx] = {
                ...data[idx],
                name, image, wallpaper, descriptions, location
            };
        }
    } else {
        // Add
        const newId = data.length ? Math.max(...data.map(s => s.id)) + 1 : 1;
        data.push({
            id: newId,
            name, image, wallpaper, descriptions, location
        });
    }
    saveStations(data);
    hideModal(stationModal);
    renderStations();
});

// Delete logic with reindexing if required but now its not coincide (*/ω＼*)
confirmDeleteBtn.addEventListener('click', function() {
    let data = loadStations();

    const deletedIdx = data.findIndex(s => s.id === deletingStationId);
    if (deletedIdx === -1) {
        hideModal(deleteModal);
        return;
    }

    data.splice(deletedIdx, 1);

    // Reindex: set id = index+1 for all
    // data = data.map((s, idx) => ({ ...s, id: idx + 1 }));
    
    saveStations(data);
    hideModal(deleteModal);
    renderStations();
});


document.getElementById("logout").addEventListener("click", () => {
  const modal = bootstrap.Modal.getInstance(document.getElementById("logout-modal"));
  modal.hide();

  document.getElementById("logout-modal").addEventListener('hidden.bs.modal', function () {
    window.location.href = "../login.html";
  }, { once: true });
});


// function renderPagination() {
//     let pagination = document.getElementById('station-pagination');
//     if (!pagination) {
//         pagination = document.createElement('div');
//         pagination.id = 'station-pagination';
//         pagination.className = 'd-flex justify-content-center mt-3';
//         document.querySelector('.main-content').appendChild(pagination);
//     }

//     const totalPages = Math.ceil(stations.length / itemsPerPage);
//     let html = '';

//     html += `<button class="btn btn-sm btn-outline-primary me-2" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">&lt;&lt;</button>`;

//     for (let i = 1; i <= totalPages; i++) {
//         html += `<button class="btn btn-sm ${i === currentPage ? 'btn-primary' : 'btn-outline-primary'} mx-1" data-page="${i}">${i}</button>`;
//     }

//     html += `<button class="btn btn-sm btn-outline-primary ms-2" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">&gt;&gt;</button>`;

//     pagination.innerHTML = html;

//     // Add event listeners
//     pagination.querySelectorAll('button[data-page]').forEach(btn => {
//         btn.onclick = function () {
//             const page = Number(this.getAttribute('data-page'));
//             if (page >= 1 && page <= totalPages) {
//                 currentPage = page;
//                 renderStations();
//             }
//         };
//     });
// }

