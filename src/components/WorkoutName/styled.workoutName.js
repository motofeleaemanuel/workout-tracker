import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { SIZES } from "../../theme/theme";
import { Button } from "@mui/material";

export const StepperWrapper = styled.div`
  margin-bottom: ${SIZES.extraLarge};
`;

export const CustomInputField = styled(TextField)`
  flex: 1;
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #f5f5f5 inset;
  }
`;

export const BackButton = styled(Button)``;
