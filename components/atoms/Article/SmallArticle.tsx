import styled, { css } from "styled-components";

import spaceSize from "../../_styles/spaceSize";

const smallArticlestyle = css`
  width: 100%;
  max-width: 402px;
  border-radius: ${spaceSize.small};
  background-color: ${({ theme }) => theme.color.backgroundAccent};
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.12),
    0px 2px 2px -1px rgba(0, 0, 0, 0.05);
`;

const SmallArticle = styled.article`
  ${smallArticlestyle};
`;

export default SmallArticle;
