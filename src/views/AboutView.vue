<script setup>
  import { ref } from 'vue'
  import About from '@/components/About.vue';
  import ContactContainer from '@/components/ContactContainer.vue';
  import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="bg-offBlack h-auto px-0 pt-20">
    <About />
    <div class="flex justify-around lg:px-40">
      <img class="h-60 md:h-80 rounded border-2 border-redDark" src="../assets/images/lester.webp" alt="">        
      <img class="h-60 md:h-80 rounded border-2 border-redDark" src="../assets/images/dave.webp" alt="">        
    </div>
  </div>
  <ContactContainer />
  <Footer />
</template>