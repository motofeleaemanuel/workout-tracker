import { createContext, useContext, useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext();

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#1d1c1a",
    },
    secondary: {
      main: "#6365F1",
    },
    error: {
      main: "#ed665c",
    },
    success: {
      main: "#5ced88",
    },
    disabled: {
      main: "#A6A6A6",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: "14px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          paddingLeft: "2px",
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#1d1c1a",
    },
    secondary: {
      main: "#C64A43",
    },
    error: {
      main: "#ff8f8a",
    },
    success: {
      main: "#8affb4",
    },
    disabled: {
      main: "#505050",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: "14px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          paddingLeft: "2px",
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  };
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        <MuiThemeProvider theme={currentTheme}>{children}</MuiThemeProvider>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
