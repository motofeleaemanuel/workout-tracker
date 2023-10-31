import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/layout";
import WeightTrackerTable from "../../components/WeightTrackerTable/weightTrackerTable";
import WeightTrackerInput from "../../components/WeightTrackerInput/weightTrackerInput";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addBodyWeightsToState,
  deleteBodyWeightFromState,
} from "../../redux/allBodyWeightsSlice";
import WeightChart from "../../components/WeightChart/weightChart";
import SnackBar from "../../components/SnackBar/snackBar";

const WeightTracker = () => {
  const { getAccessTokenSilently } = useAuth0();
  const userId = useSelector((state) => state?.auth?.user?.user?._id);
  const bodyWeights = useSelector((state) => state?.bodyWeights?.bodyWeights);
  const [error, setError] = useState({ message: "" });
  const dispatch = useDispatch();

  const handleDeleteBodyWeight = async (id) => {
    try {
      const accessToken = await getAccessTokenSilently();
      await axios.delete(
        `https://workout-tracker-be.onrender.com/api/bodyWeightTracker/deleteBodyWeight/${id}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      dispatch(deleteBodyWeightFromState({ id }));
    } catch (error) {
      if (axios.isCancel(error)) {
        return;
      }
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const response = await axios.get(
          `https://workout-tracker-be.onrender.com/api/bodyWeightTracker/getAllBodyWeight/${userId}`,
          {
            signal: abortController.signal,
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        const { data } = response;
        dispatch(addBodyWeightsToState(data));
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        if (error.response.status === 404) {
          setError({ message: error.response.data.message });
        }
      }
    };

    if (userId) fetchData();
    return () => abortController.abort();
  }, [userId]);

  return (
    <Layout>
      {error.message && <SnackBar error={error} severity={"error"} />}
      <WeightTrackerInput />
      <WeightTrackerTable
        bodyWeights={bodyWeights}
        handleDeleteBodyWeight={handleDeleteBodyWeight}
      />
      <WeightChart bodyWeights={bodyWeights} />
    </Layout>
  );
};

export default WeightTracker;
