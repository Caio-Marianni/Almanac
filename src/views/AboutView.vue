<script setup>
  import { ref } from 'vue'
  import About from '@/components/About.vue';
  import ContactContainer from '@/components/ContactContainer.vue';
  import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="bg-offBlack h-auto p-20 pt-20">
    <About />
    <div class="flex justify-between px-80">
      <img class="h-80 rounded border-2 border-redDark" src="../assets/images/lester.webp" alt="">        
      <img class="h-80 rounded border-2 border-redDark" src="../assets/images/dave.webp" alt="">        
    </div>
  </div>
  <ContactContainer />
  <Footer />
</template>