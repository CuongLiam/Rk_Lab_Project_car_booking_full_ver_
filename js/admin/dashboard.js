let schedulesArea = document.getElementById("schedulesArea")
let routesArea = document.getElementById("routesArea")
let stationsArea = document.getElementById("stationsArea")
let busCompaniesArea = document.getElementById("busCompaniesArea")
let ticketsArea = document.getElementById("ticketsArea")

let schedules = JSON.parse(localStorage.getItem("schedule")) || []
let routes = JSON.parse(localStorage.getItem("routes")) || []
let stations = JSON.parse(localStorage.getItem("stations")) || []
let busCompanies = JSON.parse(localStorage.getItem("busCompanies")) || []
let tickets = JSON.parse(localStorage.getItem("tickets")) || []
let buses = JSON.parse(localStorage.getItem("buses")) || []
let paginationSchedules = document.getElementById("paginationSchedules");
let paginationRoutes = document.getElementById("paginationRoutes");
let paginationStations = document.getElementById("paginationStations");
let paginationBusCompanies = document.getElementById("paginationBusCompanies");
let paginationTickets = document.getElementById("paginationTickets");
let currentPageSchedules = 1;
let currentPageRoutes = 1;
let currentPageStations = 1;
let currentPageBusCompanies = 1;
let currentPageTickets = 1;
const itemsPerPage = 5;
let data;

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

const renderSchedules = () => {
    const start = (currentPageSchedules - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    data = schedules;
    data = data.slice(start,end)
    let html = ""
    html = data.reduce((html, schedule) => {
        let currRoute = routes.find(route => route.id == schedule.routeId);
        let currBus = buses.find(bus => bus.id == schedule.busId);
        let departureStation = stations.find(station => station.id == currRoute.departureStationId);
        let arrivalStation = stations.find(station => station.id == currRoute.arrivalStationId);
        html += `<tr>
                    <th>${schedule.id}</td>
                    <td>${departureStation.location} - ${arrivalStation.location}</td>
                    <td>${currBus.name}</td>
                    <td>${formatDateYMD(schedule.departureTime)} ${getHoursAndMinutes(schedule.departureTime)}</td>
                    <td>${formatDateYMD(schedule.arrivalTime)} ${getHoursAndMinutes(schedule.arrivalTime)}</td>
                    <td>${schedule.availableSeats}</td>
                    <td>${schedule.totalSeats}</td>
                    <td>${schedule.status}</td>
                </tr>`
        return html
    }, "")
    schedulesArea.innerHTML = html;
    renderPaginationSchedules(schedules.length)
}
const renderRoutes = () => {
    const start = (currentPageRoutes - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    data = routes;
    data = data.slice(start,end)
    let html = ""
    html = data.reduce((html, route) => {
        let departureStation = stations.find(station => station.id == route.departureStationId);
        let arrivalStation = stations.find(station => station.id == route.arrivalStationId);
        html += `<tr>
        <th scope="row">${route.id}</th>
        <td>${departureStation.name}</td>
        <td>${arrivalStation.name}</td>
        <td>${route.price} VND</td>
        <td>${route.duration}</td>
        <td>${route.distance}km</td>
        </tr>`
        return html
    }, "")
    routesArea.innerHTML = html;
    renderPaginationRoutes(routes.length)
}
const renderStations = () => {
    const start = (currentPageStations - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    let html = ""
    data = stations;
    data = data.slice(start,end)
    html = data.reduce((html, station) => {
        html += `   <tr>
        <th scope="row">${station.id}</th>
        <td>${station.name}</td>
        <td>${station.descriptions}</td>
        <td>${station.location}</td>
        </tr>`
        return html
    }, "")
    stationsArea.innerHTML = html;
    renderPaginationStations(stations.length)
}
const renderBusCompanies = () => {
    const start = (currentPageBusCompanies - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    let html = ""
    data = busCompanies;
    data = data.slice(start,end)
    html = data.reduce((html, busCompany) => {
        html += `           <tr>
        <th scope="row">${busCompany.id}</th>
        <td>${busCompany.companyName}</td>
        <td>${busCompany.descriptions}</td>
        </tr>`
        return html
    }, "")
    busCompaniesArea.innerHTML = html;
    renderPaginationBusCompanies(busCompanies.length)
}
const renderTickets = () => {
    const start = (currentPageTickets - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    let html = ""
    data = tickets;
    data = data.slice(start,end)
    html = data.reduce((html, ticket) => {
        html += `<tr>
                    <th scope="row">${ticket.id}</th>
                    <td>${ticket.scheduleId}</td>
                    <td>${ticket.seatId}</td>
                    <td>${formatDateYMD(ticket.departureTime)} ${getHoursAndMinutes(ticket.departureTime)}</td>
                    <td>${formatDateYMD(ticket.arrivalTime)} ${getHoursAndMinutes(ticket.arrivalTime)}</td>
                    <td>${ticket.seatType}</td>
                    <td>${ticket.price}VND</td>
                    <td>${ticket.status}</td>
                </tr>`
        return html
    }, "")
    ticketsArea.innerHTML = html;
    renderPaginationTickets(tickets.length)
}

// Hàm hiển thị phân trang
const renderPaginationSchedules = (totalItems) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let html = `
        <li class="page-item ${currentPageSchedules === 1 ? 'disabled' : ''}">
            <a class="page-link" onclick="changePageSchedules(${currentPageSchedules - 1})">«</a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <li class="page-item ${currentPageSchedules === i ? 'active' : ''}">
                <a class="page-link" onclick="changePageSchedules(${i})">${i}</a>
            </li>
        `;
    }

    html += `
        <li class="page-item ${currentPageSchedules === totalPages ? 'disabled' : ''}">
            <a class="page-link" onclick="changePageSchedules(${currentPageSchedules + 1})">»</a>
        </li>
    `;

    paginationSchedules.innerHTML = html;
};

function changePageSchedules(page) {
    if (page < 1 || page > Math.ceil(schedules.length / itemsPerPage)) return;
    currentPageSchedules = page;
    renderSchedules();
}
const renderPaginationRoutes = (totalItems) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let html = `
        <li class="page-item ${currentPageRoutes === 1 ? 'disabled' : ''}">
            <a class="page-link" onclick="changePageRoutes(${currentPageRoutes - 1})">«</a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <li class="page-item ${currentPageRoutes === i ? 'active' : ''}">
                <a class="page-link" onclick="changePageRoutes(${i})">${i}</a>
            </li>
        `;
    }

    html += `
        <li class="page-item ${currentPageRoutes === totalPages ? 'disabled' : ''}">
            <a class="page-link" onclick="changePageRoutes(${currentPageRoutes + 1})">»</a>
        </li>
    `;

    paginationRoutes.innerHTML = html;
};

function changePageRoutes(page) {
    if (page < 1 || page > Math.ceil(routes.length / itemsPerPage)) return;
    currentPageRoutes = page;
    renderRoutes();
}
const renderPaginationStations = (totalItems) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let html = `
        <li class="page-item ${currentPageStations === 1 ? 'disabled' : ''}">
            <a class="page-link" onclick="changePageStations(${currentPageStations - 1})">«</a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <li class="page-item ${currentPageStations === i ? 'active' : ''}">
                <a class="page-link" onclick="changePageStations(${i})">${i}</a>
            </li>
        `;
    }

    html += `
        <li class="page-item ${currentPageStations === totalPages ? 'disabled' : ''}">
            <a class="page-link" onclick="changePageStations(${currentPageStations + 1})">»</a>
        </li>
    `;

    paginationStations.innerHTML = html;
};

