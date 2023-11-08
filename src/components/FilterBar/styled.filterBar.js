import styled from "styled-components";
import { BREAKPOINTS, SIZES } from "../../theme/theme";

export const FilterBarWrapper = styled.div`
  display: flex;
  @media (max-width: ${BREAKPOINTS.large}) {
    flex-direction: column;
  }
`;

export const FilterButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: ${SIZES.large};
  @media (max-width: ${BREAKPOINTS.large}) {
    overflow-x: auto;
    min-height: 50px;
    white-space: nowrap;
    margin-bottom: ${SIZES.small};
  }
  @media (max-width: 837px) {
    justify-content: flex-start;
  }
`;

export const FilterHeaderWrapper = styled.div`
  margin-bottom: ${SIZES.medium};
`;

export const ResetButtonWrapper = styled.div`
  margin-bottom: ${SIZES.medium};
`;
