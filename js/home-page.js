


// lấy dũ liệu từ file fake-data.js
import { fakeData } from "./fake-data.js";
const dataStation = fakeData.stations;
const dataRoute = fakeData.routes;
const dataCompanies = fakeData.busCompanies;


let imageRoute = [
  "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
  "../assets/imgs/tuyen_duong/nha-xe-minh-anh-ben-xe-phia-nam-buon-ma-thuot-di-sai-gon-1-414x283.jpg.png",
  "../assets/imgs/tuyen_duong/nha-xe-minh-ha-tuyen-ben-xe-nga-tu-ga-di-bac-giang-414x283.jpg.png",
  "../assets/imgs/tuyen_duong/nha-xe-phuc-an-express-binh-thuan-cam-ranh.webp-414x297.png.png",
  "../assets/imgs/tuyen_duong/nha-xe-tu-tien-tuyen-sai-gon-di-kien-rach-gia-kien-giang-414x283.jpg.png",
  "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
  "../assets/imgs/tuyen_duong/nha-xe-viet-thanh-tuyen-sai-gon-di-bac-lieu-414x283.jpg.png",
];

const banners = [
  "../assets/imgs/uu_dai_noi_bat/banner-pc_1170x155-2.jpg.jpg",
  "https://prod-nhapthuoc-cms.s3-sgn09.fptcloud.com/mob_giam_0_5_7c1e312434.jpg"
];


// render and animation  for banner
document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;

  const bannerImage = document.getElementById('banner-image');
  const leftArrow = document.getElementById('arrow-left');
  const rightArrow = document.getElementById('arrow-right');

  function showBanner(index) {                    // index là currentIndex hiện tại
    bannerImage.style.opacity = 0;
    setTimeout(() => {
      bannerImage.src = banners[index];
      bannerImage.style.opacity = 1;
    }, 50);
  }

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + banners.length) % banners.length;
    showBanner(currentIndex);
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % banners.length;
    showBanner(currentIndex);
  });

  showBanner(currentIndex);
});


// render and animation for Routes
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".all-Bus-Card");
  const btnLeft = document.querySelector(".arrow-left-1");
  const btnRight = document.querySelector(".arrow-right-1");

  let currentIndex = 0;

  function getVisibleCount() {                                              // ham này sẽ trả về số lượng card hiển thị dựa trên kích thước
    const width = window.innerWidth;
    if (width >= 1440) return 4;
    if (width >= 768) return 3;
    return 1;
  }

  function renderCards() {
    const visible = getVisibleCount();
    let cardsHTML = "";

    dataRoute.forEach((item, index) => {
      if (index >= currentIndex && index < currentIndex + visible) {      // nếu index nằm trong khoảng từ currentIndex đến currentIndex + visible thì sẽ render card  
        cardsHTML += `
  <div class="bus-card">
    <img src="${imageRoute[index]}" alt="Tuyến ${item.id}">
    <div class="textInCard">
      <p>
        ${dataStation.find(st => st.id === item.departureStationId)?.location || "?"} 
        -
        ${dataStation.find(st => st.id === item.arrivalStationId)?.location || "?"}
      </p>
      <span>Giá: ${item.price.toLocaleString('vi-VN')} VNĐ</span>
    </div>
  </div>
`;
      }
    });

    track.innerHTML = cardsHTML;

    btnLeft.style.opacity = currentIndex === 0 ? 0.5 : 1;
    btnRight.style.opacity = (currentIndex + visible >= dataRoute.length) ? 0.5 : 1;
    console.log(`Current Index: ${currentIndex}, Visible: ${visible}, Total: ${dataRoute.length}`);

  }


  btnRight.addEventListener("click", () => {
    const visible = getVisibleCount();
    if (currentIndex + visible < dataRoute.length) {
      currentIndex++;
      renderCards();
    }
  });

  btnLeft.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderCards();
    }
  });

  window.addEventListener("resize", () => {
    // Nếu resize làm currentIndex vượt max, reset lại
    const visible = getVisibleCount();
    if (currentIndex + visible > dataRoute.length) {
      currentIndex = Math.max(0, dataRoute.length - visible);                  // thay đổi index nếu người dùng reponsive hoặc thay đổi kích thước màn
    }
    renderCards();
  });

  renderCards();
});

