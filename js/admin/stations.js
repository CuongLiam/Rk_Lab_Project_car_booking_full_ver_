import { fakeData } from "../fake-data.js";

const stations = fakeData.stations;

// Render table
function renderStations() {
    const tbody = document.getElementById('station-list');
    tbody.innerHTML = stations.map(s => `
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td><img src="${s.image}" alt="" style="width:60px;height:40px;object-fit:cover"></td>
            <td>${s.wallpaper}</td>
            <td>${s.descriptions}</td>
            <td>${s.location}</td>
            <td>
                <button class="btn btn-warning btn-sm" disabled>Edit</button>
                <button class="btn btn-danger btn-sm" disabled>Delete</button>
            </td>
        </tr>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderStations);