import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/layout";
import SearchInput from "../../components/SearchInput/searchInput";
import CardsLayout from "../../components/CardsLayout/cardsLayout";
import FilterBar from "../../components/FilterBar/filterBar";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addWorkoutsToState,
  clearWorkouts,
} from "../../redux/allWorkoutsSlice";
import SnackBar from "../../components/SnackBar/snackBar";

const AllWorkouts = () => {
  const userId = useSelector((state) => state?.auth?.user?.user?._id);
  const { getAccessTokenSilently } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ message: "" });
  const [activeFilterButton, setActiveFilterButton] = useState(null);
  const [reset, setReset] = useState(false);
  const dispatch = useDispatch();

  const handleOnButtonSearchQuery = (name, searchQuery) => {
    if (searchQuery !== null && searchQuery.trim() === "") return;
    name ? setActiveFilterButton(name) : setActiveFilterButton(null);
    getAccessTokenSilently().then((accessToken) => {
      const encodedCategory = encodeURIComponent(name);
      const encodedSearchQuery = encodeURIComponent(searchQuery);
      axios
        .get(
          `https://workout-tracker-be.onrender.com/api/workout/getAllWorkouts?userId=${userId}&category=${encodedCategory}&searchQuery=${encodedSearchQuery}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then((response) => {
          setIsLoading(false);
          if (response.status === 200) {
            dispatch(addWorkoutsToState(response.data));
          }
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            return;
          }
          if (err.response.status === 404) {
            setError({ message: err.response.data.message });
          }
          setIsLoading(false);
          dispatch(clearWorkouts());
        });
    });
  };

  useEffect(() => {
    setReset(false);
    if (!userId) return;
    const abortController = new AbortController();

    const fetchAllWorkouts = () => {
      getAccessTokenSilently().then((accessToken) => {
        axios
          .get(
            `https://workout-tracker-be.onrender.com/api/workout/getAllWorkouts?userId=${userId}`,
            {
              signal: abortController.signal,
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          )
          .then((response) => {
            if (response.status === 200) {
              setIsLoading(false);
              dispatch(addWorkoutsToState(response.data));
            }
          })
          .catch((err) => {
            if (axios.isCancel(err)) {
              return;
            }
            if (err.response.status === 404) {
              setError({ message: err.response.data.message });
            }
            setIsLoading(false);
          });
      });
    };
    fetchAllWorkouts();
    return () => abortController.abort();
  }, [userId, reset]);

  return (
    <Layout>
      {error.message && <SnackBar error={error} severity={"error"} />}
      <SearchInput handleOnButtonSearchQuery={handleOnButtonSearchQuery} />
      <FilterBar
        handleOnButtonSearchQuery={handleOnButtonSearchQuery}
        setReset={setReset}
        activeFilterButton={activeFilterButton}
        setActiveFilterButton={setActiveFilterButton}
      />
      <CardsLayout isLoading={isLoading} />
    </Layout>
  );
};

export default AllWorkouts;
