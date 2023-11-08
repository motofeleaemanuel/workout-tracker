import styled from "styled-components";
import { SIZES } from "../../theme/theme";

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: ${SIZES.large};
`;

export const AddExerciseFieldWrapper = styled.div`
  display: flex;
  margin-bottom: ${SIZES.large};
`;

export const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExerciseHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SetInputsWrapper = styled.div`
  display: flex;
  margin-bottom: ${SIZES.large};
`;
