import { defineStore } from "pinia";
import { ref } from "vue";
import { Product, useProductStore } from "./useProductsStore";

export const useCartStore = defineStore("cart", () => {
  const cart = ref<Product[]>([]);

  function addToCart(product: Product) {
    const productStore = useProductStore();
    const cartItem = cart.value.find((item) => item.id === product.id);
    const productIndex = productStore.products.findIndex(
      (item) => item.id === product.id
    );

    if (cartItem) {
      if (productStore.products[productIndex].quantity > 0) {
        cartItem.quantity++;
        productStore.products[productIndex].quantity--;
      } else {
        alert("Product without Stock");
      }
    } else {
      if (productStore.products[productIndex].quantity > 0) {
        cart.value.push({ ...product, quantity: 1 });
        productStore.products[productIndex].quantity--;
      } else {
        alert("Product without Stock");
      }
    }
  }

  function removeFromCart(product: Product) {
    const productStore = useProductStore();
    const cartIndex = cart.value.findIndex((item) => item.id === product.id);
    const productIndex = productStore.products.findIndex(
      (item) => item.id === product.id
    );

    if (cartIndex !== -1) {
      if (cart.value[cartIndex].quantity > 1) {
        cart.value[cartIndex].quantity--;
        productStore.products[productIndex].quantity++;
      } else {
        cart.value.splice(cartIndex, 1);
        productStore.products[productIndex].quantity++;
      }
    }
  }

  async function clearCart() {
    const productStore = useProductStore();
    await productStore.reset();
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
