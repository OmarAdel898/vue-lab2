import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '../composables/useApi'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const api = useApi('http://localhost:3000/products')

  async function fetchProducts() {
    loading.value = true
    error.value = null
    const result = await api.getAll()
    if (api.error.value) {
      error.value = api.error.value
    } else {
      products.value = result
    }
    loading.value = false
  }

  async function decreaseStock(productId) {
    const product = products.value.find((p) => String(p.id) === String(productId))
    if (product && product.stock > 0) {
      product.stock--
      await api.update(productId, { ...product })
    }
  }

  async function increaseStock(productId) {
    const product = products.value.find((p) => String(p.id) === String(productId))
    if (product) {
      product.stock++
      await api.update(productId, { ...product })
    }
  }

  const getProductById = (id) => {
    return computed(() => products.value.find((p) => String(p.id) === String(id)))
  }

  return { products, loading, error, fetchProducts, decreaseStock, increaseStock, getProductById }
})
