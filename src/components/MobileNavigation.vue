<script>
export default {
  methods: {
    rotateMenu() {
      const bar1 = this.$refs.bar1;
      const bar2 = this.$refs.bar2;
      const bar3 = this.$refs.bar3;
      const menu = this.$refs.menu;
      bar1.classList.toggle("-rotate-45");
      bar1.classList.toggle("translate-y-4");
      bar2.classList.toggle("opacity-0");
      bar3.classList.toggle("rotate-45");
      bar3.classList.toggle("-translate-y-4");
      menu.classList.toggle("top-1");
    },
  },
};
</script>
<template>
  <div
        class="absolute flex px-7 items-center justify-between w-screen h-16 top-auto bottom-auto z-10 md:invisible"
      >
        <!-- Logo -->
        <RouterLink to="/">
          <svg
            class="flex w-28"
            version="1.1"
            id="Camada_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1731.1 482.5"
            style="enable-background: new 0 0 1731.1 482.5"
            xml:space="preserve"
          >
            <g>
              <path
                class="fill-red"
                d="M822.2,298c0.7,3.4,1.7,6.1,2.7,8.1c6.1-0.2,13.3,0,21.3,1.4c4.4,0.7,8.5,1.7,12.2,2.7c0.2-7,0.4-14,0.7-20.9
            c-12.5,0-25,0-37.5,0C821.4,291.5,821.5,294.5,822.2,298z"
              />
              <path
                class="fill-red"
                d="M824.3,264.1c-1,2.8-1.9,6.4-2.4,10.5c-0.3,2.7-0.4,5.2-0.3,7.4c12.4,0,24.8,0,37.1,0
            c0.1-7.3,0.2-14.6,0.3-21.9c-5,1.4-10.9,2.6-17.6,3.4C835.1,264.2,829.3,264.3,824.3,264.1z"
              />
              <path
                class="fill-red"
                d="M850.9,316.6c-5.2-0.7-7.6-1.8-12.5-2.7c-2.4-0.4-6.1-0.9-10.8-0.8c0.9,3.5,3.8,12.9,12.8,20.4
            c7.3,6.2,15,8,18.6,8.6c-0.1-8.4-0.2-16.8-0.3-25.2C857,317,854.2,317,850.9,316.6z"
              />
              <path
                class="fill-red"
                d="M826.4,257.4c5.1,0.7,9.1,0.4,11.8,0c3.7-0.6,5.5-1.4,10.1-2.4c4.4-0.9,8.1-1.2,10.5-1.4
            c0.1-8.3,0.2-16.6,0.3-24.9c-3.8,0.7-11.8,2.6-19.6,9C830.9,245,827.5,253.7,826.4,257.4z"
              />
              <path
                class="fill-red"
                d="M815.5,270.2c0.7-3.6,1.7-6.7,2.7-9.1c-7-3.8-14-7.6-20.9-11.5c-3,2.3-7.9,6.5-11.8,13.5
            c-4.3,7.6-5.2,14.7-5.4,18.6c11.6,0,23.2,0,34.8,0C814.7,278.7,814.7,274.7,815.5,270.2z"
              />
              <path
                class="fill-red"
                d="M826.4,242.9c2.8-4.5,5.9-8,8.5-10.5c-4.2,0.5-10.1,1.7-16.5,4.4c-6.2,2.6-10.9,5.8-14.2,8.5
            c5.5,3.1,11,6.3,16.5,9.5C821.8,251.4,823.6,247.2,826.4,242.9z"
              />
              <path
                class="fill-red"
                d="M819.8,315.6c-5.3,3.3-10.6,6.6-15.9,9.9c3.8,2.7,8.9,5.8,15.2,8.4c5.8,2.4,11.2,3.8,15.5,4.7
            c-3.4-3.9-7.1-8.7-10.5-14.5C822.5,321.1,821,318.3,819.8,315.6z"
              />
              <path
                class="fill-red"
                d="M909.9,271.9c0.7,3.8,0.7,7.2,0.6,9.8c11.5,0,23.1,0,34.6,0c-0.5-4.2-2-11.8-7.1-19.6
              c-3.6-5.6-7.8-9.2-10.8-11.5c-6.8,3.6-13.5,7.3-20.3,10.9C908,264.2,909.2,267.7,909.9,271.9z"
              />
              <path
                class="fill-red"
                d="M815.1,299c-0.7-3.8-0.7-7.2-0.6-9.8c-11.5,0-23.1,0-34.6,0c0.5,4.2,2,11.8,7.1,19.6
              c3.6,5.6,7.8,9.2,10.8,11.5c6.8-3.7,13.5-7.3,20.3-10.9C817,306.7,815.8,303.3,815.1,299z"
              />
              <path
                class="fill-red"
                d="M909.6,300.6c-0.7,3.6-1.7,6.7-2.7,9.1c7,3.8,14,7.7,21,11.5c3-2.3,7.9-6.5,11.8-13.5
              c4.3-7.6,5.2-14.7,5.4-18.6c-11.6,0-23.2,0-34.8,0C910.5,292.2,910.4,296.1,909.6,300.6z"
              />
              <path
                class="fill-red"
                d="M898.8,328c-2.8,4.5-5.9,8-8.5,10.5c4.2-0.5,10.1-1.7,16.6-4.4c6.2-2.6,11-5.8,14.2-8.5
              c-5.5-3.1-11-6.3-16.6-9.5C903.4,319.5,901.5,323.6,898.8,328z"
              />
              <path
                class="fill-red"
                d="M907.5,0h-88.1L700.8,437.2h97.3l10.9-54.9l110-0.7l10.2,55.5h97.1L907.5,0z M863.3,347.1
              c-48.6,0-87.9-27.6-87.9-61.5c0-34,39.4-61.5,87.9-61.5s87.9,27.6,87.9,61.5C951.2,319.6,911.8,347.1,863.3,347.1z"
              />
              <path
                class="fill-red"
                d="M887,313.5c-3.7,0.6-5.5,1.4-10.1,2.4c-4.4,0.9-8.1,1.2-10.5,1.4c-0.1,8.3-0.2,16.6-0.3,25
              c3.8-0.7,11.8-2.6,19.6-9c8.7-7.2,12-16,13.2-19.6C893.7,312.8,889.7,313.1,887,313.5z"
              />
              <path
                class="fill-red"
                d="M902.8,272.9c-0.7-3.4-1.7-6.1-2.7-8.1c-6.1,0.2-13.3,0-21.3-1.4c-4.4-0.7-8.5-1.7-12.2-2.7
              c-0.2,7-0.4,14-0.7,20.9c12.5,0,25,0,37.5,0C903.6,279.4,903.5,276.4,902.8,272.9z"
              />
              <path
                class="fill-red"
                d="M900.8,307c1-2.8,1.9-6.4,2.4-10.5c0.3-2.7,0.4-5.2,0.3-7.4c-12.4,0-24.8,0-37.2,0c-0.1,7.3-0.2,14.7-0.3,22
              c5-1.4,10.9-2.6,17.6-3.4C890,307,895.8,306.9,900.8,307z"
              />
              <path
                class="fill-red"
                d="M905.2,255.3c5.3-3.3,10.6-6.6,15.9-9.9c-3.8-2.7-8.9-5.8-15.2-8.4c-5.8-2.4-11.2-3.8-15.6-4.7
              c3.4,3.9,7.1,8.7,10.5,14.5C902.5,249.8,904,252.6,905.2,255.3z"
              />
              <path
                class="fill-red"
                d="M874.1,254.3c5.2,0.7,7.6,1.8,12.5,2.7c2.4,0.4,6.1,0.9,10.8,0.8c-0.9-3.5-3.8-12.9-12.8-20.4
              c-7.3-6.2-15-8-18.6-8.6c0.1,8.4,0.2,16.8,0.3,25.2C868,253.9,870.8,253.9,874.1,254.3z"
              />
            </g>
            <polygon
              class="fill-red"
              points="296.2,265.7 296.2,14.5 389.1,14.5 389.1,369.8 508.7,369.8 508.7,445.3 346.1,451.1 "
            />
            <polygon
              class="fill-red"
              points="419.3,338.5 508.7,338.5 508.7,232.8 579.5,405.8 652.7,228.7 652.7,437.2 675.9,437.2 739.8,199.1 
            739.8,14.5 639.9,14.5 579.5,184 514.5,14.5 419.3,14.5 "
            />
            <path
              class="fill-red"
              d="M1077.7,232.8l84.8,210.2h41.8l54.6-214.2V14.5h-84.8v234l-96.4-234h-90.6v181.2l60.4,241.5
            c10.1-0.4,20.1-0.8,30.2-1.1C1077.7,368.3,1077.7,300.6,1077.7,232.8z"
            />
            <path
              class="fill-red"
              d="M115,14.5L0,482.5l96.4-8.1l9.3-61.5l102.2-5.8l10.5,53.4l96.4-5.8l-115-440.1H115V14.5z M125.5,327.6
            l34.8-143.5l34.8,143L125.5,327.6z"
            />
            <path
              class="fill-red"
              d="M1558.8,468.6l-70.1-287.9l1.2-77.8c20.9-47.8,67.7-79.4,119.7-80.7c50.7-1.3,98.1,26.5,122.1,71.5l-0.6,41.8
          l-78,11.6c0.9-29.3-20.9-51-42.2-50.6c-14.9,0.3-29.2,11.3-36.4,27.3l-3.7,252c4.7,16.4,18.7,28.5,35.5,30.7s33.3-5.8,42.1-20.3
          l0.7-50.4l79.1-5.1l-1.4,91.5c-5.2,7.4-40.6,56-101.9,60C1594.9,484.3,1571.2,474.8,1558.8,468.6z"
            />
            <path
              class="fill-red"
              d="M1427.3,34.6h-85.9l-110.7,416.9l88.8,2.8l12.4-48.3h101.2l13.9,54.7l87.1,5.8L1427.3,34.6z M1351.8,325
          l30.6-145.2l34.5,150.2L1351.8,325z"
            />
          </svg>
        </RouterLink>
      </div>
  <div
    @click="rotateMenu"
    class="cursor-pointer flex flex-col gap-2 justify-center items-center absolute z-40 top-3 right-12"
  >
    <div
      ref="bar1"
      class="h-2 w-10 bg-red rounded-full transition duration-300 ease-in-out transform"
    ></div>
    <div
      ref="bar2"
      class="h-2 w-10 bg-red rounded-full transition duration-200 ease-in-out transform rotate-0"
    ></div>
    <div
      ref="bar3"
      class="h-2 w-10 bg-red rounded-full transition duration-300 ease-in-out transform"
    ></div>
  </div>
        <!-- Navigation pages -->
      <div ref="menu" class="-top-3/4 left-0 pt-16 -mt-1 fixed transition-all duration-500 flex flex-col items-center cursor-pointer bg-black800" >
      <RouterLink to="/about" class="transition-all w-screen text-center p-8 border-b-2 border-t-4 hover:text-white">About</RouterLink>
      <RouterLink to="/dates" class="transition-all w-screen text-center p-8 border-b-2 hover:text-white">Dates</RouterLink>
      <RouterLink to="/releases" class="transition-all w-screen text-center p-8 border-b-2 hover:text-white">Releases</RouterLink>
      <RouterLink to="/gallery" class="transition-all w-screen text-center p-8 border-b-2 hover:text-white">Gallery</RouterLink>
      <RouterLink to="/merch" class="transition-all w-screen text-center p-8 border-b-2 hover:text-white">Merch</RouterLink>
      <RouterLink to="/contact" class="transition-all w-screen text-center p-8 border-b-2 hover:text-white">Contact</RouterLink>
    </div>
</template>
