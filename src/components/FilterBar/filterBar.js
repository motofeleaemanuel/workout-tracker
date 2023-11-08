import React from "react";
import FilterButton from "../FilterButton/filterButtons";
import { Button, Typography, useMediaQuery } from "@mui/material";
import {
  FilterBarWrapper,
  FilterButtonsWrapper,
  FilterHeaderWrapper,
  ResetButtonWrapper,
} from "./styled.filterBar";
import { BREAKPOINTS } from "../../theme/theme";

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
  const isSmallScreen = useMediaQuery(`(max-width:${BREAKPOINTS.small})`);
  return (
    <FilterBarWrapper>
      <FilterHeaderWrapper>
        <Typography variant="h6" fontWeight="bold">
          Category:{" "}
        </Typography>
      </FilterHeaderWrapper>
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
      <ResetButtonWrapper>
        <Button
          variant="contained"
          fullWidth={isSmallScreen}
          onClick={() => {
            setReset(true);
            setActiveFilterButton(null);
          }}
        >
          Reset
        </Button>
      </ResetButtonWrapper>
    </FilterBarWrapper>
  );
};

export default FilterBar;
