<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductDetails from '../components/ProductDetails.vue'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../stores/productStore'

const route = useRoute()
const productStore = useProductStore()

onMounted(() => {
  if (productStore.products.length === 0) {
    productStore.fetchProducts()
  }
})

const currentProduct = computed(() => {
  return productStore.products.find((p) => String(p.id) === String(route.params.id))
})

const relatedProducts = computed(() =>
  productStore.products.filter((p) => String(p.id) !== String(route.params.id)),
)
</script>

<template>
  <div>
    <div v-if="currentProduct">
      <ProductDetails :product="currentProduct" />

      <section class="mt-12">
        <h2 class="text-2xl font-bold mb-6">Related Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            v-for="product in relatedProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </section>
    </div>

    <div v-else class="text-center py-20">
      <h2 class="text-2xl font-bold text-error">Product not found</h2>
      <RouterLink to="/" class="btn btn-primary mt-4">Back to Home</RouterLink>
    </div>
  </div>
</template>
