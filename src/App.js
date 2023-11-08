import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import Navbar from "./components/Navbar/navbar";
import Dashboard from "./pages/Dashboard/dashboard";
import AllWorkouts from "./pages/AllWorkouts/allWorkouts";
import WeightTracker from "./pages/WeightTracker/weightTracker";
import BMICalculator from "./pages/BMICalculator/bmiCalculator";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signIn } from "./redux/authSlice";
import CreateWorkout from "./pages/CreateWorkout/createWorkout";
import WithAuthentication from "./components/WithAuth/withAuth";
import Workout from "./pages/Workout/workout";
import { baseURL } from "./utils/baseUrl";

function App() {
  const { isLoading, user, isAuthenticated, getAccessTokenSilently } =
    useAuth0();
  const dispatch = useDispatch();
  const [isCreatingUser, setIsCreatingUser] = useState(true);

  const userCreated = localStorage.getItem("userCreated");

  useEffect(() => {
    if (isAuthenticated && !userCreated) {
      const { given_name, family_name, email, picture } = user;
      getAccessTokenSilently()
        .then((accessToken) => {
          axios
            .post(
              `${baseURL}/api/user/createUser`,
              {
                given_name,
                family_name,
                email,
                picture,
              },
              {
                headers: { Authorization: `Bearer ${accessToken}` },
              }
            )
            .then((response) => {
              localStorage.setItem("userCreated", "true");
              dispatch(signIn(response.data));
              setIsCreatingUser(false);
            })
            .catch((err) => {
              console.log(err);
              setIsCreatingUser(false);
            });
        })
        .catch((err) => {
          console.log(err);
          setIsCreatingUser(false);
        });
    }
  }, [isAuthenticated, userCreated]);

  if (isLoading) {
    return null;
  }

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route
          path="/dashboard"
          element={
            isAuthenticated &&
            userCreated && (
              <WithAuthentication>
                <Dashboard />
              </WithAuthentication>
            )
          }
        />

        <Route
          path="/"
          element={
            isAuthenticated && isCreatingUser ? null : isAuthenticated &&
              !isCreatingUser ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/createWorkout"
          element={
            isAuthenticated ? (
              <WithAuthentication>
                <CreateWorkout />
              </WithAuthentication>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/allWorkouts"
          element={
            isAuthenticated ? (
              <WithAuthentication>
                <AllWorkouts />
              </WithAuthentication>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/weightTracker"
          element={
            isAuthenticated ? (
              <WithAuthentication>
                <WeightTracker />
              </WithAuthentication>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/bmiCalculator"
          element={isAuthenticated ? <BMICalculator /> : <Navigate to="/" />}
        />
        <Route
          path="/allWorkouts/:id"
          element={isAuthenticated ? <Workout /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
