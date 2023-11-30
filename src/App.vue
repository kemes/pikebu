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
        name: 'McDonalds - Tikkurila',
        type: ['burger']
    },
    {
        id: 3,
        loc: [60.29051467504654, 24.868289356403967],
        name: 'Limos',
        type: ['pizza']
    },
    {
        id: 4,
        loc: [60.268650863023844, 24.85219703914003],
        name: `Alby's`,
        type: ['pizza']
    },
    {
        id: 4,
        loc: [60.1955996, 24.765506],
        name: `The Chili's`,
        type: ['pizza','kebab','burger']
    },
    {
        id: 5,
        loc: [60.1696227,24.9411063],
        name: `Döner Harju`,
        type: ['kebab']
    },
];

function receiceNewMarker(resdata) {
    resdata.id=markers.length+1;
    markers.push(resdata);
    console.log(JSON.stringify(markers));

}

</script>