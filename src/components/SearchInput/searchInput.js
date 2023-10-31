import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { SearchInputWrapper } from "./styled.searchInput";

const SearchInput = ({ handleOnButtonSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleOnInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <SearchInputWrapper>
      <TextField
        label="Search a workout by name"
        fullWidth
        value={searchQuery}
        onChange={handleOnInputChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() =>
                  searchQuery && handleOnButtonSearchQuery(null, searchQuery)
                }
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </SearchInputWrapper>
  );
};

export default SearchInput;
