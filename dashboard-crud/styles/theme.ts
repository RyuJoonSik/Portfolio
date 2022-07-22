import { DefaultTheme } from "styled-components";
import { BLACK, BLUE, WHITE } from "./color";

export const LIGHT_THEME: DefaultTheme = {
  color: {
    mainIcon: BLACK.DEFAULT,
    mainBackground: WHITE.DEFAULT,
    mainTitleBackground: WHITE.DEFAULT,
    mainTitleText: BLACK.DARK,
    mainTitleBorder: WHITE.DARK,
    mainContentItemTitleBackground: WHITE.LIGHT,
    mainContentItemTitleBorder: WHITE.DARK,
    mainContentItemTitleText: BLACK.DARK,
    mainContentItemContentBackground: WHITE.LIGHT,
    mainContentItemContentText: BLACK.DEFAULT,
    mainContentItemInputBorder: WHITE.DARK,
    mainContentItemLoginButtonBackground: BLUE.DEFAULT,
    mainContentItemLoginButtonText: WHITE.LIGHT,

    backgroundDefault: WHITE.DEFAULT,
    backgroundAccent: WHITE.LIGHT,
    textDefault: BLACK.DEFAULT,
    textAccent: BLACK.DARK,
    textPlaceholder: WHITE.DARK,
    borderDefault: WHITE.DARK,
    borderAccent: BLACK.DARK,
  },
};

export const DARK_THEME: DefaultTheme = {
  color: {
    mainIcon: WHITE.DEFAULT,
    mainBackground: BLACK.DARK,
    mainTitleBackground: BLACK.DARK,
    mainTitleText: WHITE.LIGHT,
    mainTitleBorder: BLACK.LIGHT,
    mainContentItemTitleBackground: BLACK.DEFAULT,
    mainContentItemTitleBorder: BLACK.LIGHT,
    mainContentItemTitleText: WHITE.LIGHT,
    mainContentItemContentBackground: BLACK.DEFAULT,
    mainContentItemContentText: WHITE.DARK,
    mainContentItemInputBorder: BLACK.LIGHT,
    mainContentItemLoginButtonBackground: BLUE.DEFAULT,
    mainContentItemLoginButtonText: WHITE.LIGHT,

    backgroundDefault: BLACK.DARK,
    backgroundAccent: BLACK.DEFAULT,
    textDefault: WHITE.DARK,
    textAccent: WHITE.LIGHT,
    textPlaceholder: BLACK.LIGHT,
    borderDefault: BLACK.LIGHT,
    borderAccent: WHITE.LIGHT,
  },
};
