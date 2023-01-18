<script setup>
</script>

<template>
  <main class="px-24 mb-16">
    <h1 class="text-center text-2xl mt-8 mb-2">About us</h1>
    <h3 class="text-center text-6xl font-bold capitalize mb-32">Welcome to baker</h3>
    <div class="flex flex-wrap items-start gap-x-4 gap-y-32 justify-between">
      <div class="aboutImage w-350 relative border rounded h-400 ml-16 p-16">
        <!-- <video class="h-full" src="../assets/videos/about_section.mp4" autoplay loop></video> -->
        <img class="w-60 h-70 absolute -top-10 -left-16 rounded-lg" src="../assets/images/about-1.jpg" alt="About us">
        <img class="w-60 h-70 absolute -right-24 top-44 rounded-lg" src="../assets/images/about-2.jpg" alt="About us">
      </div>
      
      <div class="w-550">
        <h2 class="text-4xl font-bold mb-4">We bake every item from the core of our hearts</h2>
        <p class="text-lg">
          Welcome to our bakery! We are a family-owned and operated business that has been serving the community for over 20 years. 
          We take pride in using only the freshest and highest quality ingredients in all of our baked goods. From our flaky croissants to our moist cakes, 
          each item is made from scratch and with love. We offer a wide variety of breads, pastries, and desserts for every occasion. 
          Our bakery also specializes in custom orders, so whether it's a birthday cake or wedding cake, we will work with you to create the perfect treat for your special event. 
          Thank you for choosing our bakery and we can't wait to serve you!
        </p>
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