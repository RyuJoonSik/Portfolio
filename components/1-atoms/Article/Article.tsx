import styled, { css } from "styled-components";

import spaceSize from "../../../styles/spaceSize";

const style = css`
  width: 100%;
  border-radius: ${spaceSize.small};
  background-color: ${({ theme }) => theme.color.backgroundAccent};
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.12),
    0px 2px 2px -1px rgba(0, 0, 0, 0.05);
`;

const Article = {
  Small: styled.article`
    ${style};
    max-width: 402px;
  `,

  Full: styled.article`
    ${style};
  `,
};

export default Article;
