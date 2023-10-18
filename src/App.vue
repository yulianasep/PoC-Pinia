<script setup lang="ts">
import ProductsSection from "./components/ProductsSection.vue";
import ShoppingCartVue from "./components/ShoppingCart.vue";
</script>

<template>
  <div class="main-container">
    <h1>Welcome to Our Online Store</h1>
    <section class="store-section">
      <ProductsSection class="product-section" />
      <ShoppingCartVue class="shopping-cart" />
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
}

.product-section {
  width: 66.6%;
}

.shopping-cart {
  width: 33.3%;
}
</style>
