
// DOM Loaded
document.addEventListener("DOMContentLoaded", function () {
  renderSchedulesTable();
});

function getSchedules() {
  return JSON.parse(localStorage.getItem('schedule')) || [];
}
function getStations() {
  return JSON.parse(localStorage.getItem('stations')) || [];
}
function getBuses() {
  return JSON.parse(localStorage.getItem('buses')) || [];
}
function getBusCompanies() {
  return JSON.parse(localStorage.getItem('busCompanies')) || [];
}
function getRoutes() {
  return JSON.parse(localStorage.getItem('routes')) || [];
}

// Render schedules table with pagination
function renderSchedulesTable(list, page = 1, pageSize = 5) {
  const schedules = list || getSchedules();
  const routes = getRoutes();
  const buses = getBuses();
  const stations = getStations();
  const companies = getBusCompanies();

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const pagedSchedules = schedules.slice(start, end);

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
        <td style="color: ${schedule.status === 'AVAILABLE' ? 'green' : 'red'}; font-weight: bold;">${schedule.status}</td>
        <td>${schedule.availableSeats}</td>
        <td>
          <button class="btn btn-danger delete-schedule" data-id="${schedule.id}">Delete</button>
          <button class="btn btn-warning edit-schedule" data-id="${schedule.id}">Edit</button>
        </td>
      </tr>
    `;
  });
  tbody.innerHTML = html;

  renderPagination(schedules.length, page, pageSize);
}

// Add schedule
document.getElementById('add-schedule-form').onsubmit = function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  let schedules = getSchedules();
  const buses = getBuses();

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
    // Thêm mới
    const maxId = schedules.length > 0 ? Math.max(...schedules.map(s => Number(s.id) || 0)) : 0;
    scheduleData.id = maxId + 1;
    scheduleData.createdAt = new Date().toISOString();
    const bus = buses.find(b => b.id === scheduleData.busId);
    scheduleData.totalSeats = bus ? bus.capacity : 0;
    schedules.push(scheduleData);
  }

  // Lưu và render lại
  localStorage.setItem('schedule', JSON.stringify(schedules));
  this.reset();
  currentScheduleId = null;
  document.getElementById('add-modal').style.display = 'none';
  renderSchedulesTable();
};


// Render route and bus options
function renderRouteAndBusOptions() {
  const routes = getRoutes();
  const buses = getBuses();
  const stations = getStations();
  const companies = getBusCompanies();

  const routeSelect = document.getElementById('route-select');
  const busSelect = document.getElementById('bus-select');

  routeSelect.innerHTML = routes.map(route => {
    const departure = stations.find(st => st.id === route.departureStationId);
    const arrival = stations.find(st => st.id === route.arrivalStationId);
    return `<option value="${route.id}">
      ${departure ? departure.name : 'Không rõ'} → ${arrival ? arrival.name : 'Không rõ'}
    </option>`;
  }).join('');

  busSelect.innerHTML = buses.map(bus => {
    const company = companies.find(c => c.id === bus.companyId);
    return `<option value="${bus.id}">${bus.name} (${company ? company.companyName : 'Không rõ nhà xe'})</option>`;
  }).join('');
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
  let schedules = getSchedules();
  if (scheduleIdToDelete !== null) {
    const idx = schedules.findIndex(s => s.id === scheduleIdToDelete);
    if (idx !== -1) {
      schedules.splice(idx, 1);
      localStorage.setItem('schedule', JSON.stringify(schedules));
      renderSchedulesTable();
    }
  }
  document.getElementById('delete-modal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  scheduleIdToDelete = null;
};

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
  if (paginationUl) {
    paginationUl.innerHTML = html;
  }
}

// Pagination event
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('page-link') && e.target.dataset.page) {
    e.preventDefault();
    const page = Number(e.target.dataset.page);
    const total = getSchedules().length;
    const pageSize = 5;
    const totalPages = Math.ceil(total / pageSize);
    if (!isNaN(page) && page > 0 && page <= totalPages) {
      renderSchedulesTable(null, page, pageSize);
    }
  }
});



function handleSearch() {
  const keyword = document.getElementById('search-input').value.toLowerCase().trim();
  const schedules = getSchedules();
  const routes = getRoutes();
  const buses = getBuses();
  const stations = getStations();

  const filtered = schedules.filter(schedule => {
    const bus = buses.find(b => b.id === schedule.busId);
    const route = routes.find(r => r.id === schedule.routeId);

    const busName = bus ? bus.name.toLowerCase() : '';
    let routeName = '';
    if (route) {
      const dep = stations.find(s => s.id === route.departureStationId);
      const arr = stations.find(s => s.id === route.arrivalStationId);
      routeName = `${dep ? dep.name : ''} → ${arr ? arr.name : ''}`.toLowerCase();
    }

    return busName.includes(keyword) || routeName.includes(keyword);
  });

  renderSchedulesTable(filtered);
}


let currentScheduleId = null; 

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('edit-schedule')) {
    const scheduleId = Number(e.target.dataset.id);
    const schedules = getSchedules();
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
