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

let markers = ref(null);

onMounted(async () => {
    markers.value = await getRestaurants();
})

async function getRestaurants(){
    const data = await fetch('http://localhost:3000/restaurants')
    const _data = await data.json()
    const result = _data.map(row =>{
        return {
            id: row.id,
            name: row.name,
            loc: row.loc.split(',').map(coord => parseFloat(coord)),
            type: row.type.split(',')
        }
    })
    return result
}

async function receiceNewMarker(resdata) {
    await fetch('http://localhost:3000/restaurants', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(resdata)
    })
}

</script>