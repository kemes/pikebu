<template>
    <navBar />
    <addMarker :markers = "markers"/>
    <!-- <addMarker /> -->
    <navBarBottom />

</template>

<script setup>
import navBar from './components/NavBar.vue'
import navBarBottom from './components/NavBar_bottom.vue'
import addMarker from './views/AddMarkerToMap.vue'

const markers = localStorage.getItem('markers');

localStorage.setItem('markers', JSON.stringify(['60.3112373549543, 25.38869619369507','60.24289554387395, 24.978044629096985']));

// const markers = [
//     '60.3112373549543, 25.38869619369507',
//     '60.24289554387395, 24.978044629096985',
// ];

</script>