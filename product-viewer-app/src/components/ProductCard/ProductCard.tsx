import React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import { Product } from "../../types/Product";
import { productCardStyles } from "./ProductCard.styles";
import { categoryColors } from "../../styles/categoryColors"; // Import the categoryColors

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const color = categoryColors[product.category];

  return (
    <Card sx={productCardStyles.card}>
      <Box sx={productCardStyles.imageContainer}>
        <Box
          component="img"
          sx={productCardStyles.image}
          src={product.thumbnail}
          alt={product.title}
        />
      </Box>
      <CardContent>
        <Chip
          label={product.category}
          color={color ? color : "default"}
          sx={productCardStyles.chip}
        />
        <Typography variant="h6" sx={productCardStyles.title}>
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={productCardStyles.description}
        >
          {product.description}
        </Typography>
        <Box sx={productCardStyles.priceContainer}>
          <Typography variant="h6">{product.price} USD</Typography>
          <Typography
            variant="caption"
            color="success.main"
            sx={productCardStyles.bestPrice}
          >
            Best Price
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={productCardStyles.brand}
        >
          {product.brand}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
