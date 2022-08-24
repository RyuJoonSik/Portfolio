import { DefaultTheme } from "styled-components";
import { black, blue, white } from "./color";

export const lightTheme: DefaultTheme = {
  name: "lightMode",
  color: {
    backgroundDefault: white.default,
    backgroundAccent: white.light,
    backgroundHover: white.dark,
    textDefault: black.default,
    textAccent: black.dark,
    textPlaceholder: white.dark,
    textFocus: blue.dark,
    borderDefault: white.dark,
    borderFocus: blue.dark,
  },
};

export const darkTheme: DefaultTheme = {
  name: "darkMode",
  color: {
    backgroundDefault: black.dark,
    backgroundAccent: black.default,
    backgroundHover: black.light,
    textDefault: white.dark,
    textAccent: white.light,
    textPlaceholder: black.light,
    textFocus: blue.light,
    borderDefault: black.light,
    borderFocus: blue.light,
  },
};
