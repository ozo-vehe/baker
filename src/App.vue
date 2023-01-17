<script setup>
import { RouterView } from 'vue-router';
import NavBarSection from './components/NavBarSection.vue';
</script>

<template>
  <main class="relative">
    <NavBarSection/>
    <RouterView />
  </main>
  
</template>