// render and animation for BuseCompany
document.addEventListener("DOMContentLoaded", function () {
  const trackLac = document.querySelector(".all-Bus-Card-lac");
  const btnLeftLac = document.querySelector(".arrow-left-3");
  const btnRightLac = document.querySelector(".arrow-right-3");

  let currentIndexLac = 0;

  function getVisibleCountLac() {
    const width = window.innerWidth;
    if (width >= 1440) return 4;
    if (width >= 768) return 3;
    return 1;
  }

  function renderCardsLac() {
    const visible = getVisibleCountLac();
    let cardsHTML = "";

    dataCompanies.forEach((item, index) => {
      if (index >= currentIndexLac && index < currentIndexLac + visible) {
        cardsHTML += `
          <div class="bus-card-lac">
            <img src="${item.image}" alt="${item.name}">
            <p>${item.companyName}</p>
          </div>
        `;
      }
    });

    trackLac.innerHTML = cardsHTML;

    btnLeftLac.style.opacity = currentIndexLac === 0 ? 0.5 : 1;
    btnRightLac.style.opacity = (currentIndexLac + visible >= dataCompanies.length) ? 0.5 : 1;
  }

  btnRightLac.addEventListener("click", () => {
    const visible = getVisibleCountLac();
    if (currentIndexLac + visible < dataCompanies.length) {
      currentIndexLac++;
      renderCardsLac();
    }
  });

  btnLeftLac.addEventListener("click", () => {
    if (currentIndexLac > 0) {
      currentIndexLac--;
      renderCardsLac();
    }
  });

  window.addEventListener("resize", () => {
    const visible = getVisibleCountLac();
    if (currentIndexLac + visible > dataCompanies.length) {
      currentIndexLac = Math.max(0, dataCompanies.length - visible);
    }
    renderCardsLac();
  });

  renderCardsLac();
});

// render and animation for Stations
document.addEventListener("DOMContentLoaded", function () {
  const trackBenXe = document.getElementById("station-cards-container");
  const btnLeftBenXe = document.getElementById("arrow-left-station");
  const btnRightBenXe = document.getElementById("arrow-right-station");

  let currentIndexBenXe = 0;

  function getVisibleCountBenXe() {
    const width = window.innerWidth;
    if (width >= 1440) return 4;
    if (width >= 768) return 3;
    return 1;
  }

  function renderCardsBenXe() {
    const visible = getVisibleCountBenXe();
    let cardsHTML = "";

    dataStation.forEach((item, index) => {
      if (index >= currentIndexBenXe && index < currentIndexBenXe + visible) {
        cardsHTML += `
          <div class="bus-card-lac">
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
          </div>
        `;
      }
    });

    trackBenXe.innerHTML = cardsHTML;

    btnLeftBenXe.style.opacity = currentIndexBenXe === 0 ? 0.5 : 1;
    btnRightBenXe.style.opacity = (currentIndexBenXe + visible >= dataStation.length) ? 0.5 : 1;
  }

  btnRightBenXe.addEventListener("click", () => {
    const visible = getVisibleCountBenXe();
    if (currentIndexBenXe + visible < dataStation.length) {
      currentIndexBenXe++;
      renderCardsBenXe();
    }
  });

  btnLeftBenXe.addEventListener("click", () => {
    if (currentIndexBenXe > 0) {
      currentIndexBenXe--;
      renderCardsBenXe();
    }
  });

  window.addEventListener("resize", () => {
    const visible = getVisibleCountBenXe();
    if (currentIndexBenXe + visible > dataStation.length) {
      currentIndexBenXe = Math.max(0, dataStation.length - visible);
    }
    renderCardsBenXe();
  });

  renderCardsBenXe();
});
