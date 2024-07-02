import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import { Search, StyledInputBase, SearchIconWrapper } from "./SearchBar.styles";

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={handleSearchChange}
      />
    </Search>
  );
};

export default SearchBar;
