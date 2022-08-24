import styled, { css } from "styled-components";

import spaceSize from "../../_styles/spaceSize";
import responsiveSize from "../../_styles/responsiveSize";
import contentDirection from "../../_styles/contentDirection";

const articleContentsContainerStyle = css`
  ${contentDirection.vertical};
  gap: ${spaceSize.small};
  padding: ${spaceSize.larger};

  color: ${({ theme }) => theme.color.textDefault};

  ${responsiveSize.mobile} {
    padding: ${spaceSize.medium};
  }
`;

const ArticleContentsContainer = styled.div`
  ${articleContentsContainerStyle};
`;

export default ArticleContentsContainer;
