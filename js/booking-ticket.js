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
});

//=================================FAKE-DATA========================================
let schedule = [
  {
    "id": 1,
    "routeId": 2,
    "busId": 4,
    "departureTime": "2025-05-22T08:00:00.000Z",
    "arrivalTime": "2025-05-22T16:00:00.000Z",
    "availableSeats": 15,
    "totalSeats": 42,
    "status": "AVAILABLE",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 2,
    "routeId": 1,
    "busId": 1,
    "departureTime": "2025-05-23T08:00:00.000Z",
    "arrivalTime": "2025-05-23T16:00:00.000Z",
    "availableSeats": 0,
    "totalSeats": 40,
    "status": "FULL",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 3,
    "routeId": 3,
    "busId": 3,
    "departureTime": "2025-05-24T08:00:00.000Z",
    "arrivalTime": "2025-05-24T16:00:00.000Z",
    "availableSeats": 10,
    "totalSeats": 20,
    "status": "AVAILABLE",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 4,
    "routeId": 4,
    "busId": 2,
    "departureTime": "2025-05-25T08:00:00.000Z",
    "arrivalTime": "2025-05-25T16:00:00.000Z",
    "availableSeats": 5,
    "totalSeats": 30,
    "status": "CANCELLED",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 5,
    "routeId": 5,
    "busId": 5,
    "departureTime": "2025-05-26T08:00:00.000Z",
    "arrivalTime": "2025-05-26T16:00:00.000Z",
    "availableSeats": 18,
    "totalSeats": 35,
    "status": "AVAILABLE",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 6,
    "routeId": 2,
    "busId": 1,
    "departureTime": "2025-05-27T08:00:00.000Z",
    "arrivalTime": "2025-05-27T16:00:00.000Z",
    "availableSeats": 8,
    "totalSeats": 40,
    "status": "AVAILABLE",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 7,
    "routeId": 3,
    "busId": 2,
    "departureTime": "2025-05-28T08:00:00.000Z",
    "arrivalTime": "2025-05-28T16:00:00.000Z",
    "availableSeats": 0,
    "totalSeats": 30,
    "status": "FULL",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 8,
    "routeId": 1,
    "busId": 3,
    "departureTime": "2025-05-29T08:00:00.000Z",
    "arrivalTime": "2025-05-29T16:00:00.000Z",
    "availableSeats": 4,
    "totalSeats": 20,
    "status": "CANCELLED",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 9,
    "routeId": 4,
    "busId": 4,
    "departureTime": "2025-05-30T08:00:00.000Z",
    "arrivalTime": "2025-05-30T16:00:00.000Z",
    "availableSeats": 30,
    "totalSeats": 42,
    "status": "AVAILABLE",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 10,
    "routeId": 5,
    "busId": 5,
    "departureTime": "2025-05-31T08:00:00.000Z",
    "arrivalTime": "2025-05-31T16:00:00.000Z",
    "availableSeats": 0,
    "totalSeats": 35,
    "status": "FULL",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 11,
    "routeId": 1,
    "busId": 1,
    "departureTime": "2025-06-01T08:00:00.000Z",
    "arrivalTime": "2025-06-01T16:00:00.000Z",
    "availableSeats": 35,
    "totalSeats": 40,
    "status": "AVAILABLE",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 12,
    "routeId": 2,
    "busId": 2,
    "departureTime": "2025-06-02T08:00:00.000Z",
    "arrivalTime": "2025-06-02T16:00:00.000Z",
    "availableSeats": 12,
    "totalSeats": 30,
    "status": "AVAILABLE",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 13,
    "routeId": 3,
    "busId": 3,
    "departureTime": "2025-06-03T08:00:00.000Z",
    "arrivalTime": "2025-06-03T16:00:00.000Z",
    "availableSeats": 3,
    "totalSeats": 20,
    "status": "FULL",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 14,
    "routeId": 4,
    "busId": 4,
    "departureTime": "2025-06-04T08:00:00.000Z",
    "arrivalTime": "2025-06-04T16:00:00.000Z",
    "availableSeats": 20,
    "totalSeats": 42,
    "status": "AVAILABLE",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  },
  {
    "id": 15,
    "routeId": 5,
    "busId": 5,
    "departureTime": "2025-06-05T08:00:00.000Z",
    "arrivalTime": "2025-06-05T16:00:00.000Z",
    "availableSeats": 5,
    "totalSeats": 35,
    "status": "CANCELLED",
    "createdAt": "2025-05-22T00:00:00.000Z",
    "updatedAt": "2025-05-22T00:00:00.000Z"
  }
]
let routes = [
  {
    id: 1,
    departureStationId: 1,
    arrivalStationId: 4,
    price: 500000,
    duration: "30h",
    distance: 1700,
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  },
  {
    id: 2,
    departureStationId: 2,
    arrivalStationId: 3,
    price: 350000,
    duration: "18h",
    distance: 960,
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  },
  {
    id: 3,
    departureStationId: 3,
    arrivalStationId: 4,
    price: 300000,
    duration: "16h",
    distance: 780,
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  },
  {
    id: 4,
    departureStationId: 1,
    arrivalStationId: 5,
    price: 250000,
    duration: "6h",
    distance: 300,
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  },
  {
    id: 5,
    departureStationId: 5,
    arrivalStationId: 2,
    price: 200000,
    duration: "5h",
    distance: 220,
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  }
];
let buses = [
  {
    id: 1,
    name: "Xe giường nằm A",
    description: "Xe giường nằm 42 chỗ đời mới",
    licensePlate: "51A-12345",
    capacity: 42,
    companyId: 1,
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  },
  {
    id: 2,
    name: "Xe ghế ngồi B",
    description: "Xe ghế ngồi 30 chỗ",
    licensePlate: "51B-67890",
    capacity: 30,
    companyId: 1,
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  },
  {
    id: 3,
    name: "Xe limousine C",
    description: "Limousine 20 chỗ cao cấp",
    licensePlate: "51C-54321",
    capacity: 20,
    companyId: 2,
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  },
  {
    id: 4,
    name: "Xe giường nằm D",
    description: "Xe giường nằm 40 chỗ",
    licensePlate: "51D-98765",
    capacity: 40,
    companyId: 2,
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  },
  {
    id: 5,
    name: "Xe mini E",
    description: "Xe mini 15 chỗ",
    licensePlate: "51E-11111",
    capacity: 15,
    companyId: 3,
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  }
];
let stations = [
  {
    id: 1,
    name: "Bến xe Miền Đông",
    image: "mien_dong.jpg",
    wallpaper: "mien_dong_wallpaper.jpg",
    descriptions: "Bến xe lớn nhất TP.HCM, phục vụ các tuyến đi miền Trung và Bắc.",
    location: "TP.Hồ Chí Minh",
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  },
  {
    id: 2,
    name: "Bến xe Miền Tây",
    image: "mien_tay.jpg",
    wallpaper: "mien_tay_wallpaper.jpg",
    descriptions: "Chuyên phục vụ các tuyến xe đi miền Tây Nam Bộ.",
    location: "TP.Hồ Chí Minh",
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  },
  {
    id: 3,
    name: "Bến xe Trung tâm Đà Nẵng",
    image: "da_nang.jpg",
    wallpaper: "da_nang_wallpaper.jpg",
    descriptions: "Bến xe chính của thành phố Đà Nẵng, kết nối miền Trung với cả nước.",
    location: "Đà Nẵng",
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  },
  {
    id: 4,
    name: "Bến xe Mỹ Đình",
    image: "my_dinh.jpg",
    wallpaper: "my_dinh_wallpaper.jpg",
    descriptions: "Một trong những bến xe lớn nhất miền Bắc, phục vụ các tỉnh phía Bắc và miền Trung.",
    location: "Hà Nội",
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  },
  {
    id: 5,
    name: "Bến xe Cần Thơ",
    image: "can_tho.jpg",
    wallpaper: "can_tho_wallpaper.jpg",
    descriptions: "Bến xe hiện đại tại trung tâm miền Tây Nam Bộ.",
    location: "Cần Thơ",
    createdAt: "2025-05-22T00:00:00.000Z",
    updatedAt: "2025-05-22T00:00:00.000Z"
  }
];
//=================================Chức năng========================================
let right = document.getElementById("right");
let data = schedule; // Biến để lấy dữ liệu từ Schedule để thực hiện các chức năng
let timeStartSelect = document.getElementById("timeStart");

