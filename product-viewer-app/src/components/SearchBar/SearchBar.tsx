import React from "react";
import { Search, StyledInputBase, SearchIconWrapper } from "./SearchBar.styles";
import SearchIcon from "@mui/icons-material/Search";

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
