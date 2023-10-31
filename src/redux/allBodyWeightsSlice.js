import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bodyWeights: [],
};

export const allBodyWeightsSlice = createSlice({
  name: "bodyWeights",
  initialState,
  reducers: {
    addBodyWeightsToState: (state, action) => {
      state.bodyWeights = [...action.payload];
    },
    addNewBodyWeightToState: (state, action) => {
      state.bodyWeights.push(action.payload);
    },
    deleteBodyWeightFromState: (state, action) => {
      const { id } = action.payload;
      const filteredBodyWeights = state.bodyWeights.filter(
        (bodyWeight) => bodyWeight._id !== id
      );
      state.bodyWeights = filteredBodyWeights;
    },
    clearBodyWeights: () => {
      return { ...initialState };
    },
  },
});

export const {
  addBodyWeightsToState,
  clearBodyWeights,
  addNewBodyWeightToState,
  deleteBodyWeightFromState,
} = allBodyWeightsSlice.actions;

export default allBodyWeightsSlice.reducer;
