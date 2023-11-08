import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import WorkoutsPieChart from "../../components/WorkoutsPieChart/workoutsPieChart";
import axios from "axios";
import { addWorkoutsToState } from "../../redux/allWorkoutsSlice";
import { Card, Grid, Typography } from "@mui/material";
import { addBodyWeightsToState } from "../../redux/allBodyWeightsSlice";
import WeightChart from "../../components/WeightChart/weightChart";
import SnackBar from "../../components/SnackBar/snackBar";
import { baseURL } from "../../utils/baseUrl";

const Dashboard = () => {
  const userId = useSelector((state) => state?.auth?.user?.user?._id);
  const workouts = useSelector((state) => state?.workouts?.workouts);
  const bodyWeights = useSelector((state) => state?.bodyWeights?.bodyWeights);
  const [error, setError] = useState({
    workoutError: {
      message: "",
    },
    bodyWeightError: {
      message: "",
    },
  });
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId) return;

    const abortController = new AbortController();

    const fetchAllWorkouts = () => {
      getAccessTokenSilently().then((accessToken) => {
        axios
          .get(`${baseURL}/api/workout/getAllWorkouts?userId=${userId}`, {
            signal: abortController.signal,
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          .then((response) => {
            if (response.status === 200) {
              dispatch(addWorkoutsToState(response.data));
            }
          })
          .catch((err) => {
            if (axios.isCancel(err)) {
              return;
            }
            if (err.response.status === 404) {
              setError((prev) => {
                return {
                  ...prev,
                  workoutError: {
                    ...prev.workoutError,
                    message: err.response.data.message,
                  },
                };
              });
            }
          });
      });
    };
    fetchAllWorkouts();
    return () => abortController.abort();
  }, [userId]);

  useEffect(() => {
    if (!userId) return;
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const response = await axios.get(
          `${baseURL}/api/bodyWeightTracker/getAllBodyWeight/${userId}`,
          {
            signal: abortController.signal,
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        const { data } = response;
        dispatch(addBodyWeightsToState(data));
      } catch (err) {
        if (axios.isCancel(err)) {
          return;
        }
        if (err.response.status === 404) {
          setError((prev) => {
            return {
              ...prev,
              bodyWeightError: {
                ...prev.bodyWeightError,
                message: err.response.data.message,
              },
            };
          });
        }
      }
    };

    if (userId) fetchData();
    return () => abortController.abort();
  }, [userId]);

  return (
    <Layout>
      {(error.bodyWeightError.message || error.workoutError.message) && (
        <SnackBar severity={"error"} error={error} />
      )}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card sx={{ padding: "24px", height: "320px" }}>
            {workouts ? (
              <>
                <Typography variant="h6" fontWeight="bold">
                  Last {workouts?.length} workouts
                </Typography>
                <WorkoutsPieChart workouts={workouts} />
              </>
            ) : (
              <Typography variant="subtitle1">No data available</Typography>
            )}
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ padding: "24px", height: "320px" }}>
            {bodyWeights && <WeightChart bodyWeights={bodyWeights} />}
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
