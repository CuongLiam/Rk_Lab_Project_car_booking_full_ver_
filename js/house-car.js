class BusCompany {
  static lastIdBusCompany = 0;
  constructor(companyName, image, descriptions) {
    BusCompany.lastIdBusCompany++;
    const now = new Date().toISOString();
    this.id = BusCompany.lastIdBusCompany;
    this.companyName = companyName;
    this.image = image;
    this.descriptions = descriptions;
    this.createdAt = now;
    this.updatedAt = now;
  }

  // 1) paginate helper: returns { items, pageCount }
  //    from an array of BusCompany instances.
  static paginate(allItems, page = 1, perPage = 8) {
    const total = allItems.length;
    const pageCount = Math.ceil(total / perPage);
    const start = (page - 1) * perPage;
    const items = allItems.slice(start, start + perPage);
    return { items, pageCount };
  }
}

// 2) Sample data — replace or fetch from your API
const busCompanies = [
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  // …fill with as many as you like…
];

const perPage = 8;
const container = document.querySelector(".row.g-4");
const pagination = document.querySelector(".pagination");

// render one page of cards
function renderPage(page = 1) {
  // fetch paged slice + total pages
  const { items, pageCount } = BusCompany.paginate(busCompanies, page, perPage);

  // build cards
  container.innerHTML = items
    .map(
      (bc) => `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100 shadow-sm">
          <img src="${bc.image}"
               class="card-img-top"
               alt="${bc.companyName}">
          <div class="card-body">
            <h5 class="card-title">${bc.companyName}</h5>
            <p class="card-text text-muted small">
              <i class="fa-solid fa-location-dot me-1"></i>
              ${bc.descriptions}
            </p>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  // build next/prev + page buttons
  let html = "";
  html += `
      <li class="page-item ${page === 1 ? "disabled" : ""}">
        <a class="page-link" href="#" data-page="${page - 1}">&laquo;</a>
      </li>`;
  for (let i = 1; i <= pageCount; i++) {
    html += `
        <li class="page-item ${i === page ? "active" : ""}">
          <a class="page-link" href="#" data-page="${i}">${i}</a>
        </li>`;
  }
  html += `
      <li class="page-item ${page === pageCount ? "disabled" : ""}">
        <a class="page-link" href="#" data-page="${page + 1}">&raquo;</a>
      </li>`;

  pagination.innerHTML = html;
}

// delegate pagination clicks
pagination.addEventListener("click", (e) => {
  e.preventDefault();
  const link = e.target.closest("a.page-link");
  if (!link) return;
  const p = parseInt(link.dataset.page, 10);
  if (p > 0 && p <= Math.ceil(busCompanies.length / perPage)) {
    renderPage(p);
  }
});

// init
document.addEventListener("DOMContentLoaded", () => {
  renderPage(1);
});
