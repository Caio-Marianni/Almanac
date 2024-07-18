<script setup>
import { RouterLink, RouterView } from "vue-router";
import NoiseFilter from "./components/NoiseFilter.vue";
import { ref } from "vue";
import FixedBackground from "./components/FixedBackground.vue";
import MobileNavigation from "./components/MobileNavigation.vue";

let opacity = ref(0);
const top = ref(0);

// Change opacity onScoll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  opacity.value = Math.min(1, (scrollY - 100) / (window.innerHeight / 3));
});
</script>

<template>
  <div class="overflow-hidden">
    <NoiseFilter />
    <FixedBackground />
    <!-- Navbar -->
    <header class="fixed z-30 w-screen h-16">
      <!-- Desktop Navigation -->
      <div class="absolute w-screen h-12 invisible md:visible z-10">
        <nav class="flex justify-center items-center text-redLight">
          <!-- Part 1 -->
          <div class="flex justify-around md:w-4/12">
            <RouterLink
              to="/about"
              class="relative text-lg lg:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >About us</RouterLink
            >
            <RouterLink
              to="/dates"
              class="relative text-lg lg:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >Dates</RouterLink
            >
            <RouterLink
              to="/releases"
              class="relative text-lg lg:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >Releases</RouterLink
            >
          </div>
          <!-- Logo -->
          <RouterLink
            to="/"
            class="mt-2 mb-2 w-9 cursor-pointer hover:scale-110 transition"
          >
            <svg
              version="1.1"
              id="Camada_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 325.5 437.2"
              xml:space="preserve"
            >
              <g>
                <path
                  class="fill-red"
                  d="M121.4,298c0.7,3.4,1.7,6.1,2.7,8.1c6.1-0.2,13.3,0,21.3,1.4c4.4,0.7,8.5,1.7,12.2,2.7c0.2-7,0.4-14,0.7-20.9
                c-12.5,0-25,0-37.5,0C120.7,291.5,120.7,294.5,121.4,298z"
                />
                <path
                  class="fill-red"
                  d="M123.6,264.1c-1,2.8-1.9,6.4-2.4,10.5c-0.3,2.7-0.4,5.2-0.3,7.4c12.4,0,24.8,0,37.1,0
                c0.1-7.3,0.2-14.6,0.3-21.9c-5,1.4-10.9,2.6-17.6,3.4C134.4,264.2,128.6,264.3,123.6,264.1z"
                />
                <path
                  class="fill-red"
                  d="M150.2,316.6c-5.2-0.7-7.6-1.8-12.5-2.7c-2.4-0.4-6.1-0.9-10.8-0.8c0.9,3.5,3.8,12.9,12.8,20.4
                c7.3,6.2,15,8,18.6,8.6c-0.1-8.4-0.2-16.8-0.3-25.2C156.3,317,153.5,317,150.2,316.6z"
                />
                <path
                  class="fill-red"
                  d="M125.6,257.4c5.1,0.7,9.1,0.4,11.8,0c3.7-0.6,5.5-1.4,10.1-2.4c4.4-0.9,8.1-1.2,10.5-1.4
                c0.1-8.3,0.2-16.6,0.3-24.9c-3.8,0.7-11.8,2.6-19.6,9C130.1,245,126.8,253.7,125.6,257.4z"
                />
                <path
                  class="fill-red"
                  d="M114.8,270.2c0.7-3.6,1.7-6.7,2.7-9.1c-7-3.8-14-7.6-20.9-11.5c-3,2.3-7.9,6.5-11.8,13.5
                c-4.3,7.6-5.2,14.7-5.4,18.6c11.6,0,23.2,0,34.8,0C113.9,278.7,114,274.7,114.8,270.2z"
                />
                <path
                  class="fill-red"
                  d="M125.6,242.9c2.8-4.5,5.9-8,8.5-10.5c-4.2,0.5-10.1,1.7-16.5,4.4c-6.2,2.6-10.9,5.8-14.2,8.5
              c5.5,3.1,11,6.3,16.5,9.5C121,251.4,122.8,247.2,125.6,242.9z"
                />
                <path
                  class="fill-red"
                  d="M119.1,315.6c-5.3,3.3-10.6,6.6-15.9,9.9c3.8,2.7,8.9,5.8,15.2,8.4c5.8,2.4,11.2,3.8,15.5,4.7
              c-3.4-3.9-7.1-8.7-10.5-14.5C121.7,321.1,120.3,318.3,119.1,315.6z"
                />
                <path
                  class="fill-red"
                  d="M209.2,271.9c0.7,3.8,0.7,7.2,0.6,9.8c11.5,0,23.1,0,34.6,0c-0.5-4.2-2-11.8-7.1-19.6
              c-3.6-5.6-7.8-9.2-10.8-11.5c-6.8,3.6-13.5,7.3-20.3,10.9C207.3,264.2,208.5,267.7,209.2,271.9z"
                />
                <path
                  class="fill-red"
                  d="M114.3,299c-0.7-3.8-0.7-7.2-0.6-9.8c-11.5,0-23.1,0-34.6,0c0.5,4.2,2,11.8,7.1,19.6
                c3.6,5.6,7.8,9.2,10.8,11.5c6.8-3.7,13.5-7.3,20.3-10.9C116.2,306.7,115,303.3,114.3,299z"
                />
                <path
                  class="fill-red"
                  d="M208.9,300.6c-0.7,3.6-1.7,6.7-2.7,9.1c7,3.8,14,7.7,21,11.5c3-2.3,7.9-6.5,11.8-13.5
                c4.3-7.6,5.2-14.7,5.4-18.6c-11.6,0-23.2,0-34.8,0C209.7,292.2,209.7,296.1,208.9,300.6z"
                />
                <path
                  class="fill-red"
                  d="M198,328c-2.8,4.5-5.9,8-8.5,10.5c4.2-0.5,10.1-1.7,16.6-4.4c6.2-2.6,11-5.8,14.2-8.5
                c-5.5-3.1-11-6.3-16.6-9.5C202.6,319.5,200.8,323.6,198,328z"
                />
                <path
                  class="fill-red"
                  d="M206.7,0h-88.1L0,437.2h97.3l10.9-54.9l110-0.7l10.2,55.5h97.1L206.7,0z M162.5,347.1
                c-48.6,0-87.9-27.6-87.9-61.5c0-34,39.4-61.5,87.9-61.5c48.6,0,87.9,27.6,87.9,61.5C250.4,319.6,211.1,347.1,162.5,347.1z"
                />
                <path
                  class="fill-red"
                  d="M186.2,313.5c-3.7,0.6-5.5,1.4-10.1,2.4c-4.4,0.9-8.1,1.2-10.5,1.4c-0.1,8.3-0.2,16.6-0.3,25
                c3.8-0.7,11.8-2.6,19.6-9c8.7-7.2,12-16,13.2-19.6C192.9,312.8,188.9,313.1,186.2,313.5z"
                />
                <path
                  class="fill-red"
                  d="M202.1,272.9c-0.7-3.4-1.7-6.1-2.7-8.1c-6.1,0.2-13.3,0-21.3-1.4c-4.4-0.7-8.5-1.7-12.2-2.7
                c-0.2,7-0.4,14-0.7,20.9c12.5,0,25,0,37.5,0C202.9,279.4,202.8,276.4,202.1,272.9z"
                />
                <path
                  class="fill-red"
                  d="M200.1,307c1-2.8,1.9-6.4,2.4-10.5c0.3-2.7,0.4-5.2,0.3-7.4c-12.4,0-24.8,0-37.2,0c-0.1,7.3-0.2,14.7-0.3,22
                c5-1.4,10.9-2.6,17.6-3.4C189.2,307,195.1,306.9,200.1,307z"
                />
                <path
                  class="fill-red"
                  d="M204.5,255.3c5.3-3.3,10.6-6.6,15.9-9.9c-3.8-2.7-8.9-5.8-15.2-8.4c-5.8-2.4-11.2-3.8-15.6-4.7
                c3.4,3.9,7.1,8.7,10.5,14.5C201.8,249.8,203.2,252.6,204.5,255.3z"
                />
                <path
                  class="fill-red"
                  d="M173.4,254.3c5.2,0.7,7.6,1.8,12.5,2.7c2.4,0.4,6.1,0.9,10.8,0.8c-0.9-3.5-3.8-12.9-12.8-20.4
                c-7.3-6.2-15-8-18.6-8.6c0.1,8.4,0.2,16.8,0.3,25.2C167.3,253.9,170,253.9,173.4,254.3z"
                />
              </g>
            </svg>
          </RouterLink>
          <!-- Part 2 -->
          <div class="flex justify-around md:w-4/12">
            <RouterLink
              to="/gallery"
              class="relative text-lg lg:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >Gallery</RouterLink
            >
            <RouterLink
              to="/merch"
              class="relative text-lg lg:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >Merch</RouterLink
            >
            <RouterLink
              to="/contact"
              class="relative text-lg lg:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >Contact</RouterLink
            >
          </div>
        </nav>
      </div>
      <!-- Mobile naviagtion -->
      <MobileNavigation />
      <!-- Background Black -->
      <div
        class="fixed inset-0 bg-redDark w-screen h-16 shadow-lg shadow-redShadow"
        :style="{ opacity: opacity }"
      ></div>
    </header>

    <RouterView />
  </div>
</template>
