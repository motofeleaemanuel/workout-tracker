import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import SetsTable from "../SetsTable/setsTable";
import { WorkoutSummaryHeaderWrapper } from "./styled.workoutSummary";

const WorkoutSummary = () => {
  const workout = useSelector((state) => state?.workout);

  return (
    <div>
      <WorkoutSummaryHeaderWrapper>
        <Typography variant="h6" fontWeight="bold">
          Workout Summary
        </Typography>
      </WorkoutSummaryHeaderWrapper>
      {workout?.workout &&
        workout?.workout?.exercises?.map((exercise) => (
          <div key={exercise.id}>
            <Typography
              fontWeight="bold"
              style={{ margin: "12px 0px 12px 0px" }}
            >
              {exercise.name}
            </Typography>

            <div style={{ marginBottom: "24px" }}>
              <SetsTable sets={exercise?.sets} readOnly={true} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default WorkoutSummary;
