import React, { useState, Dispatch } from "react";
import { ThemeProvider } from "styled-components";

import { DARK_THEME, LIGHT_THEME } from "../styles/theme";

export interface ThemeContextValue {
  isLightMode: boolean;
  setIsLightMode: Dispatch<boolean>;
}

export const ThemeContext = React.createContext<ThemeContextValue | null>(null);

interface ThemeContextProviderProps {
  children?: React.ReactNode;
}

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ isLightMode, setIsLightMode }}>
      <ThemeProvider theme={isLightMode ? LIGHT_THEME : DARK_THEME}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
