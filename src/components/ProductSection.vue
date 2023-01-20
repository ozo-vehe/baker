<script setup>
  import { reactive, ref, computed } from 'vue';
  import image1 from '../assets/images/pexels-abhinav-goswami-291528.jpg'
  import image2 from '../assets/images/pexels-jamin-djuang-1236680.jpg'
  import image3 from '../assets/images/pexels-leonardo-luz-14000578.jpg'
  import image4 from '../assets/images/pexels-tran-564883.jpg'

  const cakeCategories = reactive(["all", "birthday", "wedding", "custom"])
  const category = ref("all")
  const cakes = reactive([
    { name: "Cake Sample 1", image: image1, price: 3, description: "Description of cake sample one", category: ["all", "birthday"]},
    { name: "Cake Sample 2", image: image2, price: 3, description: "Description of cake sample two", category: ["all", "custom"]},
    { name: "Cake Sample 3", image: image3, price: 3, description: "Description of cake sample three", category: ["all", "custom"]},
    { name: "Cake Sample 4", image: image4, price: 3, description: "Description of cake sample four", category: ["all", "wedding"]},
  ])

  console.log(cakes);
  // Functions/Methods
  const changeCategory = (cakeCategory) => {
    category.value = cakeCategory
  }
</script>

<template>
  <main class="px-24 my-36">
    <h1 class="font-cassandra text-orange-400 text-center text-2xl mt-8 mb-2">Menu & Pricing</h1>
    <h3 class="text-center text-6xl font-bold uppercase mb-16">Explore our cakes</h3>
    
    <div class="cakeCategories flex flex-wrap items-center justify-center gap-x-8 gap-y-2 my-8 mb-16">
      <p
        :class="{active: cakeCategory == category}"
        class="cursor-pointer px-4 py-2 border border-orange-400 text-orange-400 rounded-md transition-all"
        @click="changeCategory(cakeCategory)"
        v-for="(cakeCategory, index) in cakeCategories"
        :key="index"
      >
        {{ cakeCategory.toUpperCase() }}
      </p>
    </div>

    <div class="w-full box-border flex flex-wrap justify-center gap-x-16 gap-y-8">
      <template
        v-for="cake in cakes"
      >
        <div v-if="cake.category.includes(category)" class="overflow-hidden shadow rounded-lg box-border w-300 h-400">
          <div class="cakeImage w-full h-2/3 border overflow-hidden">
            <img class="w-full h-full" :src="cake.image" alt="Cake Image">
          </div>
          <div class="relative w-full aboutCake px-4 pt-2">
            <h3 class="text-2xl flex items-center justify-between mb-4">
              <span class="font-bold">{{ cake.name }}</span>
              <span class="text-orange-400 font-bold text-4xl">${{ cake.price }}</span>
            </h3>
            <p class="text-lg">{{ cake.description }}</p>
          </div>
        </div>
      </template>
    </div>
  </main>
</template>

<style scoped>
  .active {
    background-color: #f97316;
    color: #fff;
  }
</style>