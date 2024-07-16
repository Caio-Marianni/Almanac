<script setup>
import { ref } from "vue";
import eventsData from "../events.json"

const events = ref(eventsData);

</script>

<template>
  <!-- DIVS -->
  <div
    v-for="event in events"
    :keys="event.id"
    class="flex flex-wrap justify-evenly items-center h-24 w-screen border-t-2 border-b-2 hover:bg-offBlack hover:bg-opacity-10 transition z-20"
  >
    <!-- 00/00 -->
    <div class="flex flex-col w-2/12 text-center">
      <p class="text-white font-bold p-1 border border-offWhite bg-red500">
        {{ event.month }}
      </p>
      <p class="bg-white font-bold p-1">{{ event.year}}</p>
    </div>
    <!-- Info -->
    <div class="flex flex-wrap w-6/12">
      <h3 class="text-redLight font-bold text-xl w-full pb-1">
        {{ event.name }}
      </h3>
      <svg
        fill="#631f1f"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="25px"
        height="25px"
        viewBox="0 0 395.71 395.71"
        xml:space="preserve"
      >
        <g>
          <path
            d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
          />
        </g>
      </svg>
      <p class="text-redLight font-light pl-1">{{  event.location }}</p>
    </div>
    <!-- Button -->
    <div class="flex items w-2/12 border-2 border-black hover:border-redLight transition">
      <a href="" class="p-4 w-fill font-bold text-offWhite transition">+Info</a>
    </div>
  <!-- DIVS -->
  </div>
</template>
