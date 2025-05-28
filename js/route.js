let routes = [
        {
            id: 1,
            departureStationId: 1,
            arrivalStationId: 4,
            img: "../assets/imgs/tuyen_duong/nha-xe-minh-ha-tuyen-ben-xe-nga-tu-ga-di-bac-giang-414x283.jpg.png",
            title: "Đặt vé xe tuyến Bến xe Ngã Tư Ga đi Bắc Giang",
            desc: "Đặt vé xe tuyến Bến xe Ngã Tư Ga đi Bắc Giang",
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
            img: "../assets/imgs/tuyen_duong/nha-xe-tu-tien-tuyen-sai-gon-di-kien-rach-gia-kien-giang-414x283.jpg.png",
            title: "Đặt vé xe tuyến Sài Gòn đi Rạch Giá – Kiên Giang",
            desc: "Bạn đang tìm kiếm phương tiện di chuyển thuận tiện và nhanh chóng giữa Sài Gòn và Kiên Giang",
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
            img: "../assets/imgs/tuyen_duong/NX-TRA-LAN-VIEN-e1712287293178.jpg.png",
            title: "Tuyến Sài Gòn đi Cam Ranh Khánh Hòa",
            desc: "Top 10 nhà xe tuyến Sài Gòn đi Cam Ranh Khánh Hòa được đánh giá...",
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
            img: "../assets/imgs/tuyen_duong/nha-xe-phuc-an-express-binh-thuan-cam-ranh.webp-414x297.png.png",
            title: "Đặt vé xe Bình Thuận đi Cam Ranh – Khánh Hòa",
            desc: "Bạn đang tìm kiếm chuyến xe chất lượng trên tuyến đường Bình Thuận...",
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
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 5,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-minh-anh-ben-xe-phia-nam-buon-ma-thuot-di-sai-gon-1-414x283.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 5,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/NX-PHUC-XUYEN-e1704868882137-414x297.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 5,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-minh-ha-tuyen-ben-xe-nga-tu-ga-di-bac-giang-414x283.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 9,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 10,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 11,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 12,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 13,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 14,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 15,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 16,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 17,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 18,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 19,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 20,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 21,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 22,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        },
        {
            id: 23,
            departureStationId: 5,
            arrivalStationId: 2,
            img: "../assets/imgs/tuyen_duong/nha-xe-tuan-hiep-ben-xe-duc-long-gia-lai-sai-gon.jpg-414x298.jpg.png",
            title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
            desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư...",
            price: 200000,
            duration: "5h",
            distance: 220,
            createdAt: "2025-05-22T00:00:00.000Z",
            updatedAt: "2025-05-22T00:00:00.000Z"
        }
    ]
const itemsPerPage = 8;
let currentPage = 1;

function renderRoutes(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentRoutes = routes.slice(start, end);

    const container = document.getElementById("route-container");
    container.innerHTML = "";

    currentRoutes.forEach(route => {
        container.innerHTML += `
            <div class="card-route">
                <img src="${route.img}" alt="${route.title}">
                <div class="textInCard">
                    <p>${route.title}</p>
                    <span>${route.desc}</span>
                </div>
            </div>
        `;
    });

    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(routes.length / itemsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    // Previous
    const prev = document.createElement("div");
    prev.className = "pageItem";
    prev.innerText = "<";
    prev.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderRoutes(currentPage);
        }
    };
    pagination.appendChild(prev);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const page = document.createElement("div");
        page.className = "pageItem";
        page.innerText = i;
        if (i === currentPage) page.style.backgroundColor = "#1295DB", page.style.color = "#FFFFFF";
        page.onclick = () => {
            currentPage = i;
            renderRoutes(currentPage);
        };
        pagination.appendChild(page);
    }

    // Next
    const next = document.createElement("div");
    next.className = "pageItem";
    next.innerText = ">";
    next.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderRoutes(currentPage);
        }
    };
    pagination.appendChild(next);
}

// Initial render
document.addEventListener("DOMContentLoaded", () => {
    renderRoutes(currentPage);
});
