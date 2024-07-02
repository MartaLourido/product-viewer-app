import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  CircularProgress,
} from "@mui/material";
import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import { fetchCategories } from "../services/productService";
import useProducts from "../hooks/useProducts";
import { Product } from "../types/Product";
import { Category } from "../types/Category";
import InventoryIcon from "@mui/icons-material/Inventory";

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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        py: 4,
        px: { xs: 2, sm: 3, md: 5 },
        maxWidth: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <AppBar
        position="static"
        sx={{
          mb: 4,
          background: "linear-gradient(to right, #1976d2, #42a5f5)",
          boxShadow: 3,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isMobile ? "center" : "space-between",
            flexWrap: "wrap",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 2 : 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flex: isMobile ? "none" : 1,
            }}
          >
            <InventoryIcon />
            <Typography variant="h6" noWrap sx={{ fontWeight: "bold" }}>
              Product Viewer App
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              gap: 2,
              width: isMobile ? "100%" : "auto",
            }}
          >
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
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <ProductList
          products={filteredProducts}
          error={error}
          loading={loading}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Box>
    </Container>
  );
};

export default HomePage;
