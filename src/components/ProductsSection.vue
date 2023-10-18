<script setup lang="ts">
import { useCartStore } from "../store/useCartStore";
import { useProductStore } from "../store/useProductsStore";

const cartStore = useCartStore();
const productStore = useProductStore();
productStore.loadProducts();
</script>

<template>
  <section class="product-container">
    <h2>Available Products</h2>
    <div class="products-list">
      <article
        v-for="product in productStore.products"
        :key="product.id"
        class="product"
      >
        <img :src="product.image" alt="Product Image" />
        <div class="product-info">
          <h2>{{ product.name }}</h2>
          <p>Price: ${{ product.price }}</p>
          <p>Description: {{ product.description }}</p>
          <p>Available Quantity: {{ product.quantity }}</p>
          <button @click="cartStore.addToCart(product)">Add to Cart</button>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.product-container {
  width: 100%;
}
.products-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.product {
  width: 350px;
  border-radius: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.3);
}

.product img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.product-info {
  padding: 2rem;
}
</style>
