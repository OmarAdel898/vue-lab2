<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => console.log('AboutView mounted'))
onUnmounted(() => console.log('AboutView unmounted'))
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div class="card bg-base-100 shadow-xl border border-base-300">
      <div class="card-body gap-4">
        <h1 class="card-title text-3xl">About This Store</h1>

        <div class="divider"></div>

        <div class="space-y-3 text-base-content/80 leading-relaxed">
          <p>
            <strong class="text-base-content">Omar Adel</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corporis voluptates at eos itaque repellendus deleniti, tenetur rem dignissimos sed doloribus obcaecati, modi qui? Consectetur quidem culpa necessitatibus cupiditate vero dolores provident consequuntur nihil magni repellendus iure earum quia voluptatem aut, iste aperiam ex pariatur ipsam beatae nisi impedit, modi unde odit minus. Possimus eos sed natus tempore magni incidunt voluptate! Illum, perferendis aperiam ad sint aspernatur distinctio doloremque voluptatibus consectetur facere cupiditate animi voluptates nobis culpa, harum quia. Et quis, provident veritatis saepe expedita sint accusantium repudiandae eligendi vel esse voluptatem. Ratione nemo eligendi est quos libero vel architecto!
          </p>
        </div>

        <div class="divider"></div>

      </div>
    </div>
  </div>
</template>
