// Banner class
class Banner {
    static lastId = 0;

    constructor(bannerUrl, position) {
        if (typeof bannerUrl !== 'string' || typeof position !== 'string') {
            console.log('[WARNING] Không thể tạo Banner: banner_url hoặc position không hợp lệ.');
            return;
        }

        Banner.lastId++;
        this.id = Banner.lastId;
        this.bannerUrl = bannerUrl;
        this.position = position;
    }
}

// Chạy sau khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    const bannerObjects = [
        new Banner('..//assets/imgs/uu_dai_noi_bat/banner-pc_1170x155-2.jpg.jpg', 'top'),
        new Banner('https://prod-nhapthuoc-cms.s3-sgn09.fptcloud.com/mob_giam_0_5_7c1e312434.jpg', 'top'),
    ];

    const banners = bannerObjects.map(b => b.bannerUrl);
    let currentIndex = 0;

    const bannerImage = document.getElementById('banner-image');
    const leftArrow = document.getElementById('arrow-left');
    const rightArrow = document.getElementById('arrow-right');

    function showBanner(index) {
        bannerImage.style.opacity = 0;
        setTimeout(() => {
            bannerImage.src = banners[index];
            bannerImage.style.opacity = 1;
        }, 100);
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + banners.length) % banners.length;
        showBanner(currentIndex);
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % banners.length;
        showBanner(currentIndex);
    });

    // Initial load
    showBanner(currentIndex);
    console.log(Banner.lastId);

});











