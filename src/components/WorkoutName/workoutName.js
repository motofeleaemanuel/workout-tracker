import React from "react";
import { CustomInputField } from "./styled.workoutName";
import WorkoutCategoryDropdown from "../WorkoutCategoryDropdown/workoutCategoryDropdown";

const WorkoutName = ({
  workoutName,
  onWorkoutNameChange,
  setIsInputEmpty,
  categories,
  setSelectedCategory,
  selectedCategory,
}) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    onWorkoutNameChange(value);
    setIsInputEmpty(value === "");
  };
  return (
    <div style={{ display: "flex" }}>
      <CustomInputField
        style={{ marginBottom: "24px", marginRight: "24px" }}
        id="outlined-basic"
        label="Workout name"
        variant="outlined"
        fullWidth
        value={workoutName}
        onChange={handleInputChange}
        required
      />
      <WorkoutCategoryDropdown
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default WorkoutName;
