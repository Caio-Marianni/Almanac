<!-- SUPOSTAMENTE ERA PRA FUNCIONNAR< MAS ELE NAO CONSEGUE ANEXAR A IMAGEM< ENTAO VAMOS DA MODA ANTIGA MSM -->

<!-- <script setup>
import { ref } from "vue";
import musicData from "../musics.json";

const musics = ref(musicData);
</script>

<template>
  <div
    v-for="music in musics"
    :key="music.id"
    class="rounded p-4 bg-red500 w-5/12 md:w-3/12 h-auto z-20"
  >
    <img :src="`../assets/images/${music.cover}.png`" alt="Music_Cover" />
    <h2 class="text-redLight font-semibold text-xl">{{ music.name }}</h2>
    <p class="text-txt500 font-light text-sm">{{ music.artists }}</p>
  </div>
</template> -->

<script setup></script>

<template>
  <div class="rounded p-4 bg-red500 hover:scale-105 transition w-5/12 md:w-3/12 h-auto z-20">
    <img src="../assets/images/takeOver.png" alt="Music_Cover" />
    <h2 class="text-redLight font-semibold text-lg pt-3">Take Over</h2>
    <p class="text-txt500 font-light text-sm">Almanac</p>
  </div>
  <div class="rounded p-4 bg-red500 hover:scale-105 w-5/12 md:w-3/12 z-20 transition">
    <img src="../assets/images/melhoresBailes.png" alt="Music_Cover" />
    <h2 class="text-redLight font-semibold text-lg pt-3">Melhores Bailes do Mundo</h2>
    <p class="text-txt500 font-light text-sm">Almanac, Watila Gyn, Danntz!</p>
  </div>
  <div class="rounded p-4 bg-red500 hover:scale-105 w-5/12 md:w-3/12 h-auto z-20 transition">
    <img src="../assets/images/allIWant.png" alt="Music_Cover" />
    <h2 class="text-redLight font-semibold text-lg pt-3">All I Want</h2>
    <p class="text-txt500 font-light text-sm">Almanac</p>
  </div>
  <div class="rounded p-4 bg-red500 hover:scale-105 w-5/12 md:w-3/12 h-auto z-20">
    <img src="../assets/images/miniGame.png" alt="Music_Cover" />
    <h2 class="text-redLight font-semibold text-lg pt-3">Mini Game</h2>
    <p class="text-txt500 font-light text-sm">Almanac</p>
  </div>
  <div class="rounded p-4 bg-red500 hover:scale-105 w-5/12 md:w-3/12 h-auto z-20 transition">
    <img src="../assets/images/lasChicas.png" alt="Music_Cover" />
    <h2 class="text-redLight font-semibold text-lg pt-3">Las Chicas</h2>
    <p class="text-txt500 font-light text-sm">Almanac, Jord</p>
  </div>
</template>
