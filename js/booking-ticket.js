localStorage.setItem("loggedUsers", JSON.stringify(["alice@example.com"]));
//JS cho bộ lọc
const minSlider = document.getElementById('min-time');
const maxSlider = document.getElementById('max-time');
const minDisplay = document.getElementById('min-time-display');
const maxDisplay = document.getElementById('max-time-display');
const activeTrack = document.getElementById('active-track');

const minSliderPrice = document.getElementById('min-price');
const maxSliderPrice = document.getElementById('max-price');
const track = document.getElementById('price-active-track');
const minLabel = document.getElementById('min-price-label');
const maxLabel = document.getElementById('max-price-label');

//JS Chọn giờ đi
function formatTime(value) {
  const h = String(Math.floor(value / 60)).padStart(2, '0');
  const m = String(value % 60).padStart(2, '0');
  return `${h}:${m}`;
}

function updateTimeSlider() {
  let min = parseInt(minSlider.value);
  let max = parseInt(maxSlider.value);

  if (min > max) [min, max] = [max, min];

  minDisplay.textContent = formatTime(min);
  maxDisplay.textContent = formatTime(max);

  const percentMin = min / 1439 * 100;
  const percentMax = max / 1439 * 100;
  activeTrack.style.left = percentMin + '%';
  activeTrack.style.width = (percentMax - percentMin) + '%';
}

minSlider.addEventListener('input', updateTimeSlider);
maxSlider.addEventListener('input', updateTimeSlider);
updateTimeSlider();


//JS Chọn giá vé
function formatCurrency(value) {
  return new Intl.NumberFormat('vi-VN').format(value);
}

function updatePriceSlider(event) {
  let minVal = parseInt(minSliderPrice.value);
  let maxVal = parseInt(maxSliderPrice.value);

  if (minVal > maxVal) {
    if (event && event.target === minSliderPrice) {
      maxSliderPrice.value = minVal;
    } else {
      minSliderPrice.value = maxVal;
    }
  }

  const minPercent = (minSliderPrice.value / 2000000) * 100;
  const maxPercent = (maxSliderPrice.value / 2000000) * 100;

  track.style.left = minPercent + '%';
  track.style.width = (maxPercent - minPercent) + '%';

  minLabel.textContent = formatCurrency(minSliderPrice.value);
  maxLabel.textContent = formatCurrency(maxSliderPrice.value);
}

minSliderPrice.addEventListener('input', updatePriceSlider);
maxSliderPrice.addEventListener('input', updatePriceSlider);
window.addEventListener('load', () => {
  updateTimeSlider();
  updatePriceSlider();
  processData(); // Đảm bảo gọi processData khi trang load
});

//=================================FAKE-DATA========================================
// import { fakeData } from "./fake-data.js";


// real data ========================================================
// import "./data.js";

let data = [];
let routes = [];
let buses = [];
let stations = [];

try {
  data = JSON.parse(localStorage.getItem("schedule")) || [];
} catch {
  data = [];
}
try {
  routes = JSON.parse(localStorage.getItem("routes")) || [];
} catch {
  routes = [];
}
try {
  buses = JSON.parse(localStorage.getItem("buses")) || [];
} catch {
  buses = [];
}
try {
  stations = JSON.parse(localStorage.getItem("stations")) || [];
} catch {
  stations = [];
}

//=================================Chức năng========================================
let right = document.getElementById("right");
// let data = fakeData.schedule; // Biến để lấy dữ liệu từ Schedule để thực hiện các chức năng
let timeStartSelect = document.getElementById("timeStart");
let sortPriceSelect = document.getElementById("sortPrice");

// let data = JSON.parse(localStorage.getItem("schedule")) || [];
// let routes = JSON.parse(localStorage.getItem("routes")) || [];
// let buses = JSON.parse(localStorage.getItem("buses")) || [];
// let stations = JSON.parse(localStorage.getItem("stations")) || [];


