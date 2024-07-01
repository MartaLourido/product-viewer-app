import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
});

export const fetchProducts = async (limit: number = 20, skip: number = 0) => {
  try {
    const response = await apiClient.get(`/products`, {
      params: {
        limit,
        skip,
      },
    });
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};

// Fetch product categories
export const fetchCategories = async () => {
  try {
    const response = await apiClient.get(`/products/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};
