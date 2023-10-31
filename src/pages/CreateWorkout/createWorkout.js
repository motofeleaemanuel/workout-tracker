import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/layout";
import HorizontalLinearAlternativeLabelStepper from "../../components/Stepper/stepper";
import { StepperWrapper } from "../../components/WorkoutName/styled.workoutName";
import { Button } from "@mui/material";
import WorkoutName from "../../components/WorkoutName/workoutName";
import {
  InputWrapper,
  StepNavigateButtonsWrapper,
} from "./styled.createWorkout";
import AddExercise from "../../components/AddExercises/addExercises";
import { useDispatch, useSelector } from "react-redux";
import { addNameToWorkout } from "../../redux/createWorkoutSlice";
import WorkoutSummary from "../../components/WorkoutSummary/workoutSummary";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import WorkoutCreated from "../../components/WorkoutCreated/workoutCreated";

const CreateWorkout = () => {
  const { getAccessTokenSilently } = useAuth0();
  const user = useSelector((state) => state?.auth?.user);
  const workout = useSelector((state) => state?.workout);
  const [step, setStep] = useState(0);
  const [workoutName, setWorkoutName] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({ name: "" });
  const [createdSuccessfully, setCreatedSuccessfully] = useState(false);
  const dispatch = useDispatch();

  const handleWorkoutNameChange = (newValue) => {
    setWorkoutName(newValue);
  };

  const handleCreateWorkout = async () => {
    getAccessTokenSilently().then((accessToken) => {
      axios
        .post(
          "https://workout-tracker-be.onrender.com/api/workout/createWorkout",
          {
            workout: workout?.workout,
            userId: user?.user?._id,
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            setCreatedSuccessfully(true);
            setStep(step + 1);
          } else {
            setCreatedSuccessfully(false);
            setStep(step + 1);
          }
        })
        .catch((err) => {
          console.log(err);
          setCreatedSuccessfully(false);
          setStep(step + 1);
        });
    });
  };

  const handleNextStep = () => {
    if (step >= 0 && step <= 1) {
      if (step === 0)
        dispatch(addNameToWorkout({ workoutName, selectedCategory }));
      setStep(step + 1);
    }
    if (step === 2) handleCreateWorkout();
  };

  const handlePreviousStep = () => {
    if (step > 0 && step <= 2) {
      setStep(step - 1);
    }
  };
  const renderSwitch = (step) => {
    switch (step) {
      case 0:
        return (
          <WorkoutName
            setIsInputEmpty={setIsInputEmpty}
            workoutName={workoutName}
            onWorkoutNameChange={handleWorkoutNameChange}
            isInputEmpty={isInputEmpty}
            categories={categories}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        );
      case 1:
        return <AddExercise />;
      case 2:
        return <WorkoutSummary />;
      case 3:
        return (
          <WorkoutCreated
            createdSuccessfully={createdSuccessfully}
            setStep={setStep}
          />
        );
      default:
        return <WorkoutName />;
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const fetchAllCategories = () => {
      getAccessTokenSilently().then((accessToken) => {
        axios
          .get(
            `https://workout-tracker-be.onrender.com/api/category/getAllCategories`,
            {
              signal: abortController.signal,
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          )
          .then((response) => {
            if (response.status === 200) {
              setCategories(response.data);
            }
          })
          .catch((err) => {
            if (axios.isCancel(err)) {
              return;
            }
          });
      });
    };
    fetchAllCategories();
    return () => abortController.abort();
  }, []);

  return (
    <Layout>
      <StepperWrapper>
        <HorizontalLinearAlternativeLabelStepper
          step={step}
          createdSuccessfully={createdSuccessfully}
        />
      </StepperWrapper>
      <InputWrapper>
        {renderSwitch(step)}
        <StepNavigateButtonsWrapper>
          {step !== 3 && (
            <Button
              style={{
                alignSelf: "flex-start",
              }}
              variant="contained"
              onClick={handlePreviousStep}
            >
              Back
            </Button>
          )}
          {step !== 3 && (
            <Button
              style={{
                alignSelf: "flex-end",
              }}
              variant="contained"
              onClick={handleNextStep}
              disabled={
                (step === 0 && isInputEmpty) ||
                (step === 1 &&
                  (workout?.workout?.exercises.length === 0 ||
                    workout?.workout?.exercises?.some(
                      (exercise) => exercise.sets.length === 0
                    )))
              }
            >
              {step === 2 ? "Create" : "Next"}
            </Button>
          )}
        </StepNavigateButtonsWrapper>
      </InputWrapper>
    </Layout>
  );
};

export default CreateWorkout;
