import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { createApp } from 'vue'
import App from '../App.vue'

const app = createApp(App)
app.mount('#app')

// var map = L.map('map').setView([60.31122305185891, 25.388627797365192], 16)

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// let marker = ref({});

// map.on("click", function(e){
//     const pos = e.latlng.lat + ', ' + e.latlng.lng;
//     document.getElementById('coord').value = pos;
//     map.removeLayer(marker);
//     marker = new L.Marker([e.latlng.lat, e.latlng.lng]);
//     map.addLayer(marker);
//     // console.log(marker);

// });

