import styled from "styled-components";
import { SIZES } from "../../theme/theme";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StepNavigateButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: ${SIZES.large};
`;
