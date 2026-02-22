<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <NavBar />
    <main class="container mx-auto px-4 py-8">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>