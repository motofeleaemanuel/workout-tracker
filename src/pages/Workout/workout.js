import { useAuth0 } from "@auth0/auth0-react";
import { Skeleton, Typography, useTheme } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SetsTable from "../../components/SetsTable/setsTable";
import Layout from "../../components/Layout/layout";
import { convertDate } from "../../utils/convertDate";
import { baseURL } from "../../utils/baseUrl";

const Workout = () => {
  const theme = useTheme();
  const params = useParams();
  const { getAccessTokenSilently } = useAuth0();
  const [workoutData, setWorkoutData] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    const fetchWorkout = async () => {
      getAccessTokenSilently()
        .then((accessToken) => {
          axios
            .get(`${baseURL}/api/workout/getWorkout/${params.id}`, {
              signal: abortController.signal,
              headers: { Authorization: `Bearer ${accessToken}` },
            })
            .then((response) => {
              setWorkoutData(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchWorkout();
    return () => abortController.abort();
  }, []);

  return (
    <Layout>
      {workoutData ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "24px",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {workoutData?.name && workoutData?.name + "-" + " "}
              <span style={{ color: theme.palette.secondary.main }}>
                {workoutData?.createdAt && convertDate(workoutData?.createdAt)}
              </span>
            </Typography>
          </div>
          {workoutData &&
            workoutData.exercises?.map((exercise) => (
              <div key={exercise._id}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    fontWeight="bold"
                    style={{ margin: "12px 0px 12px 0px" }}
                  >
                    {exercise.name}
                  </Typography>
                </div>
                <div style={{ paddingBottom: "24px" }}>
                  <SetsTable sets={exercise?.series} readOnly={true} />
                </div>
              </div>
            ))}
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "24px",
            }}
          >
            <Skeleton width="20%">
              <Typography>.</Typography>
            </Skeleton>
          </div>
          {[1, 2, 3].map((index) => (
            <div key={index}>
              <Skeleton width="20%">
                <Typography>.</Typography>
              </Skeleton>
              <Skeleton variant="rectangular" width="100%" height={320} />
            </div>
          ))}
        </>
      )}
    </Layout>
  );
};

export default Workout;
