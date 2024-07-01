import React, { useRef, useCallback } from "react";
import { Grid, Typography, Box } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types/Product";
import useProducts from "../../hooks/useProducts";

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
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      {error && (
        <Typography role="alert" color="error">
          {error}
        </Typography>
      )}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "100%" }}
      >
        {products.map((product: Product, index: number) => {
          const uniqueKey = `${product.id}-${index}`;
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={uniqueKey}
              ref={products.length === index + 1 ? lastProductElementRef : null}
            >
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductList;
