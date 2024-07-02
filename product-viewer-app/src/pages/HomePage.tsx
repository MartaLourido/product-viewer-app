import React, { useState, useEffect } from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Typography, CircularProgress } from "@mui/material";

import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import { fetchCategories } from "../services/productService";
import useProducts from "../hooks/useProducts";
import { Product } from "../types/Product";
import { Category } from "../types/Category";
import {
  StyledContainer,
  StyledAppBar,
  StyledToolbar,
  StyledBox,
  FilterBox,
  ContentBox,
} from "./HomePage.styles";

const HomePage: React.FC = () => {
  const { products, error, loading, loadMore, hasMore } = useProducts(20);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoryList = await fetchCategories();
        setCategories(categoryList);
      } catch (error) {
        setCategoriesError("Failed to load categories");
      } finally {
        setCategoriesLoading(false);
      }
    };
    loadCategories();
  }, []);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  const handleCategoryChange = (selectedSlugs: string[]) => {
    setSelectedCategories(selectedSlugs);
  };

  const filteredProducts = products.filter((product: Product) => {
    const searchTermLower = searchTerm.toLowerCase();

    const matchesTitle =
      product.title?.toLowerCase().includes(searchTermLower) ?? false;
    const matchesDescription =
      product.description?.toLowerCase().includes(searchTermLower) ?? false;
    const matchesCategory =
      product.category?.toLowerCase().includes(searchTermLower) ?? false;
    const matchesBrand =
      product.brand?.toLowerCase().includes(searchTermLower) ?? false;
    const matchesPrice =
      product.price?.toString().toLowerCase().includes(searchTermLower) ??
      false;

    return (
      (matchesTitle ||
        matchesDescription ||
        matchesCategory ||
        matchesBrand ||
        matchesPrice) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category.toLowerCase()))
    );
  });

  return (
    <StyledContainer maxWidth={false}>
      <StyledAppBar position="static">
        <StyledToolbar>
          <StyledBox>
            <InventoryIcon />
            <Typography variant="h6" noWrap sx={{ fontWeight: "bold" }}>
              Product Viewer App
            </Typography>
          </StyledBox>
          <FilterBox>
            <SearchBar onSearch={handleSearch} />
            {categoriesLoading ? (
              <CircularProgress size={24} />
            ) : categoriesError ? (
              <Typography color="error">{categoriesError}</Typography>
            ) : (
              <CategoryFilter
                categories={categories}
                onChange={handleCategoryChange}
              />
            )}
          </FilterBox>
        </StyledToolbar>
      </StyledAppBar>
      <ContentBox>
        <ProductList
          products={filteredProducts}
          error={error}
          loading={loading}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </ContentBox>
    </StyledContainer>
  );
};

export default HomePage;
