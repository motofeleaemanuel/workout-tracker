import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice";
import createWorkoutReducer from "./redux/createWorkoutSlice";
import allWorkoutsReducer from "./redux/allWorkoutsSlice";
import allBodyWeightsReducer from "./redux/allBodyWeightsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    workout: createWorkoutReducer,
    workouts: allWorkoutsReducer,
    bodyWeights: allBodyWeightsReducer,
  },
});
