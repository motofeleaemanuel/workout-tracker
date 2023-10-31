import React from "react";
import WorkoutCard from "../WorkoutCard/workoutCard";
import { Grid, Skeleton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { WorkoutCardContainer } from "../WorkoutCard/styled.workoutCard";
import { useNavigate } from "react-router-dom";
import { CreateWorkoutTextWrapper } from "./styled.cardsLayout";

const CardsLayout = ({ isLoading }) => {
  const workouts = useSelector((state) => state?.workouts);
  const navigate = useNavigate();

  return !isLoading ? (
    <Grid container spacing={2} style={{ paddingBottom: "24px" }}>
      {workouts?.workouts && workouts?.workouts.length > 0 ? (
        workouts?.workouts.map((workout) => (
          <Grid item xs={6} key={workout._id}>
            <WorkoutCard workout={workout} />
          </Grid>
        ))
      ) : (
        <Grid item xs={6}>
          <Typography variant="body">No workouts found.</Typography>
        </Grid>
      )}
      <Grid item xs={6}>
        <WorkoutCardContainer
          style={{ height: "350px" }}
          onClick={() => navigate("/createWorkout")}
        >
          <CreateWorkoutTextWrapper>
            <Typography variant="h6">+ Create Workout</Typography>
          </CreateWorkoutTextWrapper>
        </WorkoutCardContainer>
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={2}>
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <Grid item xs={6} key={index}>
          <Skeleton variant="rectangular" height={350} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsLayout;
