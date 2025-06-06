document.addEventListener('DOMContentLoaded', function () {
    const checkButton = document.querySelector('button');
    const ticketIdInput = document.querySelector('.ticketId');
    const phoneInput = document.querySelector('.phone');
    const greenBanner = document.querySelector('.green-banner');

    const modal = document.getElementById('ticketModal');
    const modalBody = modal.querySelector('.modal-body');
    const bootstrapModal = new bootstrap.Modal(modal);

    function getTickets() {
        return JSON.parse(localStorage.getItem('tickets')) || [];
    }

    function getScheduleById(id) {
        const schedules = JSON.parse(localStorage.getItem('schedule')) || [];
        return schedules.find(s => s.id === id);
    }

    function getRouteById(id) {
        const routes = JSON.parse(localStorage.getItem('routes')) || [];
        return routes.find(r => r.id === id);
    }

    function getBusById(id) {
        const buses = JSON.parse(localStorage.getItem('buses')) || [];
        return buses.find(b => b.id === id);
    }

    function getCompanyById(id) {
        const companies = JSON.parse(localStorage.getItem('busCompanies')) || [];
        return companies.find(c => c.id === id);
    }

    function getSeatById(id) {
        const seats = JSON.parse(localStorage.getItem('seats')) || [];
        return seats.find(s => s.id === id);
    }

    checkButton.addEventListener('click', function () {
        const enteredTicketId = parseInt(ticketIdInput.value.trim());
        const enteredPhone = phoneInput.value.trim();

        if (isNaN(enteredTicketId) || enteredPhone === '') {
            greenBanner.textContent = 'Vui lòng nhập mã vé hợp lệ và số điện thoại';
            greenBanner.style.backgroundColor = '#F2DEDE';
            greenBanner.style.color = '#A94442';
            return;
        }

        const tickets = getTickets();
        const foundTicket = tickets.find(ticket => ticket.id === enteredTicketId && ticket.phoneUser === enteredPhone);

        if (foundTicket) {
            const schedule = getScheduleById(foundTicket.scheduleId);
            const route =   getRouteById(schedule.routeId);
            const bus =   getBusById(schedule.busId);
            const company =   getCompanyById(bus.companyId);
            const seat = getSeatById(foundTicket.seatId);
            const stations = JSON.parse(localStorage.getItem('stations')) || [];

            const departureStation = stations.find(s => s.id === route.departureStationId);
            const arrivalStation = stations.find(s => s.id === route.arrivalStationId);

            modalBody.innerHTML = `
            <p><strong>Mã vé:</strong>${foundTicket.id}</p>
            <p><strong>Tuyến:</strong> ${departureStation.name} → ${arrivalStation.name}</p>
            <p><strong>Nhà xe:</strong> ${company.companyName}</p>
            <p><strong>Xe:</strong> ${bus.name} - Biển số: ${bus.licensePlate}</p>
            <p><strong>Ghế:</strong> ${seat.seatNumber}</p>
            <p><strong>Thời gian:</strong> ${new Date(foundTicket.departureTime).toLocaleString('vi-VN')}</p>
            <p><strong>Giá:</strong> ${Number(foundTicket.price).toLocaleString('vi-VN')} VND</p>
            <p><strong>Trạng thái:</strong> ${foundTicket.status}</p>
            `;


            bootstrapModal.show();
            greenBanner.textContent = 'Đã tìm thấy vé!';
            greenBanner.style.backgroundColor = '#DFF0D8';
            greenBanner.style.color = '#3C763D';
        } else {
            greenBanner.textContent = 'Không tìm thấy vé!';
            greenBanner.style.backgroundColor = '#F2DEDE';
            greenBanner.style.color = '#A94442';
        }
    });
});

