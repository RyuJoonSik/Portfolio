import { DefaultTheme } from "styled-components";
import { BLACK, BLUE, WHITE } from "./color";

export const LIGHT_THEME: DefaultTheme = {
  color: {
    backgroundDefault: WHITE.DEFAULT,
    backgroundAccent: WHITE.LIGHT,
    textDefault: BLACK.DEFAULT,
    textAccent: BLACK.DARK,
    textPlaceholder: WHITE.DARK,
    borderDefault: WHITE.DARK,
    borderAccent: BLUE.DARK,
  },
};

export const DARK_THEME: DefaultTheme = {
  color: {
    backgroundDefault: BLACK.DARK,
    backgroundAccent: BLACK.DEFAULT,
    textDefault: WHITE.DARK,
    textAccent: WHITE.LIGHT,
    textPlaceholder: BLACK.LIGHT,
    borderDefault: BLACK.LIGHT,
    borderAccent: BLUE.LIGHT,
  },
};
