"use client";
import { Noto_Sans } from "next/font/google";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const customFont = Noto_Sans({ subsets: ["latin"] });

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: `${customFont.style.fontFamily}, sans-serif`,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#02e060",
    },
    secondary: {
      main: "#c1c1c1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
};

export const supersimpleTheme = createTheme(themeOptions);
