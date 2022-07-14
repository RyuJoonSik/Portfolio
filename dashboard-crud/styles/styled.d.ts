import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      headerBackground: string;
      headerTitleBackground: string;
      headerTitleText: string;
      headerButton: string;
      headerButtonPseudoElement: string;
      headerButtonHover: string;
      headerButtonIcon: string;
      headerButtonText: string;

      mainIcon: string;
      mainBackground: string;
      mainTitleBackground: string;
      mainTitleText: string;
      mainTitleBorder: string;
      mainContentItemTitleBackground: string;
      mainContentItemTitleBorder: string;
      mainContentItemTitleText: string;
      mainContentItemContentBackground: string;
      mainContentItemContentText: string;
    };
  }
}
