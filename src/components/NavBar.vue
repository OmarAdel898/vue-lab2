<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

onMounted(() => console.log('NavBar mounted'))
onUnmounted(() => console.log('NavBar unmounted'))
</script>

<template>
  <nav class="navbar bg-base-200 px-6 shadow-md">
    <div class="flex-1">
      <RouterLink to="/" class="btn btn-ghost text-xl font-bold">SneakerStore</RouterLink>
    </div>
    <div class="flex gap-2">
      <RouterLink to="/" class="btn btn-ghost">Home</RouterLink>
      <RouterLink to="/product/1" class="btn btn-ghost">Products</RouterLink>
      <RouterLink to="/about" class="btn btn-ghost">About</RouterLink>
    </div>
  </nav>
</template>
