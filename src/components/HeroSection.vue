<script setup>
</script>

<template>
  <main class="min-h-screen text-white border border-red-900 overflow-hidden relative flex flex-wrap flex-col justify-center px-12">
    <img class="absolute top-0 left-0 w-full" src="../assets/images/carousel-1.jpg" alt="Carousel image">
    <h1 class="z-10 text-6xl my-4 font-bold text-orange-400">Baker</h1>
    <h3 class="z-10 text-4xl font-bold">We bake with passion</h3>
    <p class="z-10 font-bold">We offer from our oven to your table, freshly baked goods for every taste bud.</p>
  </main>
</template>

<style scoped>
  main::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #0000006c;
  }
</style>