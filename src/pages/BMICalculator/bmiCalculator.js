import React, { useState } from "react";
import Layout from "../../components/Layout/layout";
import { CustomInputField } from "../../components/WorkoutName/styled.workoutName";
import GenderRadioButtons from "../../components/GenderRadioButtons/genderRadioButtons";
import BMITable from "../../components/BMITable/bmiTable";
import { Button, Typography } from "@mui/material";
import theme from "../../theme/theme";
import {
  ButtonsWrapper,
  HeaderTextWrapper,
  InputFieldsWrapper,
  RadioButtonsWrapper,
  ResultWrapper,
} from "./styled.bmiCalculator";

const BMICalculator = () => {
  const [bmi, setBmi] = useState(0);
  const [formData, setFormData] = useState({
    age: 0,
    height: 0,
    weight: 0,
    radio: "male",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCalculateBMI = () => {
    const meterHeight = formData.height / 100;
    const calculatedBMI = formData.weight / (meterHeight * meterHeight);
    setBmi(calculatedBMI.toFixed(1));
  };

  const handleResetForm = () => {
    setFormData({ age: 0, height: 0, weight: 0, radio: "male" });
    setBmi(0);
  };

  return (
    <Layout>
      <HeaderTextWrapper>
        <Typography variant="h6" fontWeight="bold">
          Calculate your BMI
        </Typography>
      </HeaderTextWrapper>
      <CustomInputField
        style={{ marginBottom: "24px" }}
        id="outlined-basic"
        label="Age"
        name="age"
        variant="outlined"
        fullWidth
        value={formData.age}
        onChange={handleInputChange}
        type="number"
        required
      />
      <RadioButtonsWrapper>
        <GenderRadioButtons
          handleInputChange={handleInputChange}
          formData={formData}
        />
      </RadioButtonsWrapper>
      <InputFieldsWrapper>
        <CustomInputField
          style={{ paddingRight: "24px" }}
          id="outlined-basic"
          label="Weight (Kg)"
          name="weight"
          variant="outlined"
          fullWidth
          value={formData.weight}
          onChange={handleInputChange}
          type="number"
          required
        />
        <CustomInputField
          id="outlined-basic"
          label="Height (cm)"
          name="height"
          variant="outlined"
          fullWidth
          value={formData.height}
          onChange={handleInputChange}
          type="number"
          required
        />
      </InputFieldsWrapper>
      <ButtonsWrapper>
        <Button
          variant="contained"
          fullWidth
          style={{ marginRight: "12px" }}
          disabled={
            formData.age <= 0 || formData.height <= 0 || formData.weight <= 0
          }
          onClick={handleCalculateBMI}
        >
          Calculate
        </Button>
        <Button
          variant="contained"
          fullWidth
          style={{ marginLeft: "12px" }}
          onClick={handleResetForm}
        >
          Reset
        </Button>
      </ButtonsWrapper>
      <ResultWrapper>
        <Typography
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginRight: "8px",
          }}
        >
          Result:
        </Typography>
        <Typography
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Your BMI is{" "}
          <span style={{ color: theme.palette.secondary.main }}>{bmi}</span>
        </Typography>
      </ResultWrapper>
      <BMITable />
    </Layout>
  );
};

export default BMICalculator;
