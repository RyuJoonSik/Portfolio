import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../styles/theme";

interface ColorThemeContextProviderProps {
  children: React.ReactNode;
}

interface ColorThemeContextValue {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ColorThemeContext = React.createContext<ColorThemeContextValue>(
  {} as ColorThemeContextValue
);

export default function ColorThemeContextProvider({
  children,
}: ColorThemeContextProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ColorThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ColorThemeContext.Provider>
  );
}