document.addEventListener("DOMContentLoaded", function () {
  const data = [
    { img: "https://picsum.photos/300/150?random=1", name: "Sài Gòn – Mũi Né", price: "180.000đ" },
    { img: "https://picsum.photos/300/150?random=2", name: "Sài Gòn – Nha Trang", price: "240.000đ" },
    { img: "https://picsum.photos/300/150?random=3", name: "Nha Trang – Đà Lạt", price: "200.000đ" },
    { img: "https://picsum.photos/300/150?random=4", name: "Hà Nội – Hải Phòng", price: "150.000đ" },
    { img: "https://picsum.photos/300/150?random=5", name: "Đà Nẵng – Huế", price: "130.000đ" },
    { img: "https://picsum.photos/300/150?random=6", name: "Sài Gòn – Đà Lạt", price: "210.000đ" },
    { img: "https://picsum.photos/300/150?random=7", name: "Biên Hòa – Cần Thơ", price: "160.000đ" },
    { img: "https://picsum.photos/300/150?random=8", name: "Hà Nội – Quảng Ninh", price: "190.000đ" }
  ];

  const track = document.querySelector(".all-Bus-Card");
  const btnLeft = document.querySelector(".arrow-left-1");
  const btnRight = document.querySelector(".arrow-right-1");

  let currentIndex = 0;

  function getVisibleCount() {
    const width = window.innerWidth;
    if (width >= 1440) return 4;
    if (width >= 768) return 3;
    return 1;
  }

  function renderCards() {
    const visible = getVisibleCount();
    track.innerHTML = "";
    for (let i = currentIndex; i < currentIndex + visible && i < data.length; i++) {
      const card = document.createElement("div");
      card.className = "bus-card";
      card.innerHTML = `
        <img src="${data[i].img}" alt="Tuyến">
        <div class="textInCard">
          <p>${data[i].name}</p>
          <span>${data[i].price}</span>
        </div>
      `;
      track.appendChild(card);
    }
    // Ẩn/hiện nút khi ở đầu/cuối
    btnLeft.style.opacity = currentIndex === 0 ? 0.5 : 1;
    btnRight.style.opacity = (currentIndex + visible >= data.length) ? 0.5 : 1;
  }

  btnRight.addEventListener("click", () => {
    const visible = getVisibleCount();
    if (currentIndex + visible < data.length) {
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
    if (currentIndex + visible > data.length) {
      currentIndex = Math.max(0, data.length - visible);
    }
    renderCards();
  });

  renderCards();
});













document.addEventListener("DOMContentLoaded", function () {
  // ...slider Tuyến Đường Phổ Biến ở trên...

  // Slider Nhà Xe Phổ Biến
  const dataLac = [
    { img: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", name: "Nhà xe An Hòa Hiệp" },
    { img: "../assets/imgs/nha_xe/nha-xe-futa-ha-son.jpg.png", name: "Nhà xe Futa Hà Sơn" },
    { img: "../assets/imgs/nha_xe/nha-xe-vu-linh-limousine-chat-luong.png.png", name: "Nhà xe Vũ Linh" },
    { img: "../assets/imgs/nha_xe/nha-xe-toan-thang-vung-tau.jpg.png", name: "Nhà xe Toàn Thắng" },
      { img: "../assets/imgs/ben_xe/dongmoi.png", name: "Nhà xe An Hòa Hiệp" },
    { img: "../assets/imgs/ben_xe/mientay.png", name: "Bến xe Miền Tây" },
    { img: "../assets/imgs/ben_xe/ben-giap-bat-1.jpg.png", name: "Nhà xe An Hòa Hiệp" },
    { img: "../assets/imgs/ben_xe/my_dinh_2.jpg.png", name: "Nhà xe An Hòa Hiệp" }
  ];

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
    trackLac.innerHTML = "";
    for (let i = currentIndexLac; i < currentIndexLac + visible && i < dataLac.length; i++) {
      const card = document.createElement("div");
      card.className = "bus-card-lac";
      card.innerHTML = `
        <img src="${dataLac[i].img}" alt="${dataLac[i].name}">
        <p>${dataLac[i].name}</p>
      `;
      trackLac.appendChild(card);
    }
    btnLeftLac.style.opacity = currentIndexLac === 0 ? 0.5 : 1;
    btnRightLac.style.opacity = (currentIndexLac + visible >= dataLac.length) ? 0.5 : 1;
  }

  btnRightLac.addEventListener("click", () => {
    const visible = getVisibleCountLac();
    if (currentIndexLac + visible < dataLac.length) {
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
    if (currentIndexLac + visible > dataLac.length) {
      currentIndexLac = Math.max(0, dataLac.length - visible);
    }
    renderCardsLac();
  });

  renderCardsLac();
});
























document.addEventListener("DOMContentLoaded", function () {
  // Fake data cho Bến Xe Phổ Biến
  const dataBenXe = [
    { img: "../assets/imgs/ben_xe/dongmoi.png", name: "Nhà xe An Hòa Hiệp" },
    { img: "../assets/imgs/ben_xe/mientay.png", name: "Bến xe Miền Tây" },
    { img: "../assets/imgs/ben_xe/ben-giap-bat-1.jpg.png", name: "Nhà xe An Hòa Hiệp" },
    { img: "../assets/imgs/ben_xe/my_dinh_2.jpg.png", name: "Nhà xe An Hòa Hiệp" },
     { img: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", name: "Nhà xe An Hòa Hiệp" },
    { img: "../assets/imgs/nha_xe/nha-xe-futa-ha-son.jpg.png", name: "Nhà xe Futa Hà Sơn" },
    { img: "../assets/imgs/nha_xe/nha-xe-vu-linh-limousine-chat-luong.png.png", name: "Nhà xe Vũ Linh" },
    { img: "../assets/imgs/nha_xe/nha-xe-toan-thang-vung-tau.jpg.png", name: "Nhà xe Toàn Thắng" },
  ];

  const trackBenXe = document.getElementById("all-Bus-Card-benxe");
  const btnLeftBenXe = document.getElementById("arrow-left-benxe");
  const btnRightBenXe = document.getElementById("arrow-right-benxe");

  let currentIndexBenXe = 0;

  function getVisibleCountBenXe() {
    const width = window.innerWidth;
    if (width >= 1440) return 4;
    if (width >= 768) return 3;
    return 1;
  }

  function renderCardsBenXe() {
    const visible = getVisibleCountBenXe();
    trackBenXe.innerHTML = "";
    for (let i = currentIndexBenXe; i < currentIndexBenXe + visible && i < dataBenXe.length; i++) {
      const card = document.createElement("div");
      card.className = "bus-card-lac";
      card.innerHTML = `
        <img src="${dataBenXe[i].img}" alt="${dataBenXe[i].name}">
        <p>${dataBenXe[i].name}</p>
      `;
      trackBenXe.appendChild(card);
    }
    btnLeftBenXe.style.opacity = currentIndexBenXe === 0 ? 0.5 : 1;
    btnRightBenXe.style.opacity = (currentIndexBenXe + visible >= dataBenXe.length) ? 0.5 : 1;
  }

  btnRightBenXe.addEventListener("click", () => {
    const visible = getVisibleCountBenXe();
    if (currentIndexBenXe + visible < dataBenXe.length) {
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
    if (currentIndexBenXe + visible > dataBenXe.length) {
      currentIndexBenXe = Math.max(0, dataBenXe.length - visible);
    }
    renderCardsBenXe();
  });

  renderCardsBenXe();
});