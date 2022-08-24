import React, { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { lightTheme } from "../components/_styles/theme";

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

interface ThemeContextValue {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

export const ThemeContext = React.createContext<ThemeContextValue>(
  {} as ThemeContextValue
);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  return (
    <ThemeContext.Provider value={{ setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
