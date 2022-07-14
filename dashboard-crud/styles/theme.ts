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
  silverSand: "187, 192, 199",

  black: "0, 0, 0",
  gunmetal: "36, 44, 58",
  eerieBlack: "18, 23, 30",
  darkGunmetal: "24, 30, 43",
  outerSpace: "48, 56, 72",
  arsenic: "67, 67, 67",
};

export const darkTheme: DefaultTheme = {
  color: {
    headerBackground: color.ultramarineBlue,
    headerTitleBackground: color.ultramarineBlue,
    headerTitleText: color.white,
    headerButton: color.ultramarineBlue,
    headerButtonPseudoElement: color.cornflowerBlue,
    headerButtonHover: color.blueberry,
    headerButtonIcon: color.white,
    headerButtonText: color.white,

    mainIcon: color.white,
    mainBackground: color.darkGunmetal,
    mainTitleBackground: color.darkGunmetal,
    mainTitleText: color.white,
    mainTitleBorder: color.arsenic,
    mainContentItemTitleBackground: color.gunmetal,
    mainContentItemTitleBorder: color.arsenic,
    mainContentItemTitleText: color.white,
    mainContentItemContentBackground: color.gunmetal,
    mainContentItemContentText: color.silverSand,
  },
};

export const lightTheme: DefaultTheme = {
  color: {
    headerBackground: color.ultramarineBlue,
    headerTitleBackground: color.ultramarineBlue,
    headerTitleText: color.white,
    headerButton: color.ultramarineBlue,
    headerButtonPseudoElement: color.cornflowerBlue,
    headerButtonHover: color.blueberry,
    headerButtonIcon: color.white,
    headerButtonText: color.white,

    mainIcon: color.eerieBlack,
    mainBackground: color.antiFlashWhite,
    mainTitleBackground: color.antiFlashWhite,
    mainTitleText: color.eerieBlack,
    mainTitleBorder: color.chineseWhite,
    mainContentItemTitleBackground: color.white,
    mainContentItemTitleBorder: color.chineseWhite,
    mainContentItemTitleText: color.eerieBlack,
    mainContentItemContentBackground: color.white,
    mainContentItemContentText: color.gunmetal,
  },
};
