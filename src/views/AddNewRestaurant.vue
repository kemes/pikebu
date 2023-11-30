<template>
    <div class="container-fluid mx-auto text-center overflow-scroll" style="padding-top: 80px; padding-bottom: 100px;">
        <div class="row">
            <h3 class="pruple-text-emphasis">Lis&auml;&auml; ravintola</h3>
            
            <div style="height:300px; width:100%">
                <l-map ref="map" v-model:zoom="zoom" :use-global-leaflet="false" :center="center"
                    @click="addTempMarker"
                    :options="{zoomControl:false}" >
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
                        <l-icon
                            :icon-anchor=[16,40]
                            :popup-anchor="[0,-40]"
                            :icon-url="getIcon(marker)" >
                        </l-icon>
                    </l-marker>
                    <!-- Temporary marker -->
                    <l-marker
                        v-if="coord.length != 0"
                        :lat-lng="coord">
                        <l-popup>
                            Temp Marker.
                        </l-popup>
                        <l-icon
                            :icon-anchor="[16,40]"
                            :popup-anchor="[0,-40]"
                            icon-url="./assets/pin_temp.svg" >
                        </l-icon>
                    </l-marker>
                </l-map>
            </div>
            
            <form @submit.prevent="addNewRestaurant()">

                <label class="px-2 py-2 text-uppercase" for="coord">Koordinaatit </label><br />
                <span>{{ coord }}</span><br />
                <!-- <input type="text" v-model="coord" id="coord" placeholder="Ei asetettu"  style="width: 100%;"/><br /> -->

                <label class="px-2 py-2 text-uppercase" for="name">Nimi </label><br />
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
import {LMap, LTileLayer, LMarker, LPopup, LIcon} from "@vue-leaflet/vue-leaflet";

const props = defineProps({
    markers: Object
});

let name = ref('');
let coord = ref([]);
let center = ref([60.3112373549543, 25.38869619369507]);
const checkedTypes = ref([]);
const zoom = 9;

const emit = defineEmits('marker-add');

function addNewRestaurant() {
    const newMarker =
        {
            loc: coord.value,
            name: name.value,
            type: checkedTypes.value
        };

    emit('marker-add', newMarker);

    //Empty values
    coord.value = [];
    name.value = '';
    checkedTypes.value = [];
}

function addTempMarker(e){
    coord.value = [e.latlng.lat, e.latlng.lng];
}

function getIcon(marker) {
    var icon_url = '';

    if(marker.type.length > 1) {
        icon_url = `./assets/pin_multi.svg`;
    } else {
        switch(marker.type[0]){
            case 'pizza':
                icon_url = `./assets/pin_pizza.svg`;
                break;
            case 'burger':
                icon_url = `./assets/pin_burger.svg`;
                break;
            case 'kebab':
                icon_url = `./assets/pin_kebab.svg`;
                break;

        }
    }
    
    return icon_url;
}

</script>