<script setup lang="ts">
import ProductsSection from "./components/ProductsSection.vue";
import ShoppingCartVue from "./components/ShoppingCart.vue";
</script>

<template>
  <div class="main-container">
    <h1>Welcome to Our Online Store</h1>
    <section class="store-section">
      <ProductsSection />
      <ShoppingCartVue />
    </section>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  justify-content: center;
  align-items: center;
}

.store-section {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}
</style>
