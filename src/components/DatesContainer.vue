<script setup>
  import { ref } from 'vue'
  import DateCard from './DateCard.vue'
</script>

<template>
    <div class="absolute -z-10 h-1/2 w-full bg-gradient-to-b from-offBlack from-0% to-90% to-none"></div>
    <div class=" flex flex-wrap h-auto px-7 py-10">
      <!-- Just Background -->
      <h1 class="w-screen text-center font-bold text-6xl mt-10 mb-20 text-redLight leading-snug z-20">Dates</h1>
      <DateCard />
    </div>
    <div class="absolute -z-10 -top-56 h-1/2 w-full bg-gradient-to-t from-offBlack from-0% to-50% to-red"></div>
</template>