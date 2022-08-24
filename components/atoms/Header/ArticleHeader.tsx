import styled, { css } from "styled-components";

import contentAlign from "../../_styles/contentAlign";
import contentDirection from "../../_styles/contentDirection";
import responsiveSize from "../../_styles/responsiveSize";
import spaceSize from "../../_styles/spaceSize";

const articleHeaderStyle = css`
  ${contentDirection.horizontal};
  ${contentAlign.spaceBetweenCenter};
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  padding: ${spaceSize.larger};
  border-bottom: ${spaceSize.smallest}
    ${({ theme }) => theme.color.borderDefault} solid;

  color: ${({ theme }) => theme.color.textAccent};

  ${responsiveSize.mobile} {
    padding: ${spaceSize.medium};
  }
`;

const ArticleHeader = styled.header`
  ${articleHeaderStyle};
`;

export default ArticleHeader;
