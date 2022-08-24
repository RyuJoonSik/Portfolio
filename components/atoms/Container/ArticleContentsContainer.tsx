import styled, { css } from "styled-components";

import spaceSize from "../../_styles/spaceSize";
import responsiveSize from "../../_styles/responsiveSize";

const articleContentsContainerStyle = css`
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
