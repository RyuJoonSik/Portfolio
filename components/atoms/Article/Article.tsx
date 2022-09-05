import styled, { css } from "styled-components";

import spaceSize from "../../_styles/spaceSize";

interface Article {
  size?: "small" | "full";
}

export const articleStyle = css<Article>`
  width: 100%;
  max-width: ${(props) => (props.size === "small" ? "402px" : "initial")};
  border-radius: ${spaceSize.small};
  background-color: ${({ theme }) => theme.color.backgroundAccent};
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.12),
    0px 2px 2px -1px rgba(0, 0, 0, 0.05);

  color: ${({ theme }) => theme.color.textDefault};
`;

const Article = styled.article<Article>`
  ${articleStyle}
`;

export default Article;
