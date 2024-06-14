// theme.tsx

import { extendTheme } from "@chakra-ui/react";

export const lightTheme = extendTheme({
  colors: {
    primary: "#1976d2",
    secondary: "#dc004e",
    background: "#ffffff",
    text: "#333333",
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
});

export const darkTheme = extendTheme({
  colors: {
    primary: "#90caf9",
    secondary: "#f48fb1",
    background: "#7f7f7f",
    text: "#ffffff",
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
});

export type ThemeMode = "light" | "dark";
