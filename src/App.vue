<template>
    <navBar />
    <addRestaurant :markers="markers" @marker-add="receiceNewMarker"/>
    <navBarBottom />

</template>

<script setup>
import navBar from './components/NavBar.vue'
import navBarBottom from './components/NavBar_bottom.vue'
import addRestaurant from './views/AddNewRestaurant.vue'

// const markers = localStorage.getItem('markers');

// localStorage.setItem('markers', JSON.stringify(['60.3112373549543, 25.38869619369507','60.24289554387395, 24.978044629096985']));

const markers = [
    {
        id: 1,
        loc: [60.3112373549543, 25.38869619369507],
        name: 'Box Cafe & Grill',
        type: ['burger']
    },
    {
        id: 2,
        loc: [60.24289554387395, 24.978044629096985],
        name: 'Mc Donalds - Tikkurila',
        type: ['burger']
    },
];

function receiceNewMarker(resdata) {
    resdata.id=markers.length+1;
    markers.unshift(resdata);
    console.log(JSON.stringify(markers));

}

</script>