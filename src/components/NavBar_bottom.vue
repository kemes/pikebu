<template>
    <div>
        <nav class="navbar fixed-bottom navbar-expand-lg navbar-bg-color">
            <div class="container-fluid mx-auto">
                <div class="text-center">
                    <img class="py-1 px-4" src="../assets/list.svg" alt="feed_icon" @click="clicked"><br />
                    <span class="text-center">Feed</span>
                </div>
                <div class="text-center">
                    <img class="py-1 px-4" src="../assets/map.svg" alt="map_icon" @click="clicked"><br />
                    <span class="text-center">Map</span>
                </div>
                <div class="text-center">
                    <img class="py-1 px-4" src="../assets/search.svg" alt="search_icon" @click="clicked"><br />
                    <span class="text-center">Search</span>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>

const clicked = () => {
    console.log('menu click');
}

</script>