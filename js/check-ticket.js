// Nhập dữ liệu giả
import { fakeData } from './fake-data.js';

// Tạo danh sách vé từ dữ liệu giả
const tickets = fakeData.tickets.map((ticket) => {
    const schedule = fakeData.schedule.find(s => s.id === ticket.scheduleId);
    const route = fakeData.routes.find(r => r.id === schedule?.routeId);
    const bus = fakeData.buses.find(b => b.id === schedule?.busId);
    const seat = fakeData.seats.find(sc => sc.id === ticket.seatId);
    const departureStation = fakeData.stations.find(st => st.id === route?.departureStationId);
    const arrivalStation = fakeData.stations.find(st => st.id === route?.arrivalStationId);
    const busCompany = fakeData.busCompanies.find(c => c.id === bus?.companyId);

    return {
        ticketId: `ABC${ticket.id}`,
        phone: '0123456789',
        status: ticket.status,
        departure: departureStation?.name,
        arrival: arrivalStation?.name,
        departureTime: new Date(ticket.departureTime).toLocaleString('vi-VN'),
        price: ticket.price,
        busName: bus?.name,
        busLicense: bus?.licensePlate,
        busCompanyName: busCompany?.companyName,
        seat: seat?.seatNumber
    };
});

document.addEventListener('DOMContentLoaded', function () {
    const checkButton = document.querySelector('button');
    const ticketIdInput = document.querySelector('.ticketId');
    const phoneInput = document.querySelector('.phone');
    const greenBanner = document.querySelector('.green-banner');

    // Lấy modal Bootstrap
    const modal = document.getElementById('ticketModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-body');
    const bootstrapModal = new bootstrap.Modal(modal);

    checkButton.addEventListener('click', function () {
        const enteredTicketId = ticketIdInput.value.trim();
        const enteredPhone = phoneInput.value.trim();

        if (enteredTicketId === '' || enteredPhone === '') {
            greenBanner.textContent = 'Vui lòng nhập vào thông tin và bấm kiểm tra vé';
            greenBanner.style.backgroundColor = '#F2DEDE';
            greenBanner.style.color = '#A94442';
            return;
        }

        const foundTickets = tickets.filter(ticket => {
            return ticket.ticketId === enteredTicketId && ticket.phone === enteredPhone;
        });

        if (foundTickets.length > 0) {
            const ticket = foundTickets[0];

            // Đặt nội dung cho modal
            modalTitle.textContent = 'Thông tin vé';
            modalBody.innerHTML = `
                <p><strong>Mã vé:</strong> ${ticket.ticketId}</p>
                <p><strong>Tuyến:</strong> ${ticket.departure} → ${ticket.arrival}</p>
                <p><strong>Nhà xe:</strong> ${ticket.busCompanyName}</p>
                <p><strong>Xe:</strong> ${ticket.busName} - Biển số: ${ticket.busLicense}</p>
                <p><strong>Ghế:</strong> ${ticket.seat}</p>
                <p><strong>Thời gian:</strong> ${ticket.departureTime}</p>
                <p><strong>Giá:</strong> ${ticket.price.toLocaleString('vi-VN')} VND</p>
                <p><strong>Trạng thái:</strong> ${ticket.status}</p>
            `;

            bootstrapModal.show(); // Hiển thị modal

            greenBanner.textContent = 'Đã tìm thấy vé !';
            greenBanner.style.backgroundColor = '#DFF0D8';
            greenBanner.style.color = '#3C763D';
        } else {
            greenBanner.textContent = 'Không tìm thấy vé !';
            greenBanner.style.backgroundColor = '#F2DEDE';
            greenBanner.style.color = '#A94442';
        }
    });
});
