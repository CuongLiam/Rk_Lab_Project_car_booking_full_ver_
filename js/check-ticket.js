// Mảng chứa thông tin các vé giả định
const tickets = [
    {
        ticketId: 'ABC123',
        phone: '0901234567',
        status: 'BOOKED',
        departure: 'Hà Nội',
        arrival: 'Sài Gòn',
        departureTime: '08:00 23-05-2025',
        price: 500000
    },
    {
        ticketId: 'DEF456',
        phone: '0917654321',
        status: 'CANCELLED',
        departure: 'Đà Nẵng',
        arrival: 'Huế',
        departureTime: '10:30 24-05-2025',
        price: 200000
    }
];

document.addEventListener('DOMContentLoaded', function () {
    // Lấy tham chiếu đến các phần tử HTML
    const checkButton = document.querySelector('button'); // Nút "Kiểm tra vé"
    const ticketIdInput = document.querySelector('.id'); // Ô nhập Mã Vé
    const phoneInput = document.querySelector('.phone'); // Ô nhập Số điện thoại
    const greenBanner = document.querySelector('.green-banner'); // Banner màu xanh lá cây

    // Thêm bộ lắng nghe sự kiện 'click' cho nút "Kiểm tra vé"
    checkButton.addEventListener('click', function () {
        // Lấy giá trị từ các ô nhập liệu
        const enteredTicketId = ticketIdInput.value.trim(); // .trim() để loại bỏ khoảng trắng thừa
        const enteredPhone = phoneInput.value.trim();
         // Kiểm tra nếu ô nhập liệu trống
        if (enteredTicketId === '' || enteredPhone === '') {
            greenBanner.textContent = 'Vui lòng nhập vào thông tin và bấm kiểm tra vé';
            greenBanner.style.backgroundColor = '#DFF0D8'; 
            greenBanner.style.color = '#3C763D';
            return; 
        }
        // Tìm kiếm vé trong mảng 'tickets'
        // Sử dụng phương thức .find() để tìm vé đầu tiên khớp với cả mã vé và số điện thoại
        const foundTickets = tickets.filter(ticket => {
            return ticket.ticketId === enteredTicketId && ticket.phone === enteredPhone;
        });

        if (foundTickets.length > 0) {
            greenBanner.textContent = 'Đã tìm thấy vé';
            greenBanner.style.backgroundColor = '#DFF0D8';
            greenBanner.style.color = '#3C763D';
        } else {
            greenBanner.textContent = 'Không tìm thấy vé !';
            greenBanner.style.backgroundColor = '#F2DEDE';
            greenBanner.style.color = '#A94442';
        }
    });
});
