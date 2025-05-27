function initSearchTabDropdown() {
  document.querySelectorAll('.dropdown-trigger').forEach(trigg => {
    trigg.addEventListener('click', e => {
      // e.preventDefault();
      e.stopPropagation();

      document.querySelectorAll('.dropdown-list').forEach(dl => dl.style.display = 'none');

      const list = trigg.nextElementSibling.nextElementSibling;
      list.style.display = list.style.display === 'block' ? 'none' : 'block';
    });
  });

  document.querySelectorAll('.dropdown-list .item').forEach(item => {
    item.addEventListener('click', e => {
      const txt = e.target.textContent.trim();

      const list = e.target.parentElement;
      const trigger = list.previousElementSibling.previousElementSibling;
      const inputName = trigger.getAttribute('data-input');// <p>

      // set values
      trigger.textContent = txt;
      trigger.classList.remove('text-muted');
      document.getElementById(inputName).value = txt;
      list.style.display = 'none';
    });
  });
}

document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-list').forEach(dl => dl.style.display = 'none');
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("../pages/search-tab.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load search-tab");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("search-tab-container").innerHTML = data;
      initSearchTabDropdown();
      // Đặt ở đây để đảm bảo nút đã có trên DOM
      const btn = document.getElementById("findRoute");
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const from = document.getElementById("from")?.value || "";
        const to = document.getElementById("to")?.value || "";
        const date = document.getElementById("date")?.value || "";

        if (from && to) {
          sessionStorage.setItem('from', from);
          sessionStorage.setItem('to', to);
          sessionStorage.setItem('date', JSON.stringify(date));
          window.location.href = `../pages/booking-ticket.html`;
        }
      });
    })
    .catch(error => console.error("Error loading search-tab:", error));
});
