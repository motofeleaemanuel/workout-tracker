import React, { useState } from "react";
import { CustomInputField } from "../WorkoutName/styled.workoutName";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addExerciseNameToWorkout,
  addSetToExercise,
  deleteExercise,
  deleteSet,
} from "../../redux/createWorkoutSlice";
import { v4 as uuidv4 } from "uuid";
import SetsTable from "../SetsTable/setsTable";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  AddExerciseFieldWrapper,
  ExerciseContainer,
  ExerciseHeaderWrapper,
  SetInputsWrapper,
  TitleWrapper,
} from "./styled.addExercises";

const AddExercise = () => {
  const workout = useSelector((state) => state.workout);
  const exercise = useSelector((state) => state.workout?.workout?.exercises);
  const [exerciseName, setExerciseName] = useState("");
  const [setWeight, setSetWeight] = useState(0);
  const [setRepetitions, setSetRepetitions] = useState(0);

  const dispatch = useDispatch();

  const handleAddExerciseName = () => {
    const exerciseId = uuidv4();
    dispatch(addExerciseNameToWorkout({ exerciseName, exerciseId }));
  };

  const handleAddSet = (exerciseId) => {
    const setId = uuidv4();
    dispatch(
      addSetToExercise({
        exerciseId,
        setId,
        setWeight,
        setRepetitions,
      })
    );
  };

  const handleDeleteExercise = (exerciseId) => {
    dispatch(deleteExercise({ exerciseId }));
  };

  const handleDeleteSet = (exerciseId, setId) => {
    dispatch(deleteSet({ exerciseId, setId }));
  };

  return (
    <>
      <TitleWrapper>
        <Typography fontWeight="bold" variant="h6">
          {workout.workout?.name}
        </Typography>
      </TitleWrapper>
      <AddExerciseFieldWrapper>
        <CustomInputField
          id="outlined-basic"
          label="Exercise Name"
          variant="outlined"
          fullWidth
          onChange={(e) => setExerciseName(e.target.value)}
          value={exerciseName}
        />

        <Button
          variant="contained"
          style={{ marginLeft: "12px" }}
          onClick={handleAddExerciseName}
        >
          Add
        </Button>
      </AddExerciseFieldWrapper>
      <div>
        {exercise &&
          exercise?.map((exercise) => {
            return (
              <ExerciseContainer key={exercise.id}>
                <ExerciseHeaderWrapper>
                  <Typography
                    fontWeight="bold"
                    style={{ margin: "12px 0px 12px 0px" }}
                  >
                    {exercise.name}
                  </Typography>
                  <div onClick={() => handleDeleteExercise(exercise.id)}>
                    <DeleteIcon style={{ cursor: "pointer" }} />
                  </div>
                </ExerciseHeaderWrapper>
                <div>
                  <SetInputsWrapper>
                    <CustomInputField
                      id="outlined-basic"
                      label="Set weight"
                      variant="outlined"
                      fullWidth
                      type="number"
                      onChange={(e) => setSetWeight(e.target.value)}
                      value={setWeight}
                      style={{ marginRight: "12px" }}
                    />
                    <CustomInputField
                      id="outlined-basic"
                      label="Set repetitions"
                      variant="outlined"
                      type="number"
                      fullWidth
                      onChange={(e) => setSetRepetitions(e.target.value)}
                      value={setRepetitions}
                      style={{ marginRight: "12px" }}
                    />
                    <Button
                      variant="outlined"
                      style={{ whiteSpace: "nowrap" }}
                      onClick={() => {
                        handleAddSet(exercise.id);
                      }}
                    >
                      Create Set
                    </Button>
                  </SetInputsWrapper>

                  {exercise?.sets && exercise?.sets.length > 0 && (
                    <SetsTable
                      sets={exercise?.sets}
                      handleDeleteSet={handleDeleteSet}
                      exerciseId={exercise.id}
                      readOnly={false}
                    />
                  )}
                </div>
              </ExerciseContainer>
            );
          })}
      </div>
    </>
  );
};

export default AddExercise;
