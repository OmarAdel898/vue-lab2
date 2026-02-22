<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <nav class="navbar bg-base-200 px-6 shadow-md">
    <div class="flex-1">
      <RouterLink to="/" class="btn btn-ghost text-xl font-bold">SneakerStore</RouterLink>
    </div>
    <div class="flex gap-2">
      <RouterLink to="/" class="btn btn-ghost">Home</RouterLink>
      <RouterLink to="/cart" class="btn btn-ghost gap-1">
        Cart
        <span v-if="cartStore.totalItems > 0" class="badge badge-primary badge-sm">
          {{ cartStore.totalItems }}
        </span>
      </RouterLink>
      <RouterLink to="/about" class="btn btn-ghost">About</RouterLink>
    </div>
  </nav>
</template>
