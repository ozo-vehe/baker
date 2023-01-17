<script setup>
  import { RouterLink } from 'vue-router'
  import { reactive, ref } from 'vue';

  // Data
  const links = reactive([
    {link: '/home', name: 'home'},
    {link: '/about', name: 'about'},
    {link: '/services', name: 'services'},
    {link: '/products', name: 'products'},
    {link: '/contact', name: 'contact'},
  ]);
  let active = ref(false);
</script>

<template>
  <nav class="absolute w-full z-30 bg-gray-900/40 text-gray-200 flex justify-between items-center px-12 py-8">
    <RouterLink to="/home">
      <h1 class="text-orange-200 text-orange-400 text-4xl font-bold">Baker</h1>
    </RouterLink>
    <div>
      <ul class="flex gap-10">
        <li
          class="px-2 text-lg py-1 capitalize rounded active"
          v-for="link in links">
          <RouterLink :to="link.link"> {{ link.name }} </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  .active:hover {
    color: orange;
  }
</style>