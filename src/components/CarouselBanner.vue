<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)
const totalSlides = 3

function goToSlide(index) {
  currentSlide.value = index
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}
</script>

<template>
  <div class="relative w-full rounded-box mb-8 overflow-hidden" style="height: 320px;">
    <div class="flex transition-transform duration-500 h-full" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="w-full flex-shrink-0 relative">
        <img
          src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/57b88b0d-b972-41e6-abbd-e56136560c52/AIR+MAX+270+PREMIUM.png"
          class="w-full h-full object-cover"
          alt="New Season Sneakers"
        />
        <div class="absolute inset-0 flex items-center justify-center bg-black/40">
          <div class="text-center text-white">
            <h2 class="text-4xl font-bold mb-2">New Season Arrivals</h2>
            <p class="text-lg">Discover the latest styles</p>
          </div>
        </div>
      </div>

      <div class="w-full flex-shrink-0 relative">
        <img
          src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/94cef7bd-f891-443a-81fe-48c5d81682ff/NIKE+AIR+MAX+PLUS.png"
          class="w-full h-full object-cover"
          alt="Summer Sale"
        />
        <div class="absolute inset-0 flex items-center justify-center bg-black/40">
          <div class="text-center text-white">
            <h2 class="text-4xl font-bold mb-2">Summer Sale</h2>
            <p class="text-lg">Up to 50% off selected items</p>
          </div>
        </div>
      </div>

      <div class="w-full flex-shrink-0 relative">
        <img
          src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2f6fa4a3-ed08-4285-80bf-e0e141f38e88/AIR+JORDAN+3+RTR+LSC+INDIGO+SP.png"
          class="w-full h-full object-cover"
          alt="Free Shipping"
        />
        <div class="absolute inset-0 flex items-center justify-center bg-black/40">
          <div class="text-center text-white">
            <h2 class="text-4xl font-bold mb-2">Free Shipping</h2>
            <p class="text-lg">On all orders over $100</p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
      <button class="btn btn-circle" @click="prevSlide">❮</button>
      <button class="btn btn-circle" @click="nextSlide">❯</button>
    </div>

    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      <button
        v-for="i in totalSlides"
        :key="i"
        class="w-3 h-3 rounded-full transition-colors"
        :class="currentSlide === i - 1 ? 'bg-white' : 'bg-white/40'"
        @click="goToSlide(i - 1)"
      ></button>
    </div>
  </div>
</template>
