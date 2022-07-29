import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
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
