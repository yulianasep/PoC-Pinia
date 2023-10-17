<script setup lang="ts">
import { useCartStore } from "../store/useCartStore";

const cartStore = useCartStore();
</script>

<template>
  <div class="cart">
    <h2>Your Shopping Cart</h2>
    <ul class="cart-products">
      <li v-for="item in cartStore.cart" :key="item.id">
        {{ item.name }} - Quantity: {{ item.quantity }}
        <button @click="cartStore.removeFromCart(item)">remove</button>
      </li>
    </ul>
    <div>
      <h3>Total Cart</h3>
      <p>{{ cartStore.getTotalCart() }}</p>
    </div>
    <button @click="cartStore.clearCart">Clear Cart</button>
  </div>
</template>

<style scoped>
.cart {
  width: 300px;
}

.cart-products {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
