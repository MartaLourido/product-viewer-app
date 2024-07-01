import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Product } from '../../types/Product';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h5">{product.title}</Typography>
        <Typography>{product.price}</Typography>
        <Typography>{product.description}</Typography>
        <Typography>{product.brand}</Typography>
        <Typography>{product.category}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
