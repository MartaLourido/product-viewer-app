import { useState, useEffect, useCallback } from "react";
import { fetchProducts } from "../services/productService";
import { Product } from "../types/Product";

const useProducts = (limit: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const loadProducts = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const newProducts = await fetchProducts(limit, skip);
      setProducts((prev) => {
        const productIds = new Set(prev.map((product) => product.id));
        const uniqueProducts = newProducts.filter(
          (product: { id: number }) => !productIds.has(product.id)
        );
        return [...prev, ...uniqueProducts];
      });
      setHasMore(newProducts.length === limit);
    } catch (error) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  }, [limit, skip, hasMore, loading]);

  useEffect(() => {
    loadProducts();
  }, [skip]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setSkip((prevSkip) => prevSkip + limit);
    }
  }, [loading, hasMore, limit]);

  return { products, error, loading, loadMore, hasMore };
};

export default useProducts;
