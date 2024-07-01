import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const fetchProducts = async (limit: number = 20, skip: number = 0) => {
  try {
    const response = await axios.get(`${API_URL}?limit=${limit}&skip=${skip}`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories: ", error);
    throw error;
  }
};
