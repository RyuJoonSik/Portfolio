import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // color: {
    //   ultramarineBlue: string;
    //   blueberry: string;
    //   jordyBlue: string;
    //   cornflowerBlue: string;
    //   white: string;
    //   cultured: string;
    //   chineseWhite: string;
    //   antiFlashWhite: string;
    //   black: string;
    //   gunmetal: string;
    //   eerieBlack: string;
    // };
    color: {
      headerBackground: string;
      headerText: string;
      headerButtonIcon: string;
      headerButtonText: string;
      mainBackground: string;
      mainTitleBackground: string;
      mainTitleText: string;
      mainTitleBorder: string;
      mainContentItemTitleBackground: string;
      mainContentItemTitleText: string;
      mainContentItemContentBackground: string;
      mainContentItemContentText: string;
    };
  }
}
