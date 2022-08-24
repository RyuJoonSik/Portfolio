import styled, { css } from "styled-components";

export const whiteButtonStyle = css`
  background-color: ${({ theme }) => theme.color.backgroundAccent};
  color: ${({ theme }) => theme.color.textAccent};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.color.backgroundHover};
    }
  }
`;

export default styled.button`
  ${whiteButtonStyle};
`;
