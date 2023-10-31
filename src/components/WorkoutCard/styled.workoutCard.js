import { Paper } from "@mui/material";
import styled from "styled-components";

export const HeaderTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export const WorkoutCardContainer = styled(Paper)`
  height: 350px;
  display: flex;
  flexdirection: column;
  transition: background 0.3s;
  &:hover {
    cursor: pointer;
    outline: 2px solid #dbdbdb;
  }
`;
