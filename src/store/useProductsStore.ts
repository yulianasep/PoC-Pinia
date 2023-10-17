// productStore.js
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

  return {
    products,
    loadProducts,
  };
});
