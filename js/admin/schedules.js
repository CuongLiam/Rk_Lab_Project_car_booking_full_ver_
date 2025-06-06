
document.addEventListener("DOMContentLoaded", function () {
  renderSchedulesTable();
});

function getData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

const stations = getData('stations');
const buses = getData('buses');
const busCompanies = getData('busCompanies');
const routes = getData('routes');
const schedules = getData('schedule');
const pageSize = 5;
document.getElementById('search-input').addEventListener('input', () => handleSearch(1));



function renderSchedulesTable(list, page = 1) {
  // Lấy lại dữ liệu mới nhất mỗi lần render
  const schedulesData = getData('schedule');
  const data = list || schedulesData;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const pagedSchedules = data.slice(start, end);

  const tbody = document.querySelector('.schedule-list');
  let html = '';
  pagedSchedules.forEach((schedule, index) => {
    const bus = buses.find(b => b.id === schedule.busId);
    const busName = bus ? bus.name : schedule.busId;

    const route = routes.find(r => r.id === schedule.routeId);
    let departureName = '';
    let arrivalName = '';
    if (route) {
      const departureStation = stations.find(st => st.id === route.departureStationId);
      const arrivalStation = stations.find(st => st.id === route.arrivalStationId);
      departureName = departureStation ? departureStation.name : '';
      arrivalName = arrivalStation ? arrivalStation.name : '';
    }
    const routeName = `${departureName} → ${arrivalName}`;

    html += `
      <tr>
        <td>${start + index + 1}</td>
        <td>${routeName}</td>
        <td>${busName}</td>
        <td>${formatDateTime(schedule.departureTime)}</td>
        <td>${formatDateTime(schedule.arrivalTime)}</td>
        <td style="color: ${schedule.status === 'AVAILABLE' ? 'green' :
        schedule.status === 'CANCELED' || schedule.status === 'CANCELLED' ? 'orange' :
          'red'
      }; font-weight: bold;">${schedule.status}</td>
        <td>${schedule.availableSeats}</td>
        <td>
          <button class="btn btn-danger delete-schedule" data-id="${schedule.id}">Delete</button>
          <button class="btn btn-warning edit-schedule" data-id="${schedule.id}">Edit</button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;

  // Also use filtered data for pagination
  renderPagination(data.length, page, pageSize);
}
// Add schedule
document.getElementById('add-schedule-form').onsubmit = function (e) {
  e.preventDefault();
  const formData = new FormData(this);


  const scheduleData = {
    routeId: Number(formData.get('routeId')),
    busId: Number(formData.get('busId')),
    departureTime: formData.get('departureTime'),
    arrivalTime: formData.get('arrivalTime'),
    availableSeats: Number(formData.get('availableSeats')),
    status: formData.get('status'),
    updatedAt: new Date().toISOString(),
  };

  // Nếu đang sửa
  if (currentScheduleId !== null) {
    const index = schedules.findIndex(s => s.id === currentScheduleId);
    if (index !== -1) {
      scheduleData.id = currentScheduleId;
      scheduleData.createdAt = schedules[index].createdAt;
      scheduleData.totalSeats = schedules[index].totalSeats;

      // Nếu bus thay đổi → cập nhật lại totalSeats
      const newBus = buses.find(b => b.id === scheduleData.busId);
      if (newBus) scheduleData.totalSeats = newBus.capacity;

      schedules[index] = scheduleData;
    }
  } else {
    const maxId = schedules.length > 0 ? Math.max(...schedules.map(s => Number(s.id) || 0)) : 0;
    scheduleData.id = maxId + 1;
    scheduleData.createdAt = new Date().toISOString();
    const bus = buses.find(b => b.id === scheduleData.busId);
    scheduleData.totalSeats = bus ? bus.capacity : 0;
    schedules.push(scheduleData);
  }

  localStorage.setItem('schedule', JSON.stringify(schedules));
  this.reset();
  currentScheduleId = null;
  document.getElementById('add-modal').style.display = 'none';
  renderSchedulesTable();
};


// Render route and bus options
function renderRouteAndBusOptions() {

  const routeSelect = document.getElementById('route-select');
  const busSelect = document.getElementById('bus-select');

  // Render route options
  let routeOptions = '';
  routes.forEach(route => {
    const departure = stations.find(st => st.id === route.departureStationId);
    const arrival = stations.find(st => st.id === route.arrivalStationId);
    if (departure && arrival) {
      routeOptions += `<option value="${route.id}">${departure.name} → ${arrival.name}</option>`;
    }
  });
  routeSelect.innerHTML = routeOptions;

  // Render bus options
  let busOptions = '';
  buses.forEach(bus => {
    const company = busCompanies.find(c => c.id === bus.companyId);
    if (company) {
      busOptions += `<option value="${bus.id}">${bus.name} (${company.companyName})</option>`;
    } else {
      busOptions += `<option value="${bus.id}">${bus.name}</option>`;
    }
  });
  busSelect.innerHTML = busOptions;
}


// Mở modal thêm
document.getElementById('add-schedule').onclick = function () {
  renderRouteAndBusOptions();
  document.getElementById('add-modal').style.display = 'flex';
};

// Đóng modal thêm
document.getElementById('close-add-modal').onclick = function () {
  document.getElementById('add-modal').style.display = 'none';
};


// Gán sự kiện khi bấm nút xóa trên mỗi dòng bảng
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-schedule')) {
    const scheduleId = e.target.dataset.id;

    // Gán id vào nút trong modal
    document.getElementById('delete-schedule').dataset.id = scheduleId;
    const deleteModal = new bootstrap.Modal(document.getElementById('delete-modal'));
    deleteModal.show();
  }
});

document.getElementById('delete-schedule').addEventListener('click', function () {
  const id = Number(this.dataset.id);
  if (!id) return;

  let schedules = getData('schedule');
  schedules = schedules.filter(s => s.id !== id);
  localStorage.setItem('schedule', JSON.stringify(schedules));

  renderSchedulesTable(); // cập nhật bảng

  // Ẩn modal xác nhận
  const deleteModalEl = document.getElementById('delete-modal');
  const modalInstance = bootstrap.Modal.getInstance(deleteModalEl);
  if (modalInstance) modalInstance.hide();

  // Xóa id khỏi nút
  this.dataset.id = "";
});


// Pagination rendering
function renderPagination(total, page, pageSize) {
  const totalPages = Math.ceil(total / pageSize);
  let html = '';

  html += `
    <li class="page-item${page === 1 ? ' disabled' : ''}">
      <a class="page-link" href="#" data-page="${page - 1}">Previous</a>
    </li>
  `;

  for (let i = 1; i <= totalPages; i++) {
    html += `
      <li class="page-item${i === page ? ' active' : ''}">
        <a class="page-link" href="#" data-page="${i}">${i}</a>
      </li>
    `;
  }

  html += `
    <li class="page-item${page === totalPages ? ' disabled' : ''}">
      <a class="page-link" href="#" data-page="${page + 1}">Next</a>
    </li>
  `;

  const paginationUl = document.querySelector('ul.pagination');
  paginationUl.innerHTML = html;

}

// Pagination event
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('page-link') && e.target.dataset.page) {
    e.preventDefault();
    const page = Number(e.target.dataset.page);
    const total = getData('schedule').length;
    const pageSize = 5;
    const totalPages = Math.ceil(total / pageSize);
    if (!isNaN(page) && page > 0 && page <= totalPages) {
      renderSchedulesTable(null, page, pageSize);
    }
  }
});





let currentScheduleId = null;

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('edit-schedule')) {
    const scheduleId = Number(e.target.dataset.id);
    const schedules = getData('schedule');
    const schedule = schedules.find(s => s.id === scheduleId);

    if (!schedule) return;

    currentScheduleId = scheduleId; // Ghi nhớ ID để biết là đang sửa

    renderRouteAndBusOptions();

    // Gán giá trị vào form
    document.querySelector('#route-select').value = schedule.routeId;
    document.querySelector('#bus-select').value = schedule.busId;
    document.querySelector('[name="departureTime"]').value = formatInputDateTime(schedule.departureTime);
    document.querySelector('[name="arrivalTime"]').value = formatInputDateTime(schedule.arrivalTime);
    document.querySelector('[name="status"]').value = schedule.status;
    document.querySelector('[name="availableSeats"]').value = schedule.availableSeats;


    // Mở modal
    document.getElementById('add-modal').style.display = 'flex';
  }
});

function handleSearch(page = 1) {
  const keyword = document.getElementById('search-input')?.value?.toLowerCase().trim() || '';

  const filteredSchedules = schedules.filter(schedule => {
    const bus = buses.find(b => b.id === schedule.busId);
    const busName = bus ? bus.name.toLowerCase() : '';

    const route = routes.find(r => r.id === schedule.routeId);
    const departureStation = route ? stations.find(st => st.id === route.departureStationId) : null;
    const arrivalStation = route ? stations.find(st => st.id === route.arrivalStationId) : null;

    const departureName = departureStation ? departureStation.name.toLowerCase() : '';
    const arrivalName = arrivalStation ? arrivalStation.name.toLowerCase() : '';
    const routeName = `${departureName} → ${arrivalName}`;

    return (
      busName.includes(keyword) ||
      departureName.includes(keyword) ||
      arrivalName.includes(keyword) ||
      routeName.includes(keyword)
    );
  });

  renderSchedulesTable(filteredSchedules, page);
}

const logoutModal = document.getElementById('logout-modal');
document.getElementById('logout').onclick = function () {
  logoutModal.style.display = 'flex';
};




// Format date to dd/mm/yyyy hh:mm
function formatDateTime(dateStr) {
  const date = new Date(dateStr);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${dd}/${mm}/${yyyy} ${hh}:${min}`;
}


function formatInputDateTime(dateStr) {
  const date = new Date(dateStr);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
}


document.getElementById("logout").addEventListener("click", () => {
  const modal = bootstrap.Modal.getInstance(document.getElementById("logout-modal"));
  modal.hide();

  document.getElementById("logout-modal").addEventListener('hidden.bs.modal', function () {
    window.location.href = "../login.html";
  }, { once: true });
});
