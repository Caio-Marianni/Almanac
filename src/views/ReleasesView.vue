<script setup>
import ContactContainer from "@/components/ContactContainer.vue";
import MusicsContainer from "@/components/MusicsContainer.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
</script>

<template>
  <div class="bg-offBlack h-auto pt-20 lg:pt-40">
    <h1
      class="w-screen text-center font-bold text-6xl mt-10 mb-20 text-redLight leading-snug z-20"
    >
      Sets
    </h1>
    <div class="flex justify-center flex-row flex-wrap gap-6">

    
    <iframe
    class="rounded-lg relative"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/X6-xqr0Pnfk?si=1yIWiRs1e7fhoTn3"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
    <iframe class="rounded-lg relative" width="560" height="315" src="https://www.youtube.com/embed/JwHYl21yXww?si=DqEeh-ibdNF0eMly" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe class="rounded-lg relative" width="560" height="315" src="https://www.youtube.com/embed/pEAR-St7Nd4?si=Ul3OrqZqTa8Vmidg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
    <h1
      class="w-screen flex justify-center items-center text-center font-bold text-6xl mt-10 mb-20 text-redLight leading-snug z-20"
    >
      Releases
    </h1>
    <MusicsContainer />
  </div>
  <ContactContainer />
  <Footer />
</template>
