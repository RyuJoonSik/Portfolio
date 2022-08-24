import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
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
