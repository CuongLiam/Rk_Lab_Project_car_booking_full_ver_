import { fakeData } from "./fake-data.js";

const stations = fakeData.stations;
let currentPage = 1;
const itemsPerPage = 8;

const contentEl = document.querySelector(".content");
const pageEl = document.querySelector(".page");
const loremEl = document.querySelector(".lorem");

function renderGarage() {
  // clear
  contentEl.innerHTML = "";
  pageEl.innerHTML = "";
  loremEl.style.display = "none";

  // calculate slice
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const slice = stations.slice(start, end);

  // cards
  slice.forEach((station) => {
    const col = document.createElement("div");
    col.className = "card";
    col.innerHTML = `
      <img src="${station.image}" alt="${station.name}" />
      <p class="detailTitle">${station.name}</p>
      <p class="moreDetail">${station.descriptions}</p>
    `;
    contentEl.appendChild(col);
  });

  // pagination
  renderPagination();

  // show lorem below
  loremEl.style.display = "block";
}

function renderPagination() {
  const totalPages = Math.ceil(stations.length / itemsPerPage);

  // prev
  const prev = document.createElement("div");
  prev.className = "pageItem";
  prev.innerHTML = "&laquo;";
  if (currentPage > 1) {
    prev.addEventListener("click", () => {
      currentPage--;
      renderGarage();
    });
  } else {
    prev.classList.add("disabled");
  }
  pageEl.appendChild(prev);

  // pages
  const range = 2; // pages on each side
  const startPage = Math.max(1, currentPage - range);
  const endPage = Math.min(totalPages, currentPage + range);

  for (let i = startPage; i <= endPage; i++) {
    const item = document.createElement("div");
    item.className = "pageItem";
    item.textContent = i;
    if (i === currentPage) item.classList.add("active");
    else
      item.addEventListener("click", () => {
        currentPage = i;
        renderGarage();
      });
    pageEl.appendChild(item);
  }

  // next
  const next = document.createElement("div");
  next.className = "pageItem";
  next.innerHTML = "&raquo;";
  if (currentPage < totalPages) {
    next.addEventListener("click", () => {
      currentPage++;
      renderGarage();
    });
  } else {
    next.classList.add("disabled");
  }
  pageEl.appendChild(next);
}

document.addEventListener("DOMContentLoaded", renderGarage);