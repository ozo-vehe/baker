<script setup>
  import { reactive } from 'vue';
  import chef1 from '../assets/images/team-3.jpg';
  import chef2 from '../assets/images/team-1.jpg';
  import chef3 from '../assets/images/team-2.jpg';
  import chef4 from '../assets/images/team-4.jpg';

  const chefs = reactive([
    {firstname: "Chef", lastname: "1", position: "head baker", image: chef1},
    {firstname: "Chef", lastname: "2", position: "pastry chef", image: chef2 },
    {firstname: "Chef", lastname: "3", position: "pastry chef", image: chef3 },
    {firstname: "Chef", lastname: "4", position: "pastry chef", image: chef4 },
])
</script>

<template>
  <main class="px-24 pb-16">
    <h1 class="font-cassandra text-orange-400 text-center text-2xl mt-8 mb-2">Our Members</h1>
    <h3 class="pt-2 text-center text-4xl font-bold capitalize"> Meet the team behind Baker </h3>
     <p class="text-lg border w-550 text-center mx-auto">
      We are a group of passionate bakers, pastry chefs, and food enthusiasts 
      who are dedicated to creating delicious and beautiful baked goods for our customers.
    </p>
    <div class="pt-8 border w-full">
      <div v-for="chef in chefs">
        <div>
          <img :src="chef.image" :alt="chef.firstname"> 
        </div>
        <h2>{{ chef.firstname }}{{ chef.lastname }}</h2>
        <p>{{ chef.position }}</p>
       </div>
    </div>
  </main>
</template>