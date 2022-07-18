import { DefaultTheme } from "styled-components";

const BLUE = {
  light: "rgb(118, 143, 255)",
  base: "rgb(41, 98, 255)",
  dark: "rgb(0, 57, 203)",
};

const WHITE = {
  light: "rgb(255, 255, 255)",
  base: "rgb(245, 245, 245)",
  dark: "rgb(204, 204, 204)",
};

const BLACK = {
  light: "rgb(71, 71, 71)",
  base: "rgb(44, 44, 44)",
  dark: "rgb(39, 39, 39)",
};

export const lightTheme: DefaultTheme = {
  color: {
    headerBackground: BLUE.base,
    headerTitleBackground: BLUE.base,
    headerTitleText: WHITE.light,
    headerButton: BLUE.base,
    headerButtonPseudoElement: BLUE.dark,
    headerButtonHover: BLUE.light,
    headerButtonIcon: WHITE.light,
    headerButtonText: WHITE.light,

    mainIcon: BLACK.base,
    mainBackground: WHITE.base,
    mainTitleBackground: WHITE.base,
    mainTitleText: BLACK.dark,
    mainTitleBorder: WHITE.dark,
    mainContentItemTitleBackground: WHITE.light,
    mainContentItemTitleBorder: WHITE.dark,
    mainContentItemTitleText: BLACK.dark,
    mainContentItemContentBackground: WHITE.light,
    mainContentItemContentText: BLACK.base,
    mainContentItemInputBorder: WHITE.dark,
    mainContentItemLoginButtonBackground: BLUE.base,
    mainContentItemLoginButtonText: WHITE.light,
  },
};

export const darkTheme: DefaultTheme = {
  color: {
    headerBackground: BLUE.base,
    headerTitleBackground: BLUE.base,
    headerTitleText: WHITE.light,
    headerButton: BLUE.base,
    headerButtonPseudoElement: BLUE.dark,
    headerButtonHover: BLUE.light,
    headerButtonIcon: WHITE.light,
    headerButtonText: WHITE.light,

    mainIcon: WHITE.base,
    mainBackground: BLACK.dark,
    mainTitleBackground: BLACK.dark,
    mainTitleText: WHITE.light,
    mainTitleBorder: BLACK.light,
    mainContentItemTitleBackground: BLACK.base,
    mainContentItemTitleBorder: BLACK.light,
    mainContentItemTitleText: WHITE.light,
    mainContentItemContentBackground: BLACK.base,
    mainContentItemContentText: WHITE.dark,
    mainContentItemInputBorder: BLACK.light,
    mainContentItemLoginButtonBackground: BLUE.base,
    mainContentItemLoginButtonText: WHITE.light,
  },
};
