<script setup>
</script>

<template>
  <main class="px-24 pb-16">
    <h3 class="font-cassandra text-orange-400 text-center text-2xl mt-8 mb-2">Our Services</h3>
    <div class="flex flex-wrap gap-x-16 gap-y-8 justify-center items-center">
      <div class="w-550 box-border">
        <h3 class="pt-4 text-3xl font-bold capitalize">What do we offer to our customers</h3>
        <p class="text-lg pt-2 mb-8">
          At our bakery, we take pride in creating delicious and beautiful baked goods using only the freshest ingredients.
          Our skilled bakers work tirelessly to produce an array of delectable treats, from classic pastries to unique and innovative desserts.
          We offer a wide variety of baked goods, including cakes, cookies, breads, pastries, and more.
          Whether you're looking for a special occasion cake or just a tasty treat, we have something for everyone.
        </p>
        <div class="flex flex-wrap gap-y-8 gap-x-8 justify-center">
          <div class="w-60 shadow p-4 rounded-lg">
            <h3 class="font-cassandra text-orange-400 underline decoration-2 underline-offset-4">Quality Products</h3>
            <p class="pt-2">We offer the best products using the freshest ingredients</p>
          </div>
          <div class="w-60 p-4 shadow rounded-lg">
            <h3 class="font-cassandra text-orange-400 underline decoration-2 underline-offset-4">Custom Products</h3>
            <p class="pt-2">We offer the best products using the freshest ingredients</p>
          </div>
          <div class="w-60 p-4 shadow rounded-lg">
            <h3 class="text-orange-400 font-cassandra underline decoration-2 underline-offset-4">Online Order</h3>
            <p class="pt-2">We offer the best products using the freshest ingredients</p>
          </div>
          <div class="w-60 p-4 shadow rounded-lg">
            <h3 class="text-orange-400 font-cassandra underline decoration-2 underline-offset-4">Home Delivery</h3>
            <p class="pt-2">We offer the best products using the freshest ingredients</p>
          </div>
        </div>
      </div>

      <div class="w-400 h-450 rounded-lg shadow overflow-hidden">
        <!-- <div class="aboutImage w-350 relative border rounded h-400 p-16">
          <img class="w-64 h-70 absolute -bottom-32 -left-24 rounded-lg" src="../assets/images/services_1.jpg" alt="About us">
          <img class="w-64 h-70 absolute -right-24 bottom-32 rounded-lg" src="../assets/images/services_2.jpg" alt="About us">
        </div> -->
        <img class="h-full w-full object-cover" src="../assets/images/services_1.jpg" alt="Services">
      </div>
    </div>
  </main>
</template>

<style scoped>
  .aboutImage {
    background-color: #eecd9152;
  }
  .aboutImage::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 85%;
    height: 85%;
    border-radius: inherit;
    margin: auto;
    background-color: #f5b338a9;
  }
</style>