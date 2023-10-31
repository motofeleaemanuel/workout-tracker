import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: "",
};

export const allWorkoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    addWorkoutsToState: (state, action) => {
      state.workouts = [...action.payload];
    },
    clearWorkouts: () => {
      return { ...initialState };
    },
  },
});

export const { addWorkoutsToState, clearWorkouts } = allWorkoutsSlice.actions;

export default allWorkoutsSlice.reducer;
