import styled from "styled-components";

import contentAlign from "../../../styles/contentAlign";
import contentDirection from "../../../styles/contentDirection";
import responsiveSize from "../../../styles/responsiveSize";
import spaceSize from "../../../styles/spaceSize";

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
