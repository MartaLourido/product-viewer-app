import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ProductList from '../components/ProductList/ProductList';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Product Viewer App
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          {/* <SearchBar /> */}
        </Grid>
        <Grid item xs={12}>
          <ProductList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
