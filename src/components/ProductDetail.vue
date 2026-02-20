<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center bg-base-200 p-8 rounded-3xl">
    <div class="relative">
      <img :src="product.image" :alt="product.name" class="w-full rounded-xl shadow-lg" />
      
      <div v-if="product.badge" 
           :class="['badge absolute top-4 left-4 p-4 font-bold', product.badge === 'NEW' ? 'badge-secondary' : 'badge-accent']">
        {{ product.badge }}
      </div>
    </div>

    <div>
      <h1 class="text-4xl font-bold mb-2">{{ product.name }}</h1>
      <p class="text-gray-500 mb-6">{{ product.description }}</p>

      <div class="flex gap-2 mb-6">
        <span v-for="(tag, index) in product.tags" :key="index" class="badge badge-outline">
          {{ tag }}
        </span>
      </div>

      <div class="flex items-center gap-4 mb-6">
        <span class="text-3xl font-bold text-primary">${{ finalPrice }}</span>
        
        <span v-if="product.discount > 0" class="text-xl line-through opacity-50">
          ${{ product.price }}
        </span>
      </div>

      <button class="btn btn-primary w-full md:w-max">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
defineProps(['product', 'finalPrice'])
</script>