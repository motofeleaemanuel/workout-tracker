import React from "react";
import { useTheme } from "../../theme/ThemeContextProvider";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { StyledButton } from "./styled.themeButton";

const ThemeButton = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <StyledButton onClick={toggleTheme} theme={theme}>
      <Brightness7Icon />
    </StyledButton>
  );
};

export default ThemeButton;
