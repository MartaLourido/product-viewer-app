import axios from "axios";
import { Category } from "../types/Category"; 

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
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await apiClient.get<Category[]>(`/products/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};
