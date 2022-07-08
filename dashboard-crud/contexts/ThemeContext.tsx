import React, { useState, Dispatch } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../styles/theme";

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
      <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
