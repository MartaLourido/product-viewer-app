import React, { useRef, useCallback } from "react";
import { Grid, Typography, Box, CircularProgress } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types/Product";
import EmptyState from "../EmptyState/EmptyState";
import InfoIcon from "@mui/icons-material/Info";

const ProductList: React.FC<{
  products: Product[];
  error: string | null;
  loading: boolean;
  loadMore: () => void;
  hasMore: boolean;
}> = ({ products, error, loading, loadMore, hasMore }) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastProductElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading || !hasMore) return;
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      {loading && products.length === 0 && (
        <Box
          sx={{
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
      {products.length === 0 && !loading && (
        <EmptyState message="No more products to load" icon={InfoIcon} />
      )}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "100%", py: 4 }}
      >
        {products.map((product: Product, index: number) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={`${product.id}-${index}`}
            ref={products.length === index + 1 ? lastProductElementRef : null}
            data-testid={`product-${product.id}`}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
        {loading && products.length > 0 && (
          <Grid item xs={12} sx={{ textAlign: "center", py: 4 }}>
            <CircularProgress />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ProductList;
