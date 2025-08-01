// client/src/api/productAPI.js

const BASE_URL = "http://localhost:5000/api"; // Change to production server URL later

// GET all products
export const getAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

// GET single product
export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Product not found");
  return res.json();
};

// SEARCH
export const searchProducts = async (query, category) => {
  const params = new URLSearchParams();
  if (query) params.append("query", query);
  if (category) params.append("category", category);

  const res = await fetch(`${BASE_URL}/products/search?${params.toString()}`);
  if (!res.ok) throw new Error("Search failed");
  return res.json();
};
