<script setup>
  import { reactive, computed } from 'vue';
  import chef1 from '../assets/images/team-3.jpg';
  import chef2 from '../assets/images/team-1.jpg';
  import chef3 from '../assets/images/team-2.jpg';
  import chef4 from '../assets/images/team-4.jpg';

  // Data
  const chefs = reactive([
    {firstname: "Chef", lastname: "1", position: "head baker", image: chef1},
    {firstname: "Chef", lastname: "2", position: "pastry chef", image: chef2 },
    {firstname: "Chef", lastname: "3", position: "pastry chef", image: chef3 },
    {firstname: "Chef", lastname: "4", position: "pastry chef", image: chef4 },
  ])

// Computed Porperties
  const headChef = chefs.filter((chef) => {
    return chef.position === "head baker";
  });
  const pastryChefs = chefs.filter((chef) => {
    return chef.position !== "head baker";
  })
  console.log(pastryChefs)
</script>

<template>
  <main class="px-24 pb-16">
    <h1 class="font-cassandra text-orange-400 text-center text-2xl mt-8 mb-2">Our Members</h1>
    <h3 class="pt-2 text-center text-4xl font-bold capitalize"> Meet the team behind Baker </h3>
    <p class="text-lg px-4 text-center mx-auto">
      We are a group of passionate bakers, pastry chefs, and food enthusiasts 
      who are dedicated to creating delicious and beautiful baked goods for our customers.
    </p>
    <div class="pt-8 flex flex-wrap gap-x-8 gap-y-8 items-start justify-center w-full">
      <div class="w-full flex items-center justify-center mb-4">
        <div class="w-350 box-border rounded-lg overflow-hidden shadow h-400 flex flex-col gap-y-2 text-center" v-for="chef in headChef">
          <div class="w-full h-80 overflow-hidden">
            <img class="w-full h-full object-cover" :src="chef.image" :alt="chef.firstname"> 
          </div>
          <h2 class="text-2xl font-bold">{{ chef.firstname }} {{ chef.lastname }}</h2>
          <p class="box-border capitalize text-lg pb-4">{{ chef.position }}</p>
        </div>  
      </div>

      <div class="w-350 box-border rounded-lg overflow-hidden shadow h-400 flex flex-col gap-y-2 text-center" v-for="chef in pastryChefs">
        <div class="w-full h-80 overflow-hidden">
          <img class="w-full h-full object-cover" :src="chef.image" :alt="chef.firstname"> 
        </div>
        <h2 class="text-2xl font-bold">{{ chef.firstname }} {{ chef.lastname }}</h2>
        <p class="box-border capitalize text-lg pb-4">{{ chef.position }}</p>
      </div>
    </div>
  </main>
</template>