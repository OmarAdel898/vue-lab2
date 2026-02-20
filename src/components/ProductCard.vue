<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

function goToProduct() {
  router.push({ name: 'product', params: { id: props.product.id } })
}

onMounted(() => console.log(`ProductCard mounted — ${props.product.name}`))
onUnmounted(() => console.log(`ProductCard unmounted — ${props.product.name}`))
</script>

<template>
  <div class="card bg-base-100 shadow-xl border border-base-300">
    <figure class="relative">
      <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
      <div v-if="product.badge" class="absolute top-2 right-2 badge badge-primary font-bold">
        {{ product.badge }}
      </div>
    </figure>
    <div class="card-body">
      <h2 class="card-title text-lg">{{ product.name }}</h2>
      <div class="flex items-center gap-2 mt-1">
        <span v-if="product.discount > 0" class="text-base-content/50 line-through text-sm">
          ${{ product.price }}
        </span>
        <span class="text-primary font-bold text-xl">
          ${{ product.discount > 0 ? (product.price - (product.price * product.discount) / 100).toFixed(2) : product.price }}
        </span>
        <span v-if="product.discount > 0" class="badge badge-secondary text-xs">
          -{{ product.discount }}%
        </span>
      </div>
      <div class="card-actions justify-end mt-3">
        <button class="btn btn-primary btn-sm" @click="goToProduct">View Product</button>
      </div>
    </div>
  </div>
</template>
