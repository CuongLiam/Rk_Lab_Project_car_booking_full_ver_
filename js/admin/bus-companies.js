document.addEventListener("DOMContentLoaded", function () {
    // Các phần tử DOM
    const tbody = document.querySelector("tbody");
    const addBtn = document.getElementById("addBusCompany");
    const form = document.getElementById("busCompanyForm");
    const nameInput = document.getElementById("companyName");
    const addressInput = document.getElementById("companyAddress");
    const modal = new bootstrap.Modal(document.getElementById("busCompanyModal"));
    const paginationContainer = document.querySelector(".pagination");
    const searchInput = document.getElementById("busCompaniesSearch");

    // Modal xác nhận xóa
    const confirmDeleteModal = new bootstrap.Modal(document.getElementById("confirmDeleteModal"));
    const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
    let deleteId = null;

    // Biến trạng thái
    let editingId = null;
    let currentPage = 1;
    const pageSize = 10;
    let keyword = "";

    // Lấy danh sách công ty từ localStorage
    function getBusCompanies() {
        return JSON.parse(localStorage.getItem("busCompanies")) || [];
    }

    // Lưu danh sách công ty vào localStorage
    function saveBusCompanies(companies) {
        localStorage.setItem("busCompanies", JSON.stringify(companies));
    }

    // Hiển thị danh sách công ty (có lọc theo từ khóa)
    function renderBusCompanies() {
        const allCompanies = getBusCompanies();

        // Lọc theo từ khóa tìm kiếm
        const filteredCompanies = allCompanies.filter(company => {
            const combinedText = `
                ${company.id}
                ${company.companyName}
                ${company.descriptions}
            `.toLowerCase();
            return combinedText.includes(keyword);
        });

        tbody.innerHTML = "";

        // Phân trang
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        const pageCompanies = filteredCompanies.slice(start, end);

        // Tạo từng hàng hiển thị công ty
        pageCompanies.forEach(company => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${company.id}</td>
                <td>${company.companyName}</td>
                <td>${company.descriptions}</td>
                <td>
                    <button class="btn btn-sm btn-warning edit-btn" data-id="${company.id}">Sửa</button>
                    <button class="btn btn-sm btn-danger delete-btn" data-id="${company.id}">Xóa</button>
                </td>
            `;
            tbody.appendChild(row);
        });

        renderPagination(filteredCompanies.length);
    }

    // Tạo phân trang
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
                renderBusCompanies();
            }
        });
        paginationContainer.appendChild(prevBtn);

        // Các nút số trang
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.className = "btn btn-sm btn-outline-primary m-1";
            if (i === currentPage) btn.classList.add("active");

            btn.addEventListener("click", () => {
                currentPage = i;
                renderBusCompanies();
            });

            paginationContainer.appendChild(btn);
        }

        // Nút trang sau
        const nextBtn = document.createElement("button");
        nextBtn.textContent = ">";
        nextBtn.className = "btn btn-sm btn-outline-primary m-1";
        nextBtn.disabled = currentPage === totalPages || totalPages === 0;
        nextBtn.addEventListener("click", () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderBusCompanies();
            }
        });
        paginationContainer.appendChild(nextBtn);
    }

    // Mở modal thêm công ty mới
    addBtn.addEventListener("click", () => {
        editingId = null;
        form.reset();
        modal.show();
    });

    // Xử lý khi submit form
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const companies = getBusCompanies();
        const newCompany = {
            id: editingId ?? (companies.length ? Math.max(...companies.map(c => c.id)) + 1 : 1),
            companyName: nameInput.value.trim(),
            descriptions: addressInput.value.trim(),
            createAt: new Date(),
            updateAt: new Date(),
        };

        // Kiểm tra dữ liệu đầu vào
        if (!newCompany.companyName || !newCompany.descriptions) {
            alert("Vui lòng nhập đầy đủ thông tin công ty!");
            return;
        }

        // Thêm mới hoặc cập nhật công ty
        if (editingId !== null) {
            const index = companies.findIndex(c => c.id === editingId);
            if (index !== -1) companies[index] = newCompany;
        } else {
            companies.push(newCompany);
        }

        saveBusCompanies(companies);
        renderBusCompanies();
        modal.hide();
        form.reset();
    });

    // Bắt sự kiện click nút sửa / xóa
    tbody.addEventListener("click", function (e) {
        const btn = e.target.closest("button");
        if (!btn) return;
        const id = Number(btn.getAttribute("data-id"));
        if (btn.classList.contains("edit-btn")) {
            handleEdit(id);
        }
        if (btn.classList.contains("delete-btn")) {
            deleteId = id;
            confirmDeleteModal.show();
        }
    });

    // Xử lý nút sửa
    function handleEdit(id) {
        const companies = getBusCompanies();
        const company = companies.find(c => c.id === id);
        if (!company) return alert("Không tìm thấy công ty!");

        editingId = company.id;
        nameInput.value = company.companyName;
        addressInput.value = company.descriptions;
        updateAt = new Date();
        modal.show();
    }

    // Xử lý khi xác nhận xóa
    confirmDeleteBtn.addEventListener("click", function () {
        const companies = getBusCompanies().filter(c => c.id !== deleteId);
        saveBusCompanies(companies);
        renderBusCompanies();
        confirmDeleteModal.hide();
    });

    // Tìm kiếm công ty theo tên hoặc id
    searchInput.addEventListener("input", function (e) {
        keyword = e.target.value.toLowerCase().trim();
        currentPage = 1;
        renderBusCompanies();
    });

    // Hiển thị lần đầu
    renderBusCompanies();
});
