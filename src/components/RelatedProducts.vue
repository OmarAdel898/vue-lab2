<template>
    <section>
        <h2 class="text-2xl font-bold mb-6">Related Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div v-for="item in list" :key="item.id" class="card overflow-hidden">
                <figure>
                    <img :src="item.image" :alt="item.name" class="w-full" />
                </figure>
                <div class="card-body">
                    <h3 class="card-title text-sm">{{ item.name }}</h3>
                    <div class="flex items-center gap-2">
                        <span class="font-bold">
                            ${{ item.price - (item.price * item.discount) / 100 }}
                        </span>
                        <span v-if="item.discount > 0" class="text-xs line-through opacity-50">
                            ${{ item.price }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps(["list"]);
</script>
