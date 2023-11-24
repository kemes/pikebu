<template>
    <div class="container-fluid mx-auto text-center overflow-scroll" style="padding-top: 80px; padding-bottom: 100px;">
        <div class="row">
            <h3 class="pruple-text-emphasis">Lis&auml;&auml; ravintola</h3>
            
            <div style="height:300px; width:100%">
                <l-map ref="map" v-model:zoom="zoom" :use-global-leaflet="false" :center="[60.3112373549543, 25.38869619369507]" @click="addMarker" :options="{zoomControl:false}" >
                    <l-tile-layer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        layer-type="base"
                        name="OpenStreetMap">
                    </l-tile-layer>
                    <l-marker 
                        v-for="marker, index in props.markers"
                        :lat-lng="marker.loc" :key="index">
                        <l-popup>
                            {{ marker.name }}
                        </l-popup>
                    </l-marker>
                </l-map>
            </div>
            
            <form @submit.prevent="addNewRestaurant()">

                <label class="px-2 py-2" for="coord">Koordinaatit </label><br />
                <input type="text" v-model="coord" id="coord" placeholder="Ei asetettu"/><br />

                <label class="px-2 py-2" for="name">Nimi </label><br />
                <input type="text" v-model="name" placeholder="Ravintolan nimi" /><br />
                
                <!-- Checkboxes for selection -->
                <label class="px-4 py-4" for="pizza">Pizza</label>
                <input type="checkbox" value="pizza" v-model="checkedTypes" />
                <label class="px-4 py-4" for="kebab">Kebab</label>
                <input type="checkbox" value="kebab" v-model="checkedTypes" />
                <label class="px-4 py-4" for="burger">Burger</label>
                <input type="checkbox" value="burger" v-model="checkedTypes" /><br />

                <button class="btn btn-secondary px-5" name="submit">Lis&auml;&auml; ravintola</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer, LMarker, LPopup} from "@vue-leaflet/vue-leaflet"

const props = defineProps({
    markers: Object
});

let name = ref('');
let coord = ref('');
const checkedTypes = ref([]);
const zoom = 15;

const emit = defineEmits('marker-add');

onMounted( () => {
    //Set zoom to view all markers
    // getExistingMarkers()
});

function addNewRestaurant() {
    const newMarker =
        {
            id: 3,
            loc: coord.value,
            name: name.value,
            type: checkedTypes.value
        };

    //TODO: Emit new marker to parent
    emit('marker-add', newMarker);
    //Add marker to local storage
    // const newValues = localStorage.getItem('markers') + coord;
    // localStorage.setItem('markers_new', JSON.stringify(newValues));
    
}

function addMarker(event){
    console.log(event.latlng.lat + ' ' + event.latlng.lng);
    coord = event.latlng.lat + ' ' + event.latlng.lng;
    name = 'Temp';
    

}


//TODO: Show existing markers on map when loaded for the fist time

// function getExistingMarkers(){
//     const temp = props.markers;
//     return temp;
// }


</script>