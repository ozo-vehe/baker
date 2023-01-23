<script setup>
  import { reactive, ref, computed, Transition } from 'vue';
  import client1 from '../assets/images/testimonial-1.jpg';
  import client2 from '../assets/images/testimonial-2.jpg';
  import client3 from '../assets/images/testimonial-3.jpg';
  import client4 from '../assets/images/testimonial-4.jpg';
  import client5 from '../assets/images/testimonial-5.jpg';
  import { VueperSlides, VueperSlide} from 'vueperslides';
  import 'vueperslides/dist/vueperslides.css';
  
  const clients = reactive([
    {name: "Client 1", image: client1, testimony: "The bakery's warm and inviting atmosphere is always a pleasure to be in, and the delicious smell of fresh baked goods is always in the air. The breads are always fresh and baked to perfection, and the cakes and pastries are absolutely divine."},
    {name: "Client 2", image: client2, testimony: "The staff is always friendly and helpful, and they always make sure to go above and beyond to make my experience at the bakery as enjoyable as possible. I highly recommend Baker to anyone looking for delicious baked goods and great customer service."},
    {name: "Client 3", image: client3, testimony: "I have been a loyal customer of Baker bakery for years and I cannot recommend them enough. Their pastries are always fresh and delicious, and their cakes are truly works of art."},
    {name: "Client 4", image: client4, testimony: "The flavors are always spot on and the presentation is always stunning. If you are looking for a bakery that truly cares about their customers and their craft, look no further than Baker bakery."},
    {name: "Client 5", image: client5, testimony: "I am consistently impressed by the quality of their baked goods.  I highly recommend this bakery to anyone looking for delicious and high-quality baked goods."},
  ]);
</script>

<template>
  <main class="px-24 pb-16">
    <h1 class="font-cassandra text-orange-400 text-center text-2xl mt-8 mb-2">Client's Reviews</h1>
    <div class="relative border w-full h-300 overflow-hidden flex flex-wrap items-center justify-center">
      <vueper-slides
          class="border flex items-start justify-center gap-4"
          :visible-slides="3"
          slide-multiple
          :gap="3"
          :slide-ratio="1 / 4"
          :dragging-distance="200"
          :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
      <!-- <div
          class="absolute left-0 flex items-start justify-center gap-4"> -->
        <vueper-slide
          class="w-350 h-56 overflow-hidden flex flex-wrap items-start shadow rounded-lg"
          v-for="client in clients"
        >
          <div class="w-full pl-4 h-20 flex gap-x-2 items-center justify-start overflow-hidden">
            <img class="w-16 h-16 rounded-full" :src="client.image" />
            <h3 class="text-2xl font-bold">{{ client.name }}</h3>
          </div>
          <div class="w-full h-36 pl-4 pr-8">
            <p class="text-sm">"{{ client.testimony }}"</p>
          </div>
        </vueper-slide>
        <!-- </Flicking> -->
      </vueper-slides>
      <!-- <vueper-slides
          class="no-shadow"
          :visible-slides="3"
          slide-multiple
          :gap="3"
          :slide-ratio="1 / 4"
          :dragging-distance="200"
          :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
        <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" />
        </vueper-slides> -->
    </div>
  </main>
</template>

<style scoped>
</style>