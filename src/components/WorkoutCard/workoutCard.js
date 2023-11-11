import { Typography, useTheme } from "@mui/material";
import React from "react";
import { HeaderTextWrapper, WorkoutCardContainer } from "./styled.workoutCard";
import BestSetTable from "../BestSetTable/bestSetTable";
import { convertDate } from "../../utils/convertDate";
import { useNavigate } from "react-router-dom";

const WorkoutCard = ({ workout }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleOnClickCard = (id) => {
    navigate(`/allWorkouts/${id}`);
  };
  return (
    <WorkoutCardContainer onClick={() => handleOnClickCard(workout._id)}>
      <div style={{ padding: "12px", width: "100%" }}>
        <HeaderTextWrapper>
          <Typography variant="subtitle1" fontWeight="bold">
            {workout.name} -{" "}
            <span
              style={{ color: theme.palette.secondary.main, fontSize: "14px" }}
            >
              {convertDate(workout.createdAt)}
            </span>
          </Typography>
        </HeaderTextWrapper>
        <BestSetTable workoutExercises={workout.exercises} />
      </div>
    </WorkoutCardContainer>
  );
};

export default WorkoutCard;
