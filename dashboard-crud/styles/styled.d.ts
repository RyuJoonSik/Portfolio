import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
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
      mainContentItemInputBorder: string;
      mainContentItemLoginButtonBackground: string;
      mainContentItemLoginButtonText: string;

      backgroundDefault: string;
      backgroundAccent: string;
      textDefault: string;
      textAccent: string;
      textPlaceholder: string;
      borderDefault: string;
      borderAccent: string;
    };
  }
}
