
const minSlider = document.getElementById('min-time');
const maxSlider = document.getElementById('max-time');
const minDisplay = document.getElementById('min-time-display');
const maxDisplay = document.getElementById('max-time-display');
const activeTrack = document.getElementById('active-track');

const minSliderPrice = document.getElementById('min-price');
const maxSliderPrice = document.getElementById('max-price');
const track = document.getElementById('price-active-track');
const minLabel = document.getElementById('min-price-label');
const maxLabel = document.getElementById('max-price-label');

//JS Chọn giờ đi
function formatTime(value) {
  const h = String(Math.floor(value / 60)).padStart(2, '0');
  const m = String(value % 60).padStart(2, '0');
  return `${h}:${m}`;
}

function updateTimeSlider() {
  let min = parseInt(minSlider.value);
  let max = parseInt(maxSlider.value);

  if (min > max) [min, max] = [max, min];

  minDisplay.textContent = formatTime(min);
  maxDisplay.textContent = formatTime(max);

  const percentMin = min / 1439 * 100;
  const percentMax = max / 1439 * 100;
  activeTrack.style.left = percentMin + '%';
  activeTrack.style.width = (percentMax - percentMin) + '%';
}

minSlider.addEventListener('input', updateTimeSlider);
maxSlider.addEventListener('input', updateTimeSlider);
updateTimeSlider();


//JS Chọn giá vé
function formatCurrency(value) {
  return new Intl.NumberFormat('vi-VN').format(value);
}

function updatePriceSlider(event) {
  let minVal = parseInt(minSliderPrice.value);
  let maxVal = parseInt(maxSliderPrice.value);

  if (minVal > maxVal) {
    if (event && event.target === minSliderPrice) {
      maxSliderPrice.value = minVal;
    } else {
      minSliderPrice.value = maxVal;
    }
  }

  const minPercent = (minSliderPrice.value / 2000000) * 100;
  const maxPercent = (maxSliderPrice.value / 2000000) * 100;

  track.style.left = minPercent + '%';
  track.style.width = (maxPercent - minPercent) + '%';

  minLabel.textContent = formatCurrency(minSliderPrice.value);
  maxLabel.textContent = formatCurrency(maxSliderPrice.value);
}

minSliderPrice.addEventListener('input', updatePriceSlider);
maxSliderPrice.addEventListener('input', updatePriceSlider);
window.addEventListener('load', () => {
  updateTimeSlider();
  updatePriceSlider();
});

///////////////UPDATE LẠI HEADER.JS
document.addEventListener("DOMContentLoaded", function () {
    fetch("../pages/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load header");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});
