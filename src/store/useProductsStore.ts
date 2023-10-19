import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchProducts } from "../services/fetchProducts";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

export const useProductStore = defineStore("products", () => {
  const products = ref<Product[]>([]);

  async function loadProducts() {
    try {
      const productData = await fetchProducts();
      products.value = productData;
    } catch (error) {
      throw new Error("Error to load products data");
    }
  }

  async function reset() {
    try {
      products.value = [];
      await loadProducts();
      console.log(products.value);
    } catch (error) {
      throw new Error("Error resetting and loading products:");
    }
  }

  return {
    products,
    loadProducts,
    reset,
  };
});
