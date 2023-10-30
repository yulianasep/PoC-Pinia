import { storeToRefs } from "pinia";
import { useCartStore } from "../store/useCartStore";
import { useProductStore } from "../store/useProductsStore";

export const useStore = () => {
  const cartStore = useCartStore();
  const productStore = useProductStore();

  const { cart } = storeToRefs(cartStore);
  const { products } = storeToRefs(productStore);

  const { addToCart, clearCart, getTotalCart, removeFromCart } = useCartStore();
  const { loadProducts, reset } = useProductStore();

  return {
    cart,
    products,

    addToCart,
    clearCart,
    getTotalCart,
    removeFromCart,
    loadProducts,
    reset,
  };
};
