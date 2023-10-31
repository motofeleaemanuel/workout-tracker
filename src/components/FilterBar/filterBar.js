import React from "react";
import FilterButton from "../FilterButton/filterButtons";
import { Button, Typography } from "@mui/material";
import { FilterBarWrapper, FilterButtonsWrapper } from "./styled.filterBar";

const filterButtonNames = [
  "chest",
  "chest & triceps",
  "back",
  "back & biceps",
  "legs",
  "shoulders",
  "shoulders & traps",
];

const FilterBar = ({
  handleOnButtonSearchQuery,
  setReset,
  activeFilterButton,
  setActiveFilterButton,
}) => {
  return (
    <FilterBarWrapper>
      <Typography variant="h6" fontWeight="bold">
        Category:{" "}
      </Typography>
      <FilterButtonsWrapper>
        {filterButtonNames.map((name, index) => (
          <FilterButton
            name={name}
            key={index}
            handleOnButtonSearchQuery={handleOnButtonSearchQuery}
            activeFilterButton={name === activeFilterButton}
          />
        ))}
      </FilterButtonsWrapper>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            setReset(true);
            setActiveFilterButton(null);
          }}
        >
          Reset
        </Button>
      </div>
    </FilterBarWrapper>
  );
};

export default FilterBar;
