<script setup>
  defineProps({
    videoSrc: String,
    class: String
  })
</script>

<template>
  <video
    :class="class"
    :src="videoSrc"
    autoplay
    loop
  >
  </video>
</template>