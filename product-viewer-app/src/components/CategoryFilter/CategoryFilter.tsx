import React from "react";
import { Autocomplete, TextField } from "@mui/material";

import { Category } from "types/Category";

interface CategoryFilterProps {
  categories: Category[];
  onChange: (selectedCategories: string[]) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onChange }) => {
  const handleCategoryChange = (event: any, value: Category[]) => {
    onChange(value.map((category) => category.slug.toLowerCase())); 
  };

  return (
    <Autocomplete
      multiple
      options={categories}
      onChange={handleCategoryChange}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder="Select categories"
        />
      )}
      sx={{
        width: { xs: "100%", sm: 300, md: 400 }, 
        backgroundColor: "#fff",
        borderRadius: 0,
      }}
    />
  );
};

export default CategoryFilter;
