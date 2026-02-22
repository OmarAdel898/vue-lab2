<script setup>
import { onMounted } from 'vue'
import CarouselBanner from '../components/CarouselBanner.vue'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../stores/productStore'

const productStore = useProductStore()

onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
  <div>
    <CarouselBanner />

    <section>
      <h2 class="text-2xl font-bold mb-6">Our Products</h2>

      <div v-if="productStore.loading" class="text-center py-20">
        <span class="loading loading-spinner loading-lg"></span>
        <p class="mt-4">Loading products...</p>
      </div>

      <div v-else-if="productStore.error" class="alert alert-error">
        <span>Failed to load products: {{ productStore.error }}</span>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in productStore.products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>
