import React, { useRef, useCallback } from "react";
import { Grid, Typography, Box, CircularProgress } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";
import { Product } from "../../types/Product";

const ProductList: React.FC = () => {
  const { products, error, loading, loadMore, hasMore } = useProducts(20);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastProductElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading || !hasMore) return; /
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMore]
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", minHeight: "100vh" }}>
      {loading && products.length === 0 && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {!loading && error && (
        <Typography role="alert" color="error">
          {error}
        </Typography>
      )}
      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: "100%" }}>
        {products.map((product: Product, index: number) => (
          <Grid
            item xs={12} sm={6} md={4} lg={3}
            key={`${product.id}-${index}`}
            ref={products.length === index + 1 ? lastProductElementRef : null}
            data-testid={`product-${product.id}`}>
            <ProductCard product={product} />
          </Grid>
        ))}
        {loading && products.length > 0 && (
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <CircularProgress />
          </Grid>
        )}
        {!loading && !hasMore && (
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography>No more products to load</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ProductList;
