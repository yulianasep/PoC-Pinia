import { products } from "../utils/productsMock.json";

export async function fetchProducts() {
  const data = structuredClone(products);
  return data;
}
