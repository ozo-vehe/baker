<script setup>
  import { reactive, ref } from 'vue';
  import image1 from '../assets/images/pexels-abhinav-goswami-291528.jpg'
  import image2 from '../assets/images/pexels-jamin-djuang-1236680.jpg'
  import image3 from '../assets/images/pexels-leonardo-luz-14000578.jpg'
  import image4 from '../assets/images/pexels-tran-564883.jpg'

  const cakeCategories = reactive(["all", "birthday", "wedding", "custom"])
  const category = ref("all")
  const cakes = reactive([
    { name: "Cake Sample 1", image: image1, price: 3, description: "Description of cake sample one"},
    { name: "Cake Sample 2", image: image2, price: 3, description: "Description of cake sample two"},
    { name: "Cake Sample 3", image: image3, price: 3, description: "Description of cake sample three"},
    { name: "Cake Sample 4", image: image4, price: 3, description: "Description of cake sample four"},
  ])
</script>

<template>
  <main class="px-24 my-36">
    <h1 class="text-center text-2xl mt-8 mb-2">Menu & Pricing</h1>
    <h3 class="text-center text-6xl font-bold uppercase mb-32">Explore our cakes</h3>
    
    <div class="cakeCategories my-8">
      <p @click="changeCategory" v-for="(category, index) in cakeCategories" :key="index">{{ category.toUpperCase() }}</p>
    </div>

    <div class="flex flex-wrap justify-center gap-x-16 gap-y-8">
      <div v-for="cake in cakes" class="overflow-hidden shadow rounded-lg box-border flex w-500 h-60">
        <div class="cakeImage w-2/3 h-full border overflow-hidden">
          <img class="h-full" :src="cake.image" alt="Cake Image">
        </div>
        <div class="relative aboutCake px-4 py-8 w-2/3">
          <h3 class="text-2xl font-bold mb-4">{{ cake.name }}</h3>
          <p class="text-xl">{{ cake.description }}</p>
          <p class="absolute bottom-4 text-orange-500 text-5xl font-bold">${{ cake.price }}</p>
        </div>
      </div>
    </div>
  </main>
</template>