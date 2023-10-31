import React, { useState } from "react";
import { CustomInputField } from "../WorkoutName/styled.workoutName";
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addNewBodyWeightToState } from "../../redux/allBodyWeightsSlice";

const WeightTrackerInput = () => {
  const [bodyWeight, setBodyWeight] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.auth?.user);
  const { getAccessTokenSilently } = useAuth0();

  const handleAddWeightToTracker = async () => {
    getAccessTokenSilently().then((accessToken) => {
      axios
        .post(
          "https://workout-tracker-be.onrender.com/api/bodyWeightTracker/addBodyWeight",
          {
            bodyWeight,
            userId: user?.user?._id,
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then((response) => {
          dispatch(addNewBodyWeightToState(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div style={{ display: "flex", marginBottom: "24px" }}>
      <CustomInputField
        id="outlined-basic"
        type="number"
        label="Type your body weight"
        variant="outlined"
        fullWidth
        onChange={(e) => setBodyWeight(e.target.value)}
        value={bodyWeight}
      />

      <Button
        variant="contained"
        style={{ marginLeft: "12px" }}
        onClick={handleAddWeightToTracker}
      >
        Add
      </Button>
    </div>
  );
};

export default WeightTrackerInput;
