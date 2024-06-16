// theme.tsx

import { extendTheme } from "@chakra-ui/react";

export const lightTheme = extendTheme({
  colors: {
    primary: "#007C52",
    secondary: "#012D21",
    background: "#ffffff",
    button:"#007C52",
    text: "#013220",
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
});

export const darkTheme = extendTheme({
  colors: {
    primary: "#013220",
    secondary: "#012D21",
    background: "#7f7f7f",
    button:"#007C52",
    text: "#ffffff",
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
});

export type ThemeMode = "light" | "dark";
