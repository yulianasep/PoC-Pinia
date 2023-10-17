import { defineStore } from "pinia";
import { ref } from "vue";
import { Product } from "./useProductsStore";

export const useCartStore = defineStore("cart", () => {
  const cart = ref<Product[]>([]);

  function addToCart(product: Product) {
    const cartItem = cart.value.find((item) => item.id === product.id);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  }

  function removeFromCart(product: Product) {
    const index = cart.value.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      if (cart.value[index].quantity > 1) {
        cart.value[index].quantity--;
      } else {
        cart.value.splice(index, 1);
      }
    }
  }

  function clearCart() {
    cart.value = [];
  }

  function getTotalCart() {
    let total = 0;

    for (const item of cart.value) {
      total += item.price * item.quantity;
    }

    return total;
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalCart,
  };
});
