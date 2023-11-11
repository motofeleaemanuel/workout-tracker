import { createTheme } from "@mui/material";
import React, { useState } from "react";
import theme from "./theme";

const useColorTheme = () => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  const modifiedTheme = React.useMemo(() => createTheme(theme(mode)), [mode]);

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};

export default useColorTheme;
