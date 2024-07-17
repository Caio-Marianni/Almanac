<script setup>
  import ContactContainer from '@/components/ContactContainer.vue';
  import Footer from '@/components/Footer.vue';
import { ref } from 'vue'
</script>

<template>
  <div class="h-screen w-screen text-center flex justify-between flex-col bg-offBlack">
    <div class="relative mt-96 rounded-lg m-auto p-4 font-bold bg-black w-3/4 md:w-1/2 lg:w-1/4 h-28 text-xl text-white">
      <h1 class="pb-2">Receba nossa promolist</h1>
      <input class="p-1 rounded hover:border hover:border-red border transition" type="text" placeholder="endereço de email">
    </div>
    <ContactContainer />
    <Footer />
  </div>
</template>