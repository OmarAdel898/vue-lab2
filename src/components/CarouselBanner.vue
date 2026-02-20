<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => console.log('CarouselBanner mounted'))
onUnmounted(() => console.log('CarouselBanner unmounted'))
</script>

<template>
  <div class="carousel w-full rounded-box mb-8 overflow-hidden" style="height: 320px;">
    <div id="slide1" class="carousel-item relative w-full">
      <img
        src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/57b88b0d-b972-41e6-abbd-e56136560c52/AIR+MAX+270+PREMIUM.png"
        class="w-full object-cover"
        alt="New Season Sneakers"
      />
      <div class="absolute inset-0 flex items-center justify-center bg-black/40">
        <div class="text-center text-white">
          <h2 class="text-4xl font-bold mb-2">New Season Arrivals</h2>
          <p class="text-lg">Discover the latest styles</p>
        </div>
      </div>
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div>

    <div id="slide2" class="carousel-item relative w-full">
      <img
        src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/94cef7bd-f891-443a-81fe-48c5d81682ff/NIKE+AIR+MAX+PLUS.png"
        class="w-full object-cover"
        alt="Summer Sale"
      />
      <div class="absolute inset-0 flex items-center justify-center bg-black/40">
        <div class="text-center text-white">
          <h2 class="text-4xl font-bold mb-2">Summer Sale</h2>
          <p class="text-lg">Up to 50% off selected items</p>
        </div>
      </div>
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div>

    <div id="slide3" class="carousel-item relative w-full">
      <img
        src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2f6fa4a3-ed08-4285-80bf-e0e141f38e88/AIR+JORDAN+3+RTR+LSC+INDIGO+SP.png"
        class="w-full object-cover"
        alt="Free Shipping"
      />
      <div class="absolute inset-0 flex items-center justify-center bg-black/40">
        <div class="text-center text-white">
          <h2 class="text-4xl font-bold mb-2">Free Shipping</h2>
          <p class="text-lg">On all orders over $100</p>
        </div>
      </div>
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>
