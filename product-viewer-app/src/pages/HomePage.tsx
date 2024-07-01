import React from "react";
import { Container, Typography } from "@mui/material";
import ProductList from "../components/ProductList/ProductList";

const HomePage: React.FC = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ py: 4, px: { xs: 2, sm: 3, md: 5 }, maxWidth: "100%" }}
    >
      <Typography variant="h1" gutterBottom align="center">
        Product Viewer App
      </Typography>
      <ProductList />
    </Container>
  );
};

export default HomePage;
