<script setup lang="ts">
import { useStore } from "../composables/useStore";

const { cart, removeFromCart, getTotalCart, clearCart } = useStore();
</script>

<template>
  <div class="cart">
    <h2>Your Shopping Cart</h2>
    <section class="cart-products">
      <ul>
        <li v-for="item in cart" :key="item.id" class="cart-item">
          {{ item.name }} - Quantity: {{ item.quantity }}
          <button @click="removeFromCart(item)">remove</button>
        </li>
      </ul>
      <div>
        <h3>Total Cart</h3>
        <p>{{ getTotalCart() }}</p>
      </div>
      <button @click="clearCart">Clear Cart</button>
    </section>
  </div>
</template>

<style scoped>
.cart {
  width: 300px;
}

.cart-products {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.3);
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}
</style>
