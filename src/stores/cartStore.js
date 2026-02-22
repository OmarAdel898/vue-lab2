import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '../composables/useLocalStorage'
import { useProductStore } from './productStore'

export const useCartStore = defineStore('cart', () => {
  const items = useLocalStorage('cart', [])

  const totalItems = computed(() => items.value.length)

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.qty, 0),
  )

  function addToCart(product) {
    const existing = items.value.find((item) => String(item.id) === String(product.id))
    if (existing) {
      existing.qty++
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        price:
          product.discount > 0
            ? +(product.price - (product.price * product.discount) / 100).toFixed(2)
            : product.price,
        image: product.image,
        qty: 1,
      })
    }
    const productStore = useProductStore()
    productStore.decreaseStock(product.id)
  }

  function removeFromCart(id) {
    const existing = items.value.find((item) => String(item.id) === String(id))
    if (!existing) return
    const productStore = useProductStore()
    if (existing.qty > 1) {
      existing.qty--
    } else {
      items.value = items.value.filter((item) => String(item.id) !== String(id))
    }
    productStore.increaseStock(id)
  }

  function clearCart() {
    items.value = []
  }

  function removeAllOfItem(id) {
    const existing = items.value.find((item) => String(item.id) === String(id))
    if (!existing) return
    const productStore = useProductStore()
    for (let i = 0; i < existing.qty; i++) {
      productStore.increaseStock(id)
    }
    items.value = items.value.filter((item) => String(item.id) !== String(id))
  }

  return { items, totalItems, totalPrice, addToCart, removeFromCart, removeAllOfItem, clearCart }
})
