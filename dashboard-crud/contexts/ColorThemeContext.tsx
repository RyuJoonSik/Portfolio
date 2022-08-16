import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { DARK_THEME, LIGHT_THEME } from "../styles/theme";

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
      <ThemeProvider theme={isDarkMode ? DARK_THEME : LIGHT_THEME}>
        {children}
      </ThemeProvider>
    </ColorThemeContext.Provider>
  );
}
