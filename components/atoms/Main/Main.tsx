import styled from "styled-components";

import contentAlign from "../../_styles/contentAlign";
import contentDirection from "../../_styles/contentDirection";
import responsiveSize from "../../_styles/responsiveSize";
import spaceSize from "../../_styles/spaceSize";

const Main = styled.main`
  ${contentDirection.vertical};
  ${contentAlign.startCenter};
  gap: ${spaceSize.larger};
  width: 100%;
  max-width: 1020px;

  ${responsiveSize.mobile} {
    gap: ${spaceSize.medium};
  }
`;

export default Main;
