import { PieChart } from "@mui/x-charts";
import styled from "styled-components";
import { BREAKPOINTS } from "../../theme/theme";

export const CustomPieChart = styled(PieChart)`
  @media (max-width: ${BREAKPOINTS.large}) {
    width: 400;
  }
`;
