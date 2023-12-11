<template>
    <navBar />
    <addRestaurant :markers="markers" @marker-add="receiceNewMarker" v-if="markers"/>

    <!-- <div class="container" v-else>{{ 'Markers::' + markers }}</div> -->
    <!-- <navBarBottom /> -->
    
</template>

<script setup>
import { onMounted, ref } from 'vue'
import navBar from './components/NavBar.vue'
import navBarBottom from './components/NavBar_bottom.vue'
import addRestaurant from './views/AddNewRestaurant.vue'

// let markers = ref(null);
let markers = ref([
    {
        id: 1,
        name: "Box Cafe & Grill",
        loc: [60.3112373549543, 25.38869619369507],
        comment: null,
        date_updated: "2023-11-30T11:36:16.000Z",
        dynamic_location: 0,
        type: "['burger']"
    },
])

// onMounted(async () => {
//     markers.value = await getRestaurants();
// })

// async function getRestaurants(){
//     const data = await fetch('http://localhost:3000/restaurants')
//     const _data = data.json()
//     return _data
// }


function receiceNewMarker(resdata) {
    //TODO: Insert received marker into DB
    resdata.id=markers.length+1
    markers.push(resdata)
    console.log(JSON.stringify(markers))
}

</script>