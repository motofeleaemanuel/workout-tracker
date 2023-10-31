import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  workout: { id: "", name: "", exercises: [] },
};

export const createWorkoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    resetCreateWorkout: () => {
      return { ...initialState };
    },
    addNameToWorkout: (state, action) => {
      const { workoutName, selectedCategory } = action.payload;
      state.workout = {
        ...state.workout,
        name: workoutName,
        category: selectedCategory,
        id: uuidv4(),
      };
    },
    addExerciseNameToWorkout: (state, action) => {
      state.workout.exercises.push({
        id: action.payload.exerciseId,
        name: action.payload.exerciseName,
        sets: [],
      });
    },
    addSetToExercise: (state, action) => {
      const { exerciseId, setId, setWeight, setRepetitions } = action.payload;
      const exercise = state.workout.exercises.find(
        (exercise) => exercise.id === exerciseId
      );
      if (exercise) {
        const maxSetNumber = Math.max(
          ...exercise.sets.map((set) => set.number),
          0
        );
        exercise.sets.push({
          id: setId,
          number: maxSetNumber + 1,
          weight: Number(setWeight),
          reps: Number(setRepetitions),
        });
      }
    },
    deleteExercise: (state, action) => {
      const { exerciseId } = action.payload;
      const filteredExercises = state.workout.exercises.filter(
        (exercise) => exercise.id !== exerciseId
      );
      state.workout.exercises = filteredExercises;
    },
    deleteSet: (state, action) => {
      const { exerciseId, setId } = action.payload;

      const exerciseIndex = state.workout.exercises.findIndex(
        (exercise) => exercise.id === exerciseId
      );

      if (exerciseIndex !== -1) {
        const updatedExercises = [...state.workout.exercises];
        const exercise = { ...updatedExercises[exerciseIndex] };

        const updatedSets = exercise.sets.filter((set) => set.id !== setId);

        updatedSets.forEach((set, index) => {
          set.number = index + 1;
        });
        exercise.sets = updatedSets;
        updatedExercises[exerciseIndex] = exercise;
        state.workout.exercises = updatedExercises;
      }
    },
  },
});

export const {
  addNameToWorkout,
  addExerciseNameToWorkout,
  addSetToExercise,
  deleteExercise,
  deleteSet,
  resetCreateWorkout,
} = createWorkoutSlice.actions;

export default createWorkoutSlice.reducer;
