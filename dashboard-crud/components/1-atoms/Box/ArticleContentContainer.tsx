import styled from "styled-components";

import spaceSize from "../../../styles/spaceSize";
import responsiveSize from "../../../styles/responsiveSize";

const ArticleContentContainer = styled.div`
  padding: ${spaceSize.larger};

  color: ${({ theme }) => theme.color.textDefault};

  ${responsiveSize.mobile} {
    padding: ${spaceSize.medium};
  }
`;

export default ArticleContentContainer;
