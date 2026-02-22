<script setup>
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>

    <div v-if="cartStore.items.length === 0" class="text-center py-20">
      <h2 class="text-2xl font-bold text-base-content/50">Your cart is empty</h2>
      <RouterLink to="/" class="btn btn-primary mt-4">Continue Shopping</RouterLink>
    </div>

    <div v-else>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartStore.items" :key="item.id">
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="w-12 h-12 rounded">
                      <img :src="item.image" :alt="item.name" />
                    </div>
                  </div>
                  <span class="font-semibold">{{ item.name }}</span>
                </div>
              </td>
              <td>${{ item.price.toFixed(2) }}</td>
              <td>
                <div class="flex items-center gap-2">
                  <button
                    class="btn btn-outline btn-xs btn-square"
                    @click="cartStore.removeFromCart(item.id)"
                  >
                    -
                  </button>
                  <span class="font-semibold min-w-[1.5rem] text-center">{{ item.qty }}</span>
                  <button
                    class="btn btn-outline btn-xs btn-square"
                    @click="cartStore.addToCart(item)"
                  >
                    +
                  </button>
                </div>
              </td>
              <td class="font-bold">${{ (item.price * item.qty).toFixed(2) }}</td>
              <td>
                <button
                  class="btn btn-error btn-sm"
                  @click="cartStore.removeAllOfItem(item.id)"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="divider"></div>

      <div class="flex items-center justify-between">
        <span class="text-xl font-bold">Total: ${{ cartStore.totalPrice.toFixed(2) }}</span>
        <button class="btn btn-outline btn-error" @click="cartStore.clearCart()">
          Clear Cart
        </button>
      </div>
    </div>
  </div>
</template>
