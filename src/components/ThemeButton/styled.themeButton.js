import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  ${(props) =>
    props.theme === "dark"
      ? "color:#6365F1 !important"
      : "color:#C64A43 !important"};
`;
