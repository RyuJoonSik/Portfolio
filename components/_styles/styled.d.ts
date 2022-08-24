import "styled-components";

type ThemeName = "lightTheme" | "darkTheme";

declare module "styled-components" {
  export interface DefaultTheme {
    name: ThemeName;
    color: {
      backgroundDefault: string;
      backgroundAccent: string;
      backgroundHover: string;
      textDefault: string;
      textAccent: string;
      textFocus: string;
      textPlaceholder: string;
      borderDefault: string;
      borderFocus: string;
    };
  }
}
