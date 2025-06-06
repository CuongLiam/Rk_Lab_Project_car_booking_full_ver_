document.addEventListener("DOMContentLoaded", function () {
    // Các phần tử DOM
    const tbody = document.querySelector("tbody");
    const addBtn = document.getElementById("addRoute");
    const form = document.getElementById("routeForm");
    const departureSelect = document.getElementById("departureStation");
    const arrivalSelect = document.getElementById("arrivalStation");
    const priceInput = document.getElementById("price");
    const durationInput = document.getElementById("duration");
    const distanceInput = document.getElementById("distance");
    const modal = new bootstrap.Modal(document.getElementById("routeModal"));
    const paginationContainer = document.querySelector(".pagination");
    const routesSearchInput = document.getElementById("routesSearch");

    // Modal xác nhận xóa
    const confirmDeleteModal = new bootstrap.Modal(document.getElementById("confirmDeleteModal"));
    const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
    let deleteId = null;

    // Biến trạng thái
    let editingId = null;
    let currentPage = 1;
    const pageSize = 10;
    let keyword = "";

    // Lấy danh sách tuyến từ localStorage
    function getRoutes() {
        return JSON.parse(localStorage.getItem("routes")) || [];
    }

    // Lưu danh sách tuyến vào localStorage
    function saveRoutes(routes) {
        localStorage.setItem("routes", JSON.stringify(routes));
    }

    // Lấy danh sách bến xe từ localStorage
    function getStations() {
        return JSON.parse(localStorage.getItem("stations")) || [];
    }

    // Hiển thị danh sách tuyến (có tìm kiếm và phân trang)
    function renderRoutes() {
        const allRoutes = getRoutes();
        const stations = getStations();

        // Lọc theo từ khóa tìm kiếm
        const filteredRoutes = allRoutes.filter(route => {
            const departureStation = stations.find(s => s.id === route.departureStationId);
            const arrivalStation = stations.find(s => s.id === route.arrivalStationId);
            const combinedText = `
                ${route.id}
                ${departureStation.name} ${departureStation.location}
                ${arrivalStation.name} ${arrivalStation.location}
            `.toLowerCase();
            return combinedText.includes(keyword);
        });

        tbody.innerHTML = "";

        // Phân trang
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        const pageRoutes = filteredRoutes.slice(start, end);

        // Tạo từng dòng dữ liệu
        pageRoutes.forEach(route => {
            const departureStation = stations.find(s => s.id === route.departureStationId);
            const arrivalStation = stations.find(s => s.id === route.arrivalStationId);

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${route.id}</td>
                <td>${departureStation.name} - ${departureStation.location}</td>
                <td>${arrivalStation.name} - ${arrivalStation.location}</td>
                <td>${route.price} VND</td>
                <td>${route.duration}</td>
                <td>${route.distance} km</td>
                <td>
                    <button class="btn btn-sm btn-warning edit-btn" id="${route.id}">Sửa</button>
                    <button class="btn btn-sm btn-danger delete-btn" id="${route.id}">Xóa</button>
                </td>
            `;
            tbody.appendChild(row);
        });

        // Hiển thị phân trang
        renderPagination(filteredRoutes.length);
    }

    // Hiển thị các nút phân trang
    function renderPagination(totalItems) {
        paginationContainer.innerHTML = "";
        const totalPages = Math.ceil(totalItems / pageSize);

        // Nút trang trước
        const prevBtn = document.createElement("button");
        prevBtn.textContent = "<";
        prevBtn.className = "btn btn-sm btn-outline-primary m-1";
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                renderRoutes();
            }
        });
        paginationContainer.appendChild(prevBtn);

        // Nút số trang
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.className = "btn btn-sm btn-outline-primary m-1";
            if (i === currentPage) btn.classList.add("active");

            btn.addEventListener("click", () => {
                currentPage = i;
                renderRoutes();
            });

            paginationContainer.appendChild(btn);
        }

        // Nút trang sau
        const nextBtn = document.createElement("button");
        nextBtn.textContent = ">";
        nextBtn.className = "btn btn-sm btn-outline-primary m-1";
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener("click", () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderRoutes();
            }
        });
        paginationContainer.appendChild(nextBtn);
    }

    // Mở modal thêm mới tuyến
    addBtn.addEventListener("click", () => {
        editingId = null;
        form.reset();
        const stations = getStations();
        departureSelect.innerHTML = stations.map(s => `<option value="${s.id}">${s.name}</option>`);
        arrivalSelect.innerHTML = stations.map(s => `<option value="${s.id}">${s.name}</option>`);
        modal.show();
    });

    // Xử lý khi gửi form
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const routes = getRoutes();
        const newRoute = {
            id: editingId ?? (routes.length ? Math.max(...routes.map(r => r.id)) + 1 : 1),
            departureStationId: Number(departureSelect.value),
            arrivalStationId: Number(arrivalSelect.value),
            price: Number(priceInput.value),
            duration: durationInput.value,
            distance: Number(distanceInput.value)
        };

        // Kiểm tra ga đi và đến không được giống nhau
        if (newRoute.departureStationId === newRoute.arrivalStationId) {
            alert("Ga đi và đến không được giống nhau!");
            return;
        }

        // Cập nhật hoặc thêm mới tuyến
        if (editingId !== null) {
            const index = routes.findIndex(r => r.id === editingId);
            routes[index] = newRoute;
        } else {
            routes.push(newRoute);
        }

        saveRoutes(routes);
        renderRoutes();
        modal.hide();
        form.reset();
    });

    // Bắt sự kiện click nút sửa / xóa
    tbody.addEventListener("click", function (e) {
        const id = Number(e.target.id);

        if (e.target.classList.contains("edit-btn")) {
            handleEdit(id);
        }

        if (e.target.classList.contains("delete-btn")) {
            deleteId = id;
            confirmDeleteModal.show();
        }
    });

    // Xử lý nút sửa
    function handleEdit(id) {
        const routes = getRoutes();
        const route = routes.find(r => r.id === id);
        const stations = getStations();
        if (!route) return alert("Không tìm thấy tuyến!");

        editingId = route.id;

        departureSelect.innerHTML = stations.map(s => `<option value="${s.id}" ${s.id === route.departureStationId ? "selected" : ""}>${s.name}</option>`);
        arrivalSelect.innerHTML = stations.map(s => `<option value="${s.id}" ${s.id === route.arrivalStationId ? "selected" : ""}>${s.name}</option>`);
        priceInput.value = route.price;
        durationInput.value = route.duration;
        distanceInput.value = route.distance;

        modal.show();
    }

    // Xử lý xác nhận xóa
    confirmDeleteBtn.addEventListener("click", function () {
        const routes = getRoutes().filter(r => r.id !== deleteId);
        saveRoutes(routes);
        renderRoutes();
        confirmDeleteModal.hide();
    });

    // Tìm kiếm tuyến
    routesSearchInput.addEventListener("input", function (e) {
        keyword = e.target.value.toLowerCase().trim();
        currentPage = 1;
        renderRoutes();
    });

    // Gọi hiển thị ban đầu
    renderRoutes();
});