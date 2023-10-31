import { Button } from "@mui/material";
import React from "react";
import { SIZES } from "../../theme/theme";

const FilterButton = ({
  name,
  handleOnButtonSearchQuery,
  activeFilterButton,
}) => {
  return (
    <div style={{ paddingRight: SIZES.small }}>
      <Button
        variant={activeFilterButton ? "contained" : "outlined"}
        onClick={() => handleOnButtonSearchQuery(name, null)}
      >
        {name}
      </Button>
    </div>
  );
};

export default FilterButton;
