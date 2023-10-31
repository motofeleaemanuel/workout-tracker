import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import theme from "../../theme/theme";
import { useDispatch } from "react-redux";
import { resetCreateWorkout } from "../../redux/createWorkoutSlice";

const WorkoutCreated = ({ createdSuccessfully, setStep }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {createdSuccessfully ? (
          <CheckCircleOutlineIcon
            fontSize="large"
            style={{ color: theme.palette.success.main }}
          />
        ) : (
          <ReportProblemIcon
            fontSize="large"
            style={{ color: theme.palette.error.main }}
          />
        )}
      </div>
      <Typography
        variant="h6"
        fontWeight="bold"
        textAlign="center"
        style={{
          marginBottom: "24px",
          color: !createdSuccessfully
            ? theme.palette.error.main
            : theme.palette.success.main,
        }}
      >
        {createdSuccessfully
          ? "Workout created successfully"
          : "An error has occured while creating the workout"}
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            dispatch(resetCreateWorkout());
            setStep(0);
          }}
          variant="outlined"
          style={{ marginRight: "24px" }}
        >
          Create a new workout
        </Button>
        <Button onClick={() => navigate("/allWorkouts")} variant="outlined">
          View all workouts
        </Button>
      </div>
    </div>
  );
};

export default WorkoutCreated;
