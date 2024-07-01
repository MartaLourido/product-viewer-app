import { useState, useEffect } from "react";
import { fetchProducts } from "../services/productService";
import { Product } from "../types/Product";

const useProducts = (limit: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const newProducts = await fetchProducts(limit, skip);
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        if (newProducts.length < limit) setHasMore(false);
      } catch (error) {
        setError("Failed to load products");
      }
    };
    loadProducts();
  }, [limit, skip]);

  const loadMore = () => {
    setSkip((prevSkip) => prevSkip + limit);
  };

  return { products, error, loadMore, hasMore };
};

export default useProducts;
