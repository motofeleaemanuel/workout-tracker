import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function WorkoutCategoryDropdown({
  categories,
  setSelectedCategory,
  selectedCategory,
}) {
  const handleChange = (event) => {
    setSelectedCategory({ name: event.target.value });
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Catagory</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCategory.name}
          label="Catagory"
          onChange={handleChange}
        >
          {categories ? (
            categories?.map((category) => (
              <MenuItem value={category.name} key={category._id}>
                {category.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="">None</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
