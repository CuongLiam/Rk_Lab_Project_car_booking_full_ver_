let scheduleData = [
    {
        "id": 1,
        "routeId": 2,
        "busId": 4,
        "departureTime": "2025-05-22T07:00:00.000Z",
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
        "departureTime": "2025-05-23T07:00:00.000Z",
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
        "departureTime": "2025-05-24T07:00:00.000Z",
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
if (!localStorage.getItem("schedule")) {
    localStorage.setItem("schedule", JSON.stringify(scheduleData));
}
let routesData = [
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
]
if (!localStorage.getItem("routes")) {
    localStorage.setItem("routes", JSON.stringify(routesData));
}
let busesData = [
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
]
if (!localStorage.getItem("buses")) {
    localStorage.setItem("buses", JSON.stringify(busesData));
}
let stationsData = [
    {
        id: 1,
        name: "Bến xe Miền Đông",
        image: "../assets/imgs/ben_xe/dongmoi.png",
        wallpaper: "mien_dong_wallpaper.jpg",
        descriptions: "Bến xe lớn nhất TP.HCM, phục vụ các tuyến đi miền Trung và Bắc.",
        location: "TP.Hồ Chí Minh",
        createdAt: "2025-05-22T00:00:00.000Z",
        updatedAt: "2025-05-22T00:00:00.000Z"
    },
    {
        id: 2,
        name: "Bến xe Miền Tây",
        image: "../assets/imgs/ben_xe/mientay.png",
        wallpaper: "mien_tay_wallpaper.jpg",
        descriptions: "Chuyên phục vụ các tuyến xe đi miền Tây Nam Bộ.",
        location: "TP.Hồ Chí Minh",
        createdAt: "2025-05-22T00:00:00.000Z",
        updatedAt: "2025-05-22T00:00:00.000Z"
    },
    {
        id: 3,
        name: "Bến xe Trung tâm Đà Nẵng",
        image: "../assets/imgs/ben_xe/ben-giap-bat-1.jpg.png",
        wallpaper: "da_nang_wallpaper.jpg",
        descriptions: "Bến xe chính của thành phố Đà Nẵng, kết nối miền Trung với cả nước.",
        location: "Đà Nẵng",
        createdAt: "2025-05-22T00:00:00.000Z",
        updatedAt: "2025-05-22T00:00:00.000Z"
    },
    {
        id: 4,
        name: "Bến xe Mỹ Đình",
        image: "../assets/imgs/ben_xe/my_dinh_2.jpg.png",
        wallpaper: "my_dinh_wallpaper.jpg",
        descriptions: "Một trong những bến xe lớn nhất miền Bắc, phục vụ các tỉnh phía Bắc và miền Trung.",
        location: "Hà Nội",
        createdAt: "2025-05-22T00:00:00.000Z",
        updatedAt: "2025-05-22T00:00:00.000Z"
    },
    {
        id: 5,
        name: "Bến xe Cần Thơ",
        image: "../assets/imgs/ben_xe/dongmoi.png",
        wallpaper: "can_tho_wallpaper.jpg",
        descriptions: "Bến xe hiện đại tại trung tâm miền Tây Nam Bộ.",
        location: "Cần Thơ",
        createdAt: "2025-05-22T00:00:00.000Z",
        updatedAt: "2025-05-22T00:00:00.000Z"
    },

]
if (!localStorage.getItem("stations")) {
    localStorage.setItem("stations", JSON.stringify(stationsData));
}
let busCompaniesData = [
    {
        id: 1,
        companyName: "Thanh Nhung",
        image: "../assets/imgs/nha_xe/nha-xe-thanh-nhung-bac-giang-lao-cai-414x297.jpg.png",
        descriptions: "Trụ sở: Cà Mau",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 2,
        companyName: "An Hòa",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Kon Tum",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 3,
        companyName: "Mai Linh",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: TP. HCM",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 4,
        companyName: "Phương Trang",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: TP. HCM",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 5,
        companyName: "Thành Bưởi",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Đà Lạt",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 6,
        companyName: "Hoàng Long",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Hải Phòng",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 7,
        companyName: "Sao Việt",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Hà Nội",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 8,
        companyName: "Hạnh Cafe",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: TP. HCM",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 9,
        companyName: "Liên Hưng",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Nha Trang",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 10,
        companyName: "Cúc Tùng",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Bình Định",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 11,
        companyName: "Phúc Xuyên",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Quảng Ninh",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 12,
        companyName: "Minh Quốc",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Gia Lai",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 13,
        companyName: "Bình An",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Cần Thơ",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 14,
        companyName: "Hưng Long",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Vũng Tàu",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 15,
        companyName: "Trọng Minh",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: An Giang",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 16,
        companyName: "Ngọc Ánh",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Bắc Giang",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 17,
        companyName: "Kim Chi",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Hà Tĩnh",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 18,
        companyName: "Việt Tân Phát",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Đồng Nai",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 19,
        companyName: "Hải Âu",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Nam Định",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    },
    {
        id: 20,
        companyName: "Thuận Thảo",
        image: "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg",
        descriptions: "Trụ sở: Phú Yên",
        createdAt: "2025-05-23T08:00:00.000Z",
        updatedAt: "2025-05-23T08:00:00.000Z"
    }
]
if (!localStorage.getItem("busCompanies")) {
    localStorage.setItem("busCompanies", JSON.stringify(busCompaniesData));
}
let ticketsData = [
    {
        id: 1,
        scheduleId: 1,
        seatId: 1,
        departureTime: "2025-05-23T08:00:00.000Z",
        arrivalTime: "2025-05-23T12:00:00.000Z",
        seatType: "VIP",
        price: 500000,
        status: "BOOKED",
        phoneUser: "0705134862",
        createdAt: "2025-05-23T09:00:00.000Z",
        updatedAt: "2025-05-23T09:00:00.000Z"
    },
    {
        id: 2,
        scheduleId: 2,
        seatId: 2,
        departureTime: "2025-05-24T10:30:00.000Z",
        arrivalTime: "2025-05-24T13:30:00.000Z",
        seatType: "STANDARD",
        price: 200000,
        status: "CANCELLED",
        phoneUser: "0883641952",
        createdAt: "2025-05-23T10:00:00.000Z",
        updatedAt: "2025-05-23T10:00:00.000Z"
    },
    {
        id: 3,
        scheduleId: 3,
        seatId: 3,
        departureTime: "2025-05-25T14:00:00.000Z",
        arrivalTime: "2025-05-25T18:00:00.000Z",
        seatType: "LUXURY",
        price: 600000,
        status: "BOOKED",
        phoneUser: "0857391284",
        createdAt: "2025-05-23T10:05:00.000Z",
        updatedAt: "2025-05-23T10:05:00.000Z"
    },
    {
        id: 4,
        scheduleId: 4,
        seatId: 4,
        departureTime: "2025-05-26T07:00:00.000Z",
        arrivalTime: "2025-05-26T11:00:00.000Z",
        seatType: "STANDARD",
        price: 350000,
        status: "BOOKED",
        phoneUser: "0917456023",
        createdAt: "2025-05-23T10:10:00.000Z",
        updatedAt: "2025-05-23T10:10:00.000Z"
    },
    {
        id: 5,
        scheduleId: 5,
        seatId: 5,
        departureTime: "2025-05-27T15:30:00.000Z",
        arrivalTime: "2025-05-27T19:30:00.000Z",
        seatType: "VIP",
        price: 450000,
        status: "CANCELLED",
        phoneUser: "0962381475",
        createdAt: "2025-05-23T10:15:00.000Z",
        updatedAt: "2025-05-23T10:15:00.000Z"
    },
    {
        id: 6,
        scheduleId: 6,
        seatId: 6,
        departureTime: "2025-05-28T06:00:00.000Z",
        arrivalTime: "2025-05-28T10:00:00.000Z",
        seatType: "STANDARD",
        price: 300000,
        status: "BOOKED",
        phoneUser: "0378492651",
        createdAt: "2025-05-23T10:20:00.000Z",
        updatedAt: "2025-05-23T10:20:00.000Z"
    },
    {
        id: 7,
        scheduleId: 7,
        seatId: 7,
        departureTime: "2025-05-29T13:15:00.000Z",
        arrivalTime: "2025-05-29T17:15:00.000Z",
        seatType: "LUXURY",
        price: 700000,
        status: "BOOKED",
        phoneUser: "0378492651",
        createdAt: "2025-05-23T10:25:00.000Z",
        updatedAt: "2025-05-23T10:25:00.000Z"
    },
    {
        id: 8,
        scheduleId: 8,
        seatId: 8,
        departureTime: "2025-05-30T09:00:00.000Z",
        arrivalTime: "2025-05-30T13:00:00.000Z",
        seatType: "VIP",
        price: 480000,
        status: "BOOKED",
        phoneUser: "0378492651",
        createdAt: "2025-05-23T10:30:00.000Z",
        updatedAt: "2025-05-23T10:30:00.000Z"
    },
    {
        id: 9,
        scheduleId: 9,
        seatId: 9,
        departureTime: "2025-05-31T16:00:00.000Z",
        arrivalTime: "2025-05-31T20:00:00.000Z",
        seatType: "STANDARD",
        price: 280000,
        status: "CANCELLED",
        phoneUser: "0378492651",
        createdAt: "2025-05-23T10:35:00.000Z",
        updatedAt: "2025-05-23T10:35:00.000Z"
    },
    {
        id: 10,
        scheduleId: 10,
        seatId: 10,
        departureTime: "2025-06-01T12:00:00.000Z",
        arrivalTime: "2025-06-01T16:00:00.000Z",
        seatType: "LUXURY",
        price: 650000,
        status: "BOOKED",
        phoneUser: "0378492651",
        createdAt: "2025-05-23T10:40:00.000Z",
        updatedAt: "2025-05-23T10:40:00.000Z"
    }
]
if (!localStorage.getItem("tickets")) {
    localStorage.setItem("tickets", JSON.stringify(ticketsData));
}
let seatsData = [
    {
        "id": 1,
        "busId": 1,
        "seatNumber": "A1",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 2,
        "busId": 1,
        "seatNumber": "A2",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 3,
        "busId": 1,
        "seatNumber": "A3",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 4,
        "busId": 1,
        "seatNumber": "A4",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 5,
        "busId": 1,
        "seatNumber": "A5",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 6,
        "busId": 1,
        "seatNumber": "A6",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 7,
        "busId": 1,
        "seatNumber": "A7",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 8,
        "busId": 1,
        "seatNumber": "A8",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 9,
        "busId": 1,
        "seatNumber": "A9",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 10,
        "busId": 1,
        "seatNumber": "A10",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 11,
        "busId": 2,
        "seatNumber": "A1",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 12,
        "busId": 2,
        "seatNumber": "A2",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 13,
        "busId": 2,
        "seatNumber": "A3",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 14,
        "busId": 2,
        "seatNumber": "A4",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 15,
        "busId": 2,
        "seatNumber": "A5",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 16,
        "busId": 2,
        "seatNumber": "A6",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 17,
        "busId": 2,
        "seatNumber": "A7",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 18,
        "busId": 2,
        "seatNumber": "A8",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 19,
        "busId": 2,
        "seatNumber": "A9",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 20,
        "busId": 2,
        "seatNumber": "A10",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 21,
        "busId": 3,
        "seatNumber": "A1",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 22,
        "busId": 3,
        "seatNumber": "A2",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 23,
        "busId": 3,
        "seatNumber": "A3",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 24,
        "busId": 3,
        "seatNumber": "A4",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 25,
        "busId": 3,
        "seatNumber": "A5",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 26,
        "busId": 3,
        "seatNumber": "A6",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 27,
        "busId": 3,
        "seatNumber": "A7",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 28,
        "busId": 3,
        "seatNumber": "A8",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 29,
        "busId": 3,
        "seatNumber": "A9",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 30,
        "busId": 3,
        "seatNumber": "A10",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 31,
        "busId": 4,
        "seatNumber": "A1",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 32,
        "busId": 4,
        "seatNumber": "A2",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 33,
        "busId": 4,
        "seatNumber": "A3",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 34,
        "busId": 4,
        "seatNumber": "A4",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 35,
        "busId": 4,
        "seatNumber": "A5",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 36,
        "busId": 4,
        "seatNumber": "A6",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 37,
        "busId": 4,
        "seatNumber": "A7",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 38,
        "busId": 4,
        "seatNumber": "A8",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 39,
        "busId": 4,
        "seatNumber": "A9",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 40,
        "busId": 4,
        "seatNumber": "A10",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 41,
        "busId": 5,
        "seatNumber": "A1",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 42,
        "busId": 5,
        "seatNumber": "A2",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 43,
        "busId": 5,
        "seatNumber": "A3",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 44,
        "busId": 5,
        "seatNumber": "A4",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 45,
        "busId": 5,
        "seatNumber": "A5",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 46,
        "busId": 5,
        "seatNumber": "A6",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 47,
        "busId": 5,
        "seatNumber": "A7",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 48,
        "busId": 5,
        "seatNumber": "A8",
        "seatType": "LUXURY",
        "status": "AVAILABLE",
        "priceForTypeSeat": 100000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 49,
        "busId": 5,
        "seatNumber": "A9",
        "seatType": "STANDARD",
        "status": "BOOKED",
        "priceForTypeSeat": 0,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
    {
        "id": 50,
        "busId": 5,
        "seatNumber": "A10",
        "seatType": "VIP",
        "status": "BOOKED",
        "priceForTypeSeat": 50000,
        "createdAt": "2025-05-23T12:00:00.000Z",
        "updatedAt": "2025-05-23T12:00:00.000Z"
    },
]
if (!localStorage.getItem("seats")) {
    localStorage.setItem("seats", JSON.stringify(seatsData));
}
let usersData = [
    {
        id: 1,
        email: "alice@example.com",
        phone: "0378492651",
        password: "hashed_password_1",
        role: "USER"
    },
    {
        id: 2,
        email: "bob@example.com",
        phone: "0962381475",
        password: "hashed_password_2",
        role: "USER"
    },
    {
        id: 3,
        email: "charlie@example.com",
        phone: "0917456023",
        password: "hashed_password_3",
        role: "USER"
    },
    {
        id: 4,
        email: "david@example.com",
        phone: "0857391284",
        password: "hashed_password_4",
        role: "USER"
    },
    {
        id: 5,
        email: "eva@example.com",
        phone: "0883641952",
        password: "hashed_password_5",
        role: "USER"
    },
    {
        id: 6,
        email: "trantai180506@gmail.com",
        phone: "0705134862",
        password: "Trantai180506@#",
        role: "ADMIN"
    }
];
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(usersData));
}

let articlesData = [
    {
        id: 1,
        banner: "../assets/imgs/bai_viet/BX-GIA-LAM-6-2.jpg.png",
        subTitle: "BẾN XE",
        title: "Bến xe Gia Lâm – thông tin địa điểm, giá vé 16 hãng xe đi từ bến",
        phone: "02438 271 529",
        address: "Số 9 Đ. Ngô Gia Khảm, Q. Long Biên, Hà Nội",
        content: [
            "Bến xe Gia Lâm thuộc quận Long Biên, nằm về phía đông bắc và cách trung tâm thành phố hà Nội khoảng 1km, đây cũng là bến lâu đời cùng trải qua năm tháng với thành phố. Tuy khuôn viên chỉ 1,45ha so với các bến khác thì không quá rộng nhưng nơi đây vẫn tập trung rất nhiều các hãng xe khách uy tín và chất lượng. Mỗi ngày đều có hàng trăm lượt xe ra vào để vận chuyển khách đi các tỉnh, chủ yếu là di chuyển về các tỉnh phía Bắc.",
            "<img class='imgContent mb-24px' src='../assets/imgs/bai_viet/BX-GIA-LAM-6-2.jpg.png' alt='picture'>",
            "Hệ thống giao thông xung quanh có đầy đủ cả đường bộ, đường sắt và đường thủy, trong đó đường bộ có tuyến quốc lộ 1A, quốc lộ 5 và cao tốc đi Hải Phòng, Lạng Sơn cũng khá tiện cho các phương tiện di chuyển theo hướng quốc lộ đến các tỉnh thành lân cận. Trong bến xe Gia Lâm có nhiều dịch vụ hạ tầng như sảnh chờ rộng, sang trọng với các quầy bán vé khang trang có bảng chỉ dẫn màu sắc nổi bật dễ nhận biết.",
            "Khu vực các hàng quán phục vụ ăn uống, giải khát, được sắp xếp riêng biệt tiện lợi và bảo đảm vệ sinh sạch sẽ. Bên cạnh đó là các lối ra nơi đỗ xe dành cho hành khách được trang bị mái che và phân luồng khoa học tránh được tình trạng lộn xộn. Ngoài ra, với sự kiểm soát và công tác chặt chẽ của đội ngũ quản lý và an ninh mà dù lượt xe di chuyển tại bến vô cùng đông đúc nhưng vẫn không có việc mất trật tự xảy ra.",
            "<img class='imgContent mb-48px' src='../assets/imgs/bai_viet/BX-GIA-LAM-1-2.jpg.png' alt='picture'>"
        ]
    },
    {
        id: 2,
        banner: "../assets/imgs/bai_viet/Frame 53.png",
        subTitle: "BẾN XE",
        title: "Bến xe Mỹ Đình – thông tin địa điểm, giá vé các hãng xe nổi bật",
        phone: "02437 645 568",
        address: "Số 20 Phạm Hùng, Q. Nam Từ Liêm, Hà Nội",
        content: [
            "Bến xe Mỹ Đình là một trong những bến xe lớn nhất Hà Nội, phục vụ các tuyến xe đi các tỉnh phía Bắc và miền Trung.",
            "<img class='imgContent mb-24px' src='../assets/imgs/bai_viet/Frame 53.png' alt='picture'>",
            "Bến có cơ sở vật chất hiện đại, nhiều dịch vụ tiện ích cho hành khách và các hãng xe khách chất lượng cao.",
            "Các tuyến chính: Hà Nội – Hải Phòng, Hà Nội – Lào Cai, Hà Nội – Sơn La, Hà Nội – Nghệ An, v.v.",
            "<img class='imgContent mb-48px' src='../assets/imgs/bai_viet/BX-GIA-LAM-1-2.jpg.png' alt='picture'>"
        ]
    },
    {
        id: 3,
        banner: "../assets/imgs/bai_viet/oho-1.jpg.png",
        subTitle: "BẾN XE",
        title: "Bến xe Nước Ngầm – thông tin địa điểm, giá vé các tuyến miền Trung",
        phone: "02436 641 852",
        address: "Số 1 Ngọc Hồi, Q. Hoàng Mai, Hà Nội",
        content: [
            "Bến xe Nước Ngầm phục vụ chủ yếu các tuyến xe đi miền Trung và miền Nam.",
            "<img class='imgContent mb-24px' src='../assets/imgs/bai_viet/oho-1.jpg.png' alt='picture'>",
            "Bến có khu vực chờ rộng rãi, nhiều dịch vụ tiện ích và các hãng xe uy tín.",
            "Các tuyến chính: Hà Nội – Thanh Hóa, Hà Nội – Nghệ An, Hà Nội – Hà Tĩnh, v.v.",
            "<img class='imgContent mb-48px' src='../assets/imgs/bai_viet/Frame 53.png' alt='picture'>"
        ]
    },
    {
        id: 4,
        banner: "../assets/imgs/bai_viet/BX-GIA-LAM-6-2.jpg.png",
        subTitle: "BẾN XE",
        title: "Bến xe Giáp Bát – thông tin địa điểm, giá vé các tuyến phía Nam",
        phone: "02438 664 225",
        address: "Số 6 Giải Phóng, Q. Hoàng Mai, Hà Nội",
        content: [
            "Bến xe Giáp Bát là bến xe lâu đời, phục vụ các tuyến xe đi các tỉnh phía Nam.",
            "<img class='imgContent mb-24px' src='../assets/imgs/bai_viet/BX-GIA-LAM-6-2.jpg.png' alt='picture'>",
            "Bến có nhiều hãng xe khách chất lượng, dịch vụ tiện ích đầy đủ.",
            "Các tuyến chính: Hà Nội – Nam Định, Hà Nội – Ninh Bình, Hà Nội – Thanh Hóa, v.v.",
            "<img class='imgContent mb-48px' src='../assets/imgs/bai_viet/oho-1.jpg.png' alt='picture'>"
        ]
    },
    {
        id: 5,
        banner: "../assets/imgs/bai_viet/Frame 53.png",
        subTitle: "BẾN XE",
        title: "Bến xe Yên Nghĩa – thông tin địa điểm, giá vé các tuyến phía Tây",
        phone: "02433 852 963",
        address: "QL6, Q. Hà Đông, Hà Nội",
        content: [
            "Bến xe Yên Nghĩa phục vụ các tuyến xe đi các tỉnh phía Tây Bắc.",
            "<img class='imgContent mb-24px' src='../assets/imgs/bai_viet/Frame 53.png' alt='picture'>",
            "Bến có khu vực chờ hiện đại, nhiều hãng xe chất lượng.",
            "Các tuyến chính: Hà Nội – Hòa Bình, Hà Nội – Sơn La, Hà Nội – Điện Biên, v.v.",
            "<img class='imgContent mb-48px' src='../assets/imgs/bai_viet/BX-GIA-LAM-1-2.jpg.png' alt='picture'>"
        ]
    }
]
if (!localStorage.getItem("articles")) {
    localStorage.setItem("articles", JSON.stringify(articlesData))
}
