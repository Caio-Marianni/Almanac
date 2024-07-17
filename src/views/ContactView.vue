<script setup>
  import ContactContainer from '@/components/ContactContainer.vue';
  import Footer from '@/components/Footer.vue';
import { ref } from 'vue'
</script>

<template>
  <div class="h-screen w-screen text-center flex justify-between flex-col bg-offBlack">
    <div class="relative mt-96 rounded-xl m-auto p-2 font-bold bg-black w-1/4 h-20 text-xl text-white">
      <h1>Receba nossa promolist</h1>
      <input type="text">
    </div>
    <ContactContainer />
    <Footer />
  </div>
</template>