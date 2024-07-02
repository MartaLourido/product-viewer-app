import React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import { Product } from "../../types/Product";

interface ProductCardProps {
  product: Product;
}

const categoryColors: { [key: string]: any } = {
  smartphones: "primary",
  laptops: "secondary",
  fragrances: "error",
  skincare: "warning",
  groceries: "info",
  homeDecoration: "success",
  furniture: "customYellow",
  tops: "customPurple",
  womensDresses: "customOrange",
  womensShoes: "customPink",
  mensShirts: "primary",
  mensShoes: "secondary",
  mensWatches: "error",
  womensWatches: "warning",
  womensBags: "info",
  womensJewellery: "success",
  sunglasses: "customYellow",
  automotive: "customPurple",
  motorcycle: "customOrange",
  lighting: "customPink",
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const color = categoryColors[product.category];

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          height: 200,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{ height: "100%", width: "auto" }}
          src={product.thumbnail}
          alt={product.title}
        />
      </Box>
      <CardContent>
        <Chip
          label={product.category}
          color={color ? color : "default"}
          sx={{ mb: 2 }}
        />
        <Typography variant="h6" sx={{ mb: 1 }}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">{product.price} USD</Typography>
          <Typography
            variant="caption"
            color="success.main"
            sx={{ fontWeight: "bold" }}
          >
            Best Price
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {product.brand}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
