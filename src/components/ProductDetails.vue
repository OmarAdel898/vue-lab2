<script setup>
import { computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['buy'])

const discountedPrice = computed(() => {
  if (props.product.discount > 0) {
    return (props.product.price - (props.product.price * props.product.discount) / 100).toFixed(2)
  }
  return props.product.price.toFixed(2)
})

function buyNow() {
  emit('buy', props.product.id)
}

onMounted(() => console.log(`ProductDetails mounted — ${props.product.name}`))
onUnmounted(() => console.log(`ProductDetails unmounted — ${props.product.name}`))
</script>

<template>
  <div class="card lg:card-side bg-base-100 shadow-xl border border-base-300">
    <figure class="lg:w-1/2">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-80 object-cover rounded-tl-box rounded-bl-box"
      />
    </figure>
    <div class="card-body lg:w-1/2">
      <div class="flex items-start justify-between gap-2">
        <h2 class="card-title text-3xl">{{ product.name }}</h2>
        <span v-if="product.badge" class="badge badge-primary font-bold text-sm">
          {{ product.badge }}
        </span>
      </div>

      <p class="text-base-content/70 mt-2">{{ product.description }}</p>

      <div class="flex items-center gap-3 mt-4">
        <span v-if="product.discount > 0" class="text-base-content/40 line-through text-lg">
          ${{ product.price }}
        </span>
        <span class="text-primary font-bold text-3xl">${{ discountedPrice }}</span>
        <span v-if="product.discount > 0" class="badge badge-secondary">
          -{{ product.discount }}% OFF
        </span>
      </div>

      <div class="mt-2">
        <span
          :class="product.stock > 0 ? 'text-success font-semibold' : 'text-error font-semibold'"
        >
          {{ product.stock > 0 ? `In Stock: ${product.stock} left` : 'Out of Stock' }}
        </span>
      </div>

      <div class="flex flex-wrap gap-2 mt-3">
        <span
          v-for="tag in product.tags"
          :key="tag"
          class="badge badge-outline"
        >
          {{ tag }}
        </span>
      </div>

      <div class="card-actions mt-6">
        <button
          class="btn btn-primary btn-wide"
          :disabled="product.stock === 0"
          @click="buyNow"
        >
          {{ product.stock === 0 ? 'Out of Stock' : 'Buy Now' }}
        </button>
      </div>
    </div>
  </div>
</template>