//Hàm lấy giá trị giờ phút
const getHoursAndMinutes = (datetimeString) => {
  const date = new Date(datetimeString);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}
const renderDashboard = () => {
  let html = '';

  data.forEach(item => {
    let currRoute = routes.find(route => route.id == item.routeId);
    let currBus = buses.find(bus => bus.id == item.busId);
    let departureStation = stations.find(station => station.id == currRoute.departureStationId);
    let arrivalStation = stations.find(station => station.id == currRoute.arrivalStationId);

    html += ` <div class="card">
                <div class="detailCard">
                    <img class="imgCard imgInfo" src="../assets/imgs/header/1725701779816.jpeg.png" alt="img">
                    <div class="info">
                        <h5 class="card-title mb-1">${currBus.name}<span class="badge bg-primary">4.5</span><span
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
                            <div class="itemGrid moreDetail font-size-14 italic">*Thuộc chuyến ${getHoursAndMinutes(item.departureTime)} 20-11-2024
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
                        <button class="btnChoose font-size-14"><i class="fa-solid fa-car"></i>
                            <span>Chọn
                                xe</span>
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
}

// Hàm xử lý chung
const processData = () => {
  data = schedule // Lấy lại dữ liệu để xử lý

  const timeStartValue = timeStartSelect.value;
  if (timeStartValue !== "Giờ đi") {
    data = data.filter(item => parseInt(timeStartValue.split(":")[0], 10) <= parseInt(getHoursAndMinutes(item.departureTime).split(":")[0], 10))
  }

  renderDashboard();
}
//Lọc giờ đi
timeStartSelect.addEventListener("change", () => {
  processData();
})

renderDashboard();
