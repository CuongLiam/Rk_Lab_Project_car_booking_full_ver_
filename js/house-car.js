class BusCompany {
  static lastIdBusCompany = 0;
  constructor(companyName, image, descriptions) {
    BusCompany.lastIdBusCompany++;
    const now = new Date().toISOString();
    this.id           = BusCompany.lastIdBusCompany;
    this.companyName  = companyName;
    this.image        = image;
    this.descriptions = descriptions;
    this.createdAt    = now;
    this.updatedAt    = now;
  }
}
let busCompanies = [
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
  new BusCompany("Phương Trang", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: 274-276 Đề Thám, Quận 1, TP.HCM"),
];

// loadFromLocalStorage();

let currentPage = 1;
const itemsPerPage = 8;

function renderBusCompaniesWithPagination() {
  const container = document.querySelector(".row.g-4");
  container.innerHTML = "";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const busToDisplay = busCompanies.slice(startIndex, endIndex);

  busToDisplay.forEach((bus) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${bus.image}" class="card-img-top" alt="${bus.companyName}">
        <div class="card-body">
          <h5 class="card-title">${bus.companyName}</h5>
          <p class="card-text text-muted small">
            <i class="fa-solid fa-location-dot me-1"></i>
            ${bus.descriptions}
          </p>
        </div>
      </div>
    `;
    container.appendChild(col);
  });

  renderPaginationControls();
}

function renderPaginationControls() {
  const pagination = document.querySelector(".pagination");
  pagination.innerHTML = "";

  if (busCompanies.length === 0) return;

  const totalPages = Math.ceil(busCompanies.length / itemsPerPage);

  // Prev
  if (currentPage > 1) {
    const prev = document.createElement("li");
    prev.className = "page-item";
    prev.innerHTML = `<a class="page-link" href="#" aria-label="Previous">&laquo;</a>`;
    prev.addEventListener("click", () => {
      currentPage--;
      renderBusCompaniesWithPagination();
    });
    pagination.appendChild(prev);
  }

  // Page Numbers
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentPage ? "active" : ""}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    if (i !== currentPage) {
      li.addEventListener("click", () => {
        currentPage = i;
        renderBusCompaniesWithPagination();
      });
    }
    pagination.appendChild(li);
  }

  // Next
  if (currentPage < totalPages) {
    const next = document.createElement("li");
    next.className = "page-item";
    next.innerHTML = `<a class="page-link" href="#" aria-label="Next">&raquo;</a>`;
    next.addEventListener("click", () => {
      currentPage++;
      renderBusCompaniesWithPagination();
    });
    pagination.appendChild(next);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  renderBusCompaniesWithPagination();
});
