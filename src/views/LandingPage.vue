<script setup>
  import HeroSection from '../components/HeroSection.vue';
  import AboutSection from '../components/AboutSection.vue';
  import ProductSection from '../components/ProductSection.vue';
  import ServicesSection from '../components/ServicesSection.vue';
  import BakersSection from '../components/BakersSection.vue';
  import TestimonySection from '../components/TestimonySection.vue';
  import FooterSection from '../components/FooterSection.vue';
</script>

<template>
  <HeroSection />
  <AboutSection />
  <ProductSection />
  <ServicesSection />
  <BakersSection />
  <TestimonySection />
  <FooterSection />
</template>

<style scoped>
  @media screen and (max-width: 700px) {
    main {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
</style>
