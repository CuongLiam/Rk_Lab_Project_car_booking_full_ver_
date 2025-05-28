import { fakeData } from "../fake-data.js";
let fakeDataSchedules = fakeData.schedule;
let fakeDataRoutes = fakeData.routes;
let fakeDataCompanies = fakeData.busCompanies;
let fakeDataStations = fakeData.stations;

function renderSchedulesTable() {
  const tbody = document.querySelector('.schedule-list');
  let html = '';
  fakeDataSchedules.forEach(schedule => {
    const route = fakeDataStations.find(r => r.id === schedule.routeId);
    const bus = fakeDataCompanies.find(b => b.id === schedule.busId);
    html += `
      <tr>
        <td>${route ? route.name : 'Không rõ tuyến'}</td>
        <td>${bus ? bus.companyName : 'Không rõ nhà xe'}</td>
        <td>${schedule.departureTime}</td>
        <td>${schedule.arrivalTime}</td>
        <td style="color: ${schedule.status === 'AVAILABLE' ? 'green' : 'red'}; font-weight: bold;">${schedule.status}</td>
        <td>${schedule.availableSeats}</td>
        <td>
          <button class="btn btn-danger delete-schedule" data-id="${schedule.id}">Delete</button>
          <button class="btn btn-primary edit-schedule" data-id="${schedule.id}">Edit</button>
        </td>
      </tr>
    `;
  });
  tbody.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
  renderSchedulesTable();
});

// Khi bấm nút "Add Schedule"
document.getElementById('add-schedule').onclick = function() {
  const modal = document.getElementById('add-modal');
  // Không cần render option, chỉ hiện modal
  modal.style.display = 'flex';
};

document.getElementById('close-add-modal').onclick = function() {
  document.getElementById('add-modal').style.display = 'none';
}



let scheduleIdToDelete = null;
document.getElementById('add-schedule-form').onsubmit = function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const routeName = formData.get('routeName').trim();
  const busName = formData.get('busName').trim();

  fakeDataSchedules.push({
    id: Date.now(),
    routeName: routeName,
    busName: busName,
    departureTime: formData.get('departureTime'),
    arrivalTime: formData.get('arrivalTime'),
    status: formData.get('status'),
    availableSeats: Number(formData.get('availableSeats'))
  });

  // Đóng modal và reset form
  document.getElementById('add-modal').style.display = 'none';
  this.reset();
  renderSchedulesTable();
};

// Khi bấm nút Delete trên từng dòng
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-schedule')) {
    scheduleIdToDelete = Number(e.target.dataset.id);
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('delete-modal').style.display = 'flex';
  }
});

// Đóng modal xóa
document.getElementById('close-modal-schedule').onclick = function() {
  document.getElementById('delete-modal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  scheduleIdToDelete = null;
};

// Xác nhận xóa
document.getElementById('delete-schedule').onclick = function() {
  if (scheduleIdToDelete !== null) {
    const idx = fakeDataSchedules.findIndex(s => s.id === scheduleIdToDelete);
    if (idx !== -1) {
      fakeDataSchedules.splice(idx, 1);
      renderSchedulesTable();
    }
  }
  document.getElementById('delete-modal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  scheduleIdToDelete = null;
};



















// document.addEventListener('click', function(e) {
//   if (e.target.classList.contains('edit-schedule')) {
//     const id = Number(e.target.dataset.id);
//     const schedule = fakeDataSchedules.find(s => s.id === id);
//     if (!schedule) return;

//     // Tìm route và bus hiện tại
//     const route = fakeDataStations.find(r => r.id === schedule.routeId);
//     const bus = fakeDataCompanies.find(b => b.id === schedule.busId);

//     // Render form edit
//     const modal = document.getElementById('edit-modal');
//     modal.innerHTML = `
//       <div class="modal-content" style="background:#fff;padding:20px;border-radius:8px;">
//         <h3>Edit Schedule</h3>
//         <form id="edit-schedule-form">
//           <label>Route:</label>
//           <select name="routeId" required>
//             ${fakeDataStations.map(r => `<option value="${r.id}" ${r.id===schedule.routeId?'selected':''}>${r.name}</option>`).join('')}
//           </select>
//           <label>Bus:</label>
//           <select name="busId" required>
//             ${fakeDataCompanies.map(b => `<option value="${b.id}" ${b.id===schedule.busId?'selected':''}>${b.companyName}</option>`).join('')}
//           </select>
//           <label>Departure Time:</label>
//           <input type="datetime-local" name="departureTime" value="${schedule.departureTime.slice(0,16)}" required>
//           <label>Arrival Time:</label>
//           <input type="datetime-local" name="arrivalTime" value="${schedule.arrivalTime.slice(0,16)}" required>
//           <label>Status:</label>
//           <select name="status">
//             <option value="AVAILABLE" ${schedule.status==='AVAILABLE'?'selected':''}>AVAILABLE</option>
//             <option value="UNAVAILABLE" ${schedule.status==='UNAVAILABLE'?'selected':''}>UNAVAILABLE</option>
//           </select>
//           <label>Available Seats:</label>
//           <input type="number" name="availableSeats" min="0" value="${schedule.availableSeats}" required>
//           <div style="margin-top:10px;">
//             <button type="submit" class="btn btn-primary">Save</button>
//             <button type="button" id="close-edit-modal" class="btn btn-secondary">Cancel</button>
//           </div>
//         </form>
//       </div>
//     `;
//     modal.style.display = 'block';

//     // Đóng modal
//     document.getElementById('close-edit-modal').onclick = () => {
//       modal.style.display = 'none';
//       modal.innerHTML = '';
//     };

//     // Xử lý submit form
//     document.getElementById('edit-schedule-form').onsubmit = function(ev) {
//       ev.preventDefault();
//       const formData = new FormData(this);
//       schedule.routeId = Number(formData.get('routeId'));
//       schedule.busId = Number(formData.get('busId'));
//       schedule.departureTime = formData.get('departureTime');
//       schedule.arrivalTime = formData.get('arrivalTime');
//       schedule.status = formData.get('status');
//       schedule.availableSeats = Number(formData.get('availableSeats'));
//       modal.style.display = 'none';
//       modal.innerHTML = '';
//       renderSchedulesTable();
//     };
//   }
// });