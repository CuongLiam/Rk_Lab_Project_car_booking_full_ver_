

document.addEventListener("DOMContentLoaded", function () {
    renderSchedulesTable();
});


function getSticket() {
    return JSON.parse(localStorage.getItem('tickets')) || [];
}

function renderSchedulesTable(list) {
    const dataTicket = getSticket();
    const tbody = document.querySelector('.schedule-list');
    let html = ''; // Bổ sung khai báo biến html

    dataTicket.forEach((ticket, index) => {
        html += `
          <tr>
            <td>${index + 1}</td>
            <td>${ticket.seatId}</td>
            <td>${ticket.scheduleId}</td>
            <td>${ticket.seatType}</td>
            <td>${formatDateTime(ticket.departureTime)}</td>
            <td>${formatDateTime(ticket.arrivalTime)}</td>
            <td style="color: ${ticket.status === 'AVAILABLE' ? 'green' : 'red'}; font-weight: bold;">${ticket.status}</td>
            <td>${ticket.price}</td>
            <td>
              <button class="btn btn-danger delete-schedule" data-id="${ticket.id}">Delete</button>
              <button class="btn btn-warning edit-schedule" data-id="${ticket.id}">Edit</button>
            </td>
          </tr>
        `;
    });
    tbody.innerHTML = html;
}


// Xóa lịch trình
let scheduleIdToDelete = null;
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-schedule')) {
        scheduleIdToDelete = Number(e.target.dataset.id);
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('delete-modal').style.display = 'flex';
    }
});

document.getElementById('close-modal-schedule').onclick = function () {
    document.getElementById('delete-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    scheduleIdToDelete = null;
};

document.getElementById('delete-schedule').onclick = function () {
    let tickets = getSticket();
    if (scheduleIdToDelete !== null) {
        const idx = tickets.findIndex(t => t.id === scheduleIdToDelete);
        if (idx !== -1) {
            tickets.splice(idx, 1);
            localStorage.setItem('tickets', JSON.stringify(tickets));
            renderSchedulesTable();
        }
    }
    document.getElementById('delete-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    scheduleIdToDelete = null;
};

let currentPage = 1;
const itemsPerPage = 5;
let searchQuery = "";

function renderSchedulesTable(list) {
    let dataTicket = list || getSticket();
    if (searchQuery && searchQuery.trim() !== "") {
        const keyword = searchQuery.trim().toLowerCase();
        dataTicket = dataTicket.filter(ticket =>
            ticket.seatId.toString().includes(keyword) ||
            ticket.scheduleId.toString().includes(keyword)
        );
    }

    const tbody = document.querySelector('.schedule-list');
    tbody.innerHTML = "";

    // Phân trang
    const totalPages = Math.ceil(dataTicket.length / itemsPerPage);
    if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, dataTicket.length);
    const pagedTickets = dataTicket.slice(startIndex, endIndex);

    pagedTickets.forEach((ticket, index) => {
        tbody.innerHTML += `
          <tr>
            <td>${startIndex + index + 1}</td>
            <td>${ticket.seatId}</td>
            <td>${ticket.scheduleId}</td>
            <td>${formatDateTime(ticket.departureTime)}</td>
            <td>${formatDateTime(ticket.arrivalTime)}</td>
            <td>${ticket.seatType}</td>
            <td style="color: ${ticket.status === 'AVAILABLE' ? 'green' : 'red'}; font-weight: bold;">${ticket.status}</td>
            <td>${ticket.price} đ</td>
            <td>
              <button class="btn btn-danger delete-schedule" data-id="${ticket.id}">Delete</button>
              <button class="btn btn-warning edit-schedule" data-id="${ticket.id}">Edit</button>
            </td>
          </tr>
        `;
    });

    if (dataTicket.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" class="text-center">Không tìm thấy vé nào</td></tr>`;
    }

    renderPagination(dataTicket);
}

// Bắt sự kiện tìm kiếm
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', function () {
        searchQuery = this.value;
        currentPage = 1;
        renderSchedulesTable();
    });
}

// Hàm phân trang
function renderPagination(dataTicket) {
    const paginationUl = document.querySelector("ul.pagination");
    if (!paginationUl) return;
    paginationUl.innerHTML = "";

    const totalPages = Math.ceil(dataTicket.length / itemsPerPage);
    if (totalPages <= 1) return;

    // Previous
    paginationUl.innerHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <button class="page-link" onclick="changePage(${currentPage - 1})">Previous</button>
        </li>
    `;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        paginationUl.innerHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <button class="page-link" onclick="changePage(${i})">${i}</button>
            </li>
        `;
    }

    // Next
    paginationUl.innerHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <button class="page-link" onclick="changePage(${currentPage + 1})">Next</button>
        </li>
    `;
}

// Hàm chuyển trang (phải là global để gọi từ HTML)
function changePage(page) {
    const dataTicket = getSticket();
    const totalPages = Math.ceil(dataTicket.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderSchedulesTable();
}

let editingTicketId = null;

// Bắt sự kiện click nút Edit
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('edit-schedule')) {
        editingTicketId = Number(e.target.dataset.id);
        // Lấy ticket hiện tại
        const tickets = getSticket();
        const ticket = tickets.find(t => t.id === editingTicketId);
        if (ticket) {
            // Đặt giá trị cho select
            const statusSelect = document.getElementById('ticket-status');
            if (statusSelect) {
                statusSelect.value = ticket.status.toLowerCase();
            }
            // Hiện modal
            document.getElementById('edit-ticket-status-model').classList.remove('d-none');
        }
    }
});

// Lưu status mới
document.getElementById('save-ticket-status').onclick = function () {
    const statusSelect = document.getElementById('ticket-status');
    const newStatus = statusSelect.value.toUpperCase();
    let tickets = getSticket();
    const idx = tickets.findIndex(t => t.id === editingTicketId);
    if (idx !== -1) {
        tickets[idx].status = newStatus;
        localStorage.setItem('tickets', JSON.stringify(tickets));
        renderSchedulesTable();
    }
    document.getElementById('edit-ticket-status-model').classList.add('d-none');
    editingTicketId = null;
};
// Hủy sửa status
document.getElementById('cancel-edit-status').onclick = function () {
    document.getElementById('edit-ticket-status-model').classList.add('d-none');
    editingTicketId = null;
};

// Hàm định dạng ngày giờ
function formatDateTime(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}


