import axios from "axios";
import { fetchProducts, fetchCategories } from "./productService";
import { Category } from "../types/Category";

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("productService", () => {
  describe("fetchProducts", () => {
    it("should fetch products", async () => {
      const products = [{ id: 1, title: "Product 1" }];
      const response = { data: { products } };

      mockedAxios.get.mockResolvedValueOnce(response);

      const result = await fetchProducts();

      expect(result).toEqual(products);
      expect(mockedAxios.get).toHaveBeenCalledWith("/products", {
        params: { limit: 20, skip: 0 },
      });
    });

    it("should handle fetch products error", async () => {
      const errorMessage = "Network Error";
      mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));

      await expect(fetchProducts()).rejects.toThrow(errorMessage);
    });
  });

  describe("fetchCategories", () => {
    it("should fetch categories", async () => {
      const categories: Category[] = [
        {
          slug: "category1",
          name: "Category 1",
          url: "https://dummyjson.com/products/category/category1",
        },
      ];
      const response = { data: categories };

      mockedAxios.get.mockResolvedValueOnce(response);

      const result = await fetchCategories();

      expect(result).toEqual(categories);
      expect(mockedAxios.get).toHaveBeenCalledWith("/products/categories");
    });

    it("should handle fetch categories error", async () => {
      const errorMessage = "Network Error";
      mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));

      await expect(fetchCategories()).rejects.toThrow(errorMessage);
    });
  });
});
