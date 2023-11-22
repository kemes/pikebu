<template>
    <div class="container-fluid mx-auto text-center overflow-scroll" style="padding-top: 80px; padding-bottom: 100px;">
        <div class="row">
            <h3 class="pruple-text-emphasis">Lis&auml;&auml; ravintola kartalle</h3>
            
            <div style="height:300px; width:100%">
                <l-map ref="map" v-model:zoom="zoom" :use-global-leaflet="false" :center="[60.3112373549543, 25.38869619369507]" @click="addMarker" :options="{zoomControl:false}" >
                    <l-tile-layer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        layer-type="base"
                        name="OpenStreetMap">
                    </l-tile-layer>
                    <l-marker 
                        v-for="marker, index in markers"
                        :lat-lng="marker.marker" :key="index">
                        <l-popup>
                            {{ marker.id }}
                        </l-popup>
                    </l-marker>
                </l-map>
            </div>
            
            <form @submit.prevent>

                <label class="px-2 py-2" for="coord">Koordinaatit </label><br />
                <input type="text" v-model="coord" id="coord"/><br />

                <label class="px-2 py-2" for="name">Nimi </label><br />
                <input type="text" v-model="name" placeholder="Ravintolan nimi" /><br />
                
                <!-- Checkboxes for selection -->
                <label class="px-4 py-4" for="pizza">Pizza</label>
                <input type="checkbox" value="pizza" v-model="checkedTypes" />
                <label class="px-4 py-4" for="kebab">Kebab</label>
                <input type="checkbox" value="kebab" v-model="checkedTypes" />
                <label class="px-4 py-4" for="burger">Burger</label>
                <input type="checkbox" value="burger" v-model="checkedTypes" /><br />

                <button class="btn btn-secondary px-5" name="submit" @click="addmarker">Lis&auml;&auml; ravintola</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer, LMarker, LPopup} from "@vue-leaflet/vue-leaflet"

// const props = defineProps({
//     markers: String
// })

// console.log(this.map.getBounds())

const markers = [
    {
        id: 1,
        marker: [60.3112373549543, 25.38869619369507]
    },
    {
        id: 2,
        marker: [60.24289554387395, 24.978044629096985]
    },
];

const name = ref('');
const coord = ref();
const checkedTypes = ref([]);
const zoom = 15;

function addMarker() {

    //Add marker to local storage
    // const newValues = localStorage.getItem('markers') + coord;
    // localStorage.setItem('markers_new', JSON.stringify(newValues));
    
}

onMounted( () => {
    console.log('mounted');
    //Set zoom to view all markers
    
    // updateExistingMarkers()
});

//TODO: Show existing markers on map when loaded for the fist time

// function updateExistingMarkers(){
//     const temp = props.markers;
//     return temp;
// }


</script>