function changePageStations(page) {
    if (page < 1 || page > Math.ceil(stations.length / itemsPerPage)) return;
    currentPageStations = page;
    renderStations();
}
const renderPaginationBusCompanies = (totalItems) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let html = `
        <li class="page-item ${currentPageBusCompanies === 1 ? 'disabled' : ''}">
            <a class="page-link" onclick="changePageBusCompanies(${currentPageBusCompanies - 1})">«</a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <li class="page-item ${currentPageBusCompanies === i ? 'active' : ''}">
                <a class="page-link" onclick="changePageBusCompanies(${i})">${i}</a>
            </li>
        `;
    }

    html += `
        <li class="page-item ${currentPageBusCompanies === totalPages ? 'disabled' : ''}">
            <a class="page-link" onclick="changePageBusCompanies(${currentPageBusCompanies + 1})">»</a>
        </li>
    `;

    paginationBusCompanies.innerHTML = html;
};

function changePageBusCompanies(page) {
    if (page < 1 || page > Math.ceil(busCompanies.length / itemsPerPage)) return;
    currentPageBusCompanies = page;
    renderBusCompanies();
}
const renderPaginationTickets = (totalItems) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let html = `
        <li class="page-item ${currentPageTickets === 1 ? 'disabled' : ''}">
            <a class="page-link" onclick="changePageTickets(${currentPageTickets - 1})">«</a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <li class="page-item ${currentPageTickets === i ? 'active' : ''}">
                <a class="page-link" onclick="changePageTickets(${i})">${i}</a>
            </li>
        `;
    }

    html += `
        <li class="page-item ${currentPageTickets === totalPages ? 'disabled' : ''}">
            <a class="page-link" onclick="changePageTickets(${currentPageTickets + 1})">»</a>
        </li>
    `;

    paginationTickets.innerHTML = html;
};

function changePageTickets(page) {
    if (page < 1 || page > Math.ceil(tickets.length / itemsPerPage)) return;
    currentPageTickets = page;
    renderTickets();
}

renderSchedules();
renderRoutes();
renderStations();
renderBusCompanies();
renderTickets();