//Lấy các input cho bộ lọc nhà xe
const garageCheckboxes = [
  document.getElementById('checkboxGarage1'),
  document.getElementById('checkboxGarage2'),
  document.getElementById('checkboxGarage3'),
  document.getElementById('checkboxGarage4'),
  document.getElementById('checkboxGarage5'),
  document.getElementById('checkboxGarage6')
];
const garageInput = document.querySelector('.form-control.mb-2[placeholder=""]');
const clearGarageBtn = document.querySelector('.btn.btn-light.mt-3.w-100');

// Hàm lấy tên nhà xe từ checkbox (label)
function getCheckedGarages() {
  return garageCheckboxes
    .filter(cb => cb.checked)
    .map(cb => cb.nextElementSibling.textContent.trim());
}
//Hàm lấy yyyy-mm-dd
const formatDateYMD = (dateInput) => {
  const date = new Date(dateInput);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

//Hàm lấy giá trị giờ phút
const getHoursAndMinutes = (datetimeString) => {
  const date = new Date(datetimeString);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}
//Render Địa điểm
document.getElementById("fromLocation").innerText = sessionStorage.getItem("from");
document.getElementById("toLocation").innerText = sessionStorage.getItem("to");
//RENDER DATA
const renderDashboard = () => {
  let html = '';

  data.forEach(item => {
    // let currRoute = fakeData.routes.find(route => route.id == item.routeId);
    // let currBus = fakeData.buses.find(bus => bus.id == item.busId);
    // let departureStation = fakeData.stations.find(station => station.id == currRoute.departureStationId);
    // let arrivalStation = fakeData.stations.find(station => station.id == currRoute.arrivalStationId);

    let currRoute = routes.find(route => route.id == item.routeId);
    let currBus = buses.find(bus => bus.id == item.busId);
    let departureStation = stations.find(station => station.id == currRoute.departureStationId);
    let arrivalStation = stations.find(station => station.id == currRoute.arrivalStationId);

    html += ` <div class="card">
                <div class="detailCard">
                    <img class="imgCard imgInfo" src="../assets/imgs/header/1725701779816.jpeg.png" alt="img">
                    <div class="info">
                        <h5 class="card-title mb-1">${currBus.name} <span class="badge bg-primary">4.5</span><span
                                class="font-size-14 color767676">* 21
                                bài đánh giá</span></h5>
                        <span class="text-muted font-size-12">${currBus.description}</span><br>
                        <div class="detail">
                            <div class="itemGrid color767676"><b>${getHoursAndMinutes(item.departureTime)}</b></div>
                            <div class="itemGrid text-center timeAvg">
                                <p class="font-size-12">${currRoute.duration}</p>
                                <img class="arrow" src="../assets/imgs/dat_ve/from-to2.png.png" alt="arrow">
                            </div>
                            <div class="itemGrid color767676 text-end"><b>${getHoursAndMinutes(item.arrivalTime)}</b></div>
                            <div class="itemGrid font-size-12 text-primary text-nowrap">${departureStation.location}</div>
                            <div class="itemGrid text-center ">-</div>
                            <div class="itemGrid font-size-12 text-primary text-end">${arrivalStation.location}</div>
                            <div class="itemGrid moreDetail font-size-14 italic">*Thuộc chuyến ${getHoursAndMinutes(item.departureTime)} ${formatDateYMD(item.departureTime)}
                                ${departureStation.location} - ${arrivalStation.location}
                            </div>
                            <div class="itemGrid hide-div"><a data-bs-toggle="collapse" href="#detail1" role="button"
                                    class="text-primary mt-1 d-inline-block text-decoration-none font-size-14 text-nowrap">
                                    Thông tin chi tiết
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="price">
                        <div>
                            <p class="cost text-nowrap">Từ <b class="font-size-20">${currRoute.price}</b>đ</p>
                            <p class="font-size-14 slot">${item.availableSeats} Còn trống</p>
                        </div>
                        <button class="btnChoose font-size-14" data-ticket-id="${item.id}">
                          <i class="fa-solid fa-car"></i>
                          <span>Chọn xe</span>
                        </button>
                    </div>
                </div>
                <!-- Nội dung chi tiết -->
                <div class="collapse border-top" id="detail1">
                    <div class="collapse border-top" id="detail1">
                        <div class="p-3">
                            <ul class="nav nav-tabs nav-justified border-bottom" id="detailTabs" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active border-0" id="images-tab" data-bs-toggle="tab"
                                        data-bs-target="#images" type="button" role="tab" aria-controls="images"
                                        aria-selected="true">
                                        Hình ảnh
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link border-0" id="policy-tab" data-bs-toggle="tab"
                                        data-bs-target="#policy" type="button" role="tab" aria-controls="policy"
                                        aria-selected="false">
                                        Phí hủy
                                    </button>
                                </li>
                            </ul>
                            <div class="tab-content mt-3" id="detailTabsContent">
                                <div class="tab-pane fade show active mx-0 text-center" id="images" role="tabpanel"
                                    aria-labelledby="images-tab">
                                    <img src="../assets/imgs/header/image 1.png" class="img-fluid rounded mb-3"
                                        alt="imgMoreDetail">
                                </div>
                                <div class="tab-pane fade" id="policy" role="tabpanel" aria-labelledby="policy-tab">
                                    <p class="text-muted font-size-14">
                                        Update sau
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
  })
  right.innerHTML = html

  // Add event listeners for all "Chọn xe" buttons
  right.querySelectorAll('.btnChoose[data-ticket-id]').forEach(btn => {
    btn.addEventListener('click', function() {
      const ticketId = this.getAttribute('data-ticket-id');
      showTicketModal(ticketId);
    });
  });
}

// Hàm xử lý chung
const processData = () => {
  data = JSON.parse(localStorage.getItem("schedule")) || [];

  // Lọc theo search tab
  const from = sessionStorage.getItem("from");
  const to = sessionStorage.getItem("to");
  const date = JSON.parse(sessionStorage.getItem("date"));
  if (from || to) {
    data = data.filter(item => {
      const route = routes.find(route => route.id === item.routeId);
      const departureStation = stations.find(station => station.id === route.departureStationId);
      const arrivalStation = stations.find(station => station.id === route.arrivalStationId);
      let match = true;
      if (from) {
        match = match && (
          departureStation?.name === from ||
          departureStation?.location === from
        );
      }
      if (to) {
        match = match && (
          arrivalStation?.name === to ||
          arrivalStation?.location === to
        );
      }
      if (date) {
        match = match && (
          formatDateYMD(item.departureTime) == formatDateYMD(date)
        )
      }
      return match;
    });
  }

  // Lọc giờ đi theo slider
  const minTime = parseInt(minSlider.value, 10);
  const maxTime = parseInt(maxSlider.value, 10);
  data = data.filter(item => {
    const dep = new Date(item.departureTime);
    const minutes = dep.getUTCHours() * 60 + dep.getUTCMinutes();
    return minutes >= Math.min(minTime, maxTime) && minutes <= Math.max(minTime, maxTime);
  });

  // Lọc giá vé theo slider
  const minPrice = parseInt(minSliderPrice.value, 10);
  const maxPrice = parseInt(maxSliderPrice.value, 10);
  data = data.filter(item => {
    const route = routes.find(route => route.id === item.routeId);
    if (!route) return false;
    const price = route.price;
    return price >= Math.min(minPrice, maxPrice) && price <= Math.max(minPrice, maxPrice);
  });

  // Lọc theo nhà xe
  const checkedGarages = getCheckedGarages();
  const garageText = garageInput.value.trim().toLowerCase();
  if (checkedGarages.length > 0 || garageText) {
    data = data.filter(item => {
      const bus = buses.find(bus => bus.id === item.busId);
      if (!bus) return false;
      const name = bus.name.toLowerCase();
      // Nếu có chọn checkbox, lọc theo checkbox
      if (checkedGarages.length > 0) {
        return checkedGarages.some(g => name.includes(g.toLowerCase()));
      }
      // Nếu không, lọc theo input text
      if (garageText) {
        return name.includes(garageText);
      }
      return true;
    });
  }

  //Lọc giờ đi theo select (dropdown)
  const timeStartValue = timeStartSelect.value;
  if (timeStartValue !== "Giờ đi") {
    data = data.filter(item => parseInt(timeStartValue.split(":")[0], 10) <= parseInt(getHoursAndMinutes(item.departureTime).split(":")[0], 10))
  }

  //Sắp xếp theo mức giá
  let sortPriceDirection = sortPriceSelect.value;
  if (sortPriceDirection !== "Mức giá") {
    if (sortPriceDirection === "true") {
      data = data.sort((a, b) => {
        let priceA = routes.find(item => item.id === a.routeId)?.price || 0;
        let priceB = routes.find(item => item.id === b.routeId)?.price || 0;
        return priceA - priceB
      })
    } else {
      data = data.sort((a, b) => {
        let priceA = routes.find(item => item.id === a.routeId)?.price || 0;
        let priceB = routes.find(item => item.id === b.routeId)?.price || 0;
        return priceB - priceA
      })
    }
  }

  renderDashboard();
}
//Lọc giờ đi
timeStartSelect.addEventListener("change", processData);
//Sắp xếp theo mức giá
sortPriceSelect.addEventListener("change", processData);

//slider giờ đi
minSlider.addEventListener('input', processData);
maxSlider.addEventListener('input', processData);

//slider giá vé
minSliderPrice.addEventListener('input', processData);
maxSliderPrice.addEventListener('input', processData);

//checkbox nhà xe
garageCheckboxes.forEach(cb => cb.addEventListener('change', processData));

//input text nhà xe
garageInput.addEventListener('input', processData);

//nút xóa đã chọn
clearGarageBtn.addEventListener('click', () => {
  garageCheckboxes.forEach(cb => cb.checked = false);
  garageInput.value = '';
  processData();
});

renderDashboard();

function showTicketModal(itemId) {
  // Find the ticket info
  const item = data.find(d => d.id == itemId);
  if (!item) return;

  const currRoute = routes.find(route => route.id == item.routeId);
  const currBus = buses.find(bus => bus.id == item.busId);
  const departureStation = stations.find(station => station.id == currRoute.departureStationId);
  const arrivalStation = stations.find(station => station.id == currRoute.arrivalStationId);

  // Build ticket info HTML
  const ticketInfoHtml = `
    <div>
      <p><b>Nhà xe:</b> ${currBus.name}</p>
      <p><b>Giờ đi:</b> ${getHoursAndMinutes(item.departureTime)} - <b>Giờ đến:</b> ${getHoursAndMinutes(item.arrivalTime)}</p>
      <p><b>Điểm đi:</b> ${departureStation.location} - <b>Điểm đến:</b> ${arrivalStation.location}</p>
      <p><b>Ngày đi:</b> ${formatDateYMD(item.departureTime)}</p>
      <p><b>Giá vé:</b> ${formatCurrency(currRoute.price)}đ</p>
      <p><b>Số ghế còn trống:</b> ${item.availableSeats}</p>
    </div>
  `;

  const html = `
    ${ticketInfoHtml}
    <hr>
    <div class="text-center mb-3">
      <b>Bạn muốn mua vé bằng cách nào?</b>
    </div>
    <div class="d-flex justify-content-center gap-3">
      <button type="button" class="btn btn-warning" id="buyAtCounterBtn">Mua vé tại quầy</button>
      <button type="button" class="btn btn-primary" id="bookOnlineBtn">Book online</button>
    </div>
  `;
  document.getElementById('ticketInfoModalBody').innerHTML = html;

  // Show modal using Bootstrap's JS API
  const ticketModal = new bootstrap.Modal(document.getElementById('ticketInfoModal'));
  ticketModal.show();

  // Handle "Mua vé tại quầy"
  document.getElementById('buyAtCounterBtn').onclick = function() {
    ticketModal.hide();
    // Show confirmation modal with ticket info
    document.getElementById('buyAtCounterModalBody').innerHTML = `
      <div class="mb-3">
        ${ticketInfoHtml}
      </div>
      <div class="text-center">
        <b>Bạn có chắc chắn muốn mua vé này tại quầy?</b>
      </div>
    `;
    const confirmModal = new bootstrap.Modal(document.getElementById('buyAtCounterModal'));
    confirmModal.show();

    // Set up confirm button
    document.getElementById('confirmBuyAtCounterBtn').onclick = function() {
      // Get tickets array
      let tickets = [];
      try {
        tickets = JSON.parse(localStorage.getItem("tickets")) || [];
      } catch { tickets = []; }

      // Get schedules array
      let schedules = [];
      try {
        schedules = JSON.parse(localStorage.getItem("schedule")) || [];
      } catch { schedules = []; }

      // Find the schedule for this ticket
        const scheduleIndex = schedules.findIndex(sch => sch.id === item.id);
        if (scheduleIndex === -1) {
          Swal.fire({
            icon: 'error',
            title: 'Lỗi!',
            text: 'Không tìm thấy lịch trình!',
            confirmButtonText: 'OK'
          });
          return;
        }
        // Check availableSeats
        if (schedules[scheduleIndex].availableSeats <= 0) {
          Swal.fire({
            icon: 'error',
            title: 'Hết chỗ!',
            text: 'Chuyến này đã hết vé, vui lòng chọn chuyến khác.',
            confirmButtonText: 'OK'
          });
          return;
        }

      // Generate new id (auto-increment)
      const newId = tickets.length ? Math.max(...tickets.map(t => t.id)) + 1 : 1;

      // Generate new seatId (auto-increment)
      const newSeatId = tickets.length ? Math.max(...tickets.map(t => t.seatId || 0)) + 1 : 1;

      // Get phoneUser from loggedUsers and users
      let phoneUser = null;
      try {
        const loggedUsers = JSON.parse(localStorage.getItem("loggedUsers")) || [];
        const lastEmail = loggedUsers.length ? loggedUsers[loggedUsers.length - 1] : null;
        if (lastEmail) {
          const users = JSON.parse(localStorage.getItem("users")) || [];
          const foundUser = users.find(u => u.email === lastEmail);
          phoneUser = foundUser ? foundUser.phone : null;
        }
      } catch { phoneUser = null; }

      // Push new ticket object
      tickets.push({
        id: newId,
        scheduleId: item.id,
        seatId: newSeatId,
        departureTime: item.departureTime,
        arrivalTime: item.arrivalTime,
        seatType: "STANDARD", // or your default
        price: currRoute.price,
        status: "BOOKED",
        phoneUser: phoneUser,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Decrease availableSeats
      schedules[scheduleIndex].availableSeats -= 1;
      // Optionally, update status if now 0
      if (schedules[scheduleIndex].availableSeats === 0) {
        schedules[scheduleIndex].status = "FULL";
      }


      localStorage.setItem("tickets", JSON.stringify(tickets));
      localStorage.setItem("schedule", JSON.stringify(schedules));
      confirmModal.hide();

      // SweetAlert2 success
      Swal.fire({
        icon: 'success',
        title: 'Thành công!',
        text: 'Bạn đã mua vé tại quầy thành công!',
        confirmButtonText: 'OK'
      }).then(() => {
        processData(); // Refresh the UI to show updated seats
      });
    };
  };

  // Handle "Book online" (optional)
  document.getElementById('bookOnlineBtn').onclick = function() {
    window.console.log("Book online");
    ticketModal.hide();
  };
}