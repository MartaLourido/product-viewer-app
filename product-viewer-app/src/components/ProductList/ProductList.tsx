import React, { useRef, useCallback } from "react";
import useProducts from "../../hooks/useProducts";
import { Grid, Typography } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types/Product";

const ProductList: React.FC = () => {
  const { products, error, loadMore, hasMore } = useProducts(20);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, loadMore]
  );

  return (
    <div>
      {error && <Typography role="alert">{error}</Typography>}
      <Grid container spacing={2} justifyContent="center">
        {products.map((product: Product, index: number) => {
          const uniqueKey = `${product.id}-${index}`;
          if (products.length === index + 1) {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={uniqueKey}
                ref={lastProductElementRef}
              >
                <ProductCard product={product} />
              </Grid>
            );
          } else {
            return (
              <Grid item xs={12} sm={6} md={4} key={uniqueKey}>
                <ProductCard product={product} />
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
};

export default ProductList;
