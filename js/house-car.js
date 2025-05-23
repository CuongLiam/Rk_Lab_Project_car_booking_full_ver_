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
class Paginator {
  constructor(items = [], perPage = 8) {
    this.items       = items;
    this.perPage     = perPage;
    this.currentPage = 1;
  }

  get pageCount() {
    return Math.ceil(this.items.length / this.perPage);
  }

  get pageItems() {
    const start = (this.currentPage - 1) * this.perPage;
    return this.items.slice(start, start + this.perPage);
  }

  goTo(page) {
    this.currentPage = Math.min(Math.max(1, page), this.pageCount);
  }

  next() {
    this.goTo(this.currentPage + 1);
  }

  prev() {
    this.goTo(this.currentPage - 1);
  }
}

// 3) Your data (replace/fetch as needed)
const busCompanies = [
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa",    "../assets/imgs/nha_xe/nha-xe-binh-ha-nam-dinh-vinh-phuc-414x297.jpg.png", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa",    "../assets/imgs/nha_xe/nha-xe-binh-ha-nam-dinh-vinh-phuc-414x297.jpg.png", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa",    "../assets/imgs/nha_xe/nha-xe-binh-ha-nam-dinh-vinh-phuc-414x297.jpg.png", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa",    "../assets/imgs/nha_xe/nha-xe-binh-ha-nam-dinh-vinh-phuc-414x297.jpg.png", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa",    "../assets/imgs/nha_xe/nha-xe-binh-ha-nam-dinh-vinh-phuc-414x297.jpg.png", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa",    "../assets/imgs/nha_xe/nha-xe-binh-ha-nam-dinh-vinh-phuc-414x297.jpg.png", "Trụ sở: …"),
  new BusCompany("Thanh Nhung", "../assets/imgs/nha_xe/nha-xe-an-hoa-hiep-ca-mau-kon-tum.jpg.jpg", "Trụ sở: …"),
  new BusCompany("An Hòa",    "../assets/imgs/nha_xe/nha-xe-binh-ha-nam-dinh-vinh-phuc-414x297.jpg.png", "Trụ sở: …"),
  // …etc…
];

// 4) Grab DOM elements & instantiate
const perPage    = 8;
const paginator  = new Paginator(busCompanies, perPage);
const container  = document.querySelector('.row.g-4');
const pagination = document.querySelector('.pagination');

// 5) Render function
function render() {
  // cards
  container.innerHTML = paginator.pageItems.map(bc => `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card h-100 shadow-sm">
        <img src="${bc.image}" class="card-img-top" alt="${bc.companyName}">
        <div class="card-body">
          <h5 class="card-title">${bc.companyName}</h5>
          <p class="card-text text-muted small">
            <i class="fa-solid fa-location-dot me-1"></i>
            ${bc.descriptions}
          </p>
        </div>
      </div>
    </div>
  `).join('');

  // pagination controls
  let html = '';
  html += `
    <li class="page-item ${paginator.currentPage === 1 ? 'disabled' : ''}">
      <a class="page-link" href="#" data-action="prev">&laquo;</a>
    </li>`;
  for (let i = 1; i <= paginator.pageCount; i++) {
    html += `
      <li class="page-item ${i === paginator.currentPage ? 'active' : ''}">
        <a class="page-link" href="#" data-action="goto" data-page="${i}">${i}</a>
      </li>`;
  }
  html += `
    <li class="page-item ${paginator.currentPage === paginator.pageCount ? 'disabled' : ''}">
      <a class="page-link" href="#" data-action="next">&raquo;</a>
    </li>`;

  pagination.innerHTML = html;
}

// 6) Handle pagination clicks
pagination.addEventListener('click', e => {
  e.preventDefault();
  const link = e.target.closest('a.page-link');
  if (!link || link.parentElement.classList.contains('disabled')) return;

  const action = link.dataset.action;
  if (action === 'prev')        paginator.prev();
  else if (action === 'next')   paginator.next();
  else if (action === 'goto')   paginator.goTo(parseInt(link.dataset.page, 10));

  render();
});

// 7) Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  render();
});
