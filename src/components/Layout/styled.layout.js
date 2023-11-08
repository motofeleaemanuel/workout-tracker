import styled from "styled-components";
import { BREAKPOINTS, SIZES } from "../../theme/theme";

export const LayoutContainer = styled.div`
  max-width: ${BREAKPOINTS.extraLarge};
  margin: auto;
  height: calc(100vh - 65px);
`;

export const LayoutNoWidth = styled.div`
  background-color: white;
`;

export const LayoutChildrenWrapper = styled.div`
  padding: ${SIZES.large} ${SIZES.small} 0px ${SIZES.small};
`;
