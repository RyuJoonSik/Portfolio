import {
  css,
  FlattenInterpolation,
  ThemedStyledProps,
} from "styled-components";

export function setHoverEffect(
  newCSS: FlattenInterpolation<ThemedStyledProps<any, any>>
) {
  return css`
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        ${newCSS}
      }
    }
  `;
}
