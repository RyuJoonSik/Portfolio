import { DefaultTheme } from "styled-components";

const color = {
  ultramarineBlue: "51, 102, 255",
  blueberry: "81 ,125, 255",
  jordyBlue: "143, 170, 251",
  cornflowerBlue: "102, 140, 255",
  white: "255, 255, 255",
  cultured: "245, 245, 245",
  chineseWhite: "224, 224, 224",
  antiFlashWhite: "240, 242, 248",
  black: "0, 0, 0",
  gunmetal: "36, 44, 58",
  eerieBlack: "18, 23, 30",
};

export const lightTheme = {
  headerBackground: color.ultramarineBlue,
  headerText: color.white,
  headerButtonIcon: color.white,
  headerButtonText: color.white,
  mainBackground: color.antiFlashWhite,
  mainTitleBackground: color.antiFlashWhite,
  mainTitleText: color.eerieBlack,
  mainTitleBorder: color.chineseWhite,
  mainContentItemTitleBackground: color.white,
  mainContentItemTitleText: color.eerieBlack,
  mainContentItemContentBackground: color.white,
  mainContentItemContentText: color.gunmetal,
};

export const darkTheme = {
  headerBackground: color.ultramarineBlue,
  secondaryBase: color.white,
};

export const theme: DefaultTheme = {
  color: {
    ultramarineBlue: "51, 102, 255",
    blueberry: "81 ,125, 255",
    jordyBlue: "143, 170, 251",
    cornflowerBlue: "102, 140, 255",
    white: "255, 255, 255",
    cultured: "245, 245, 245",
    chineseWhite: "224, 224, 224",
    antiFlashWhite: "240, 242, 248",
    black: "0, 0, 0",
    gunmetal: "36, 44, 58",
    eerieBlack: "18, 23, 30",
  },
};

export default theme;
