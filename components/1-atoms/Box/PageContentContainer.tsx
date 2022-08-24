import styled from "styled-components";

import contentDirection from "../../../styles/contentDirection";
import contentAlign from "../../../styles/contentAlign";
import spaceSize from "../../../styles/spaceSize";
import responsiveSize from "../../../styles/responsiveSize";

const desktopHeaderHeight = "82px";
const mobileHeaderHeight = "36px";
const mobileHeaderButtonsBoxHeight = "62px";

const PageContentContainer = styled.div`
  ${contentDirection.horizontal};
  ${contentAlign.centerStart};
  box-sizing: border-box;
  min-height: 100%;
  padding: ${desktopHeaderHeight} ${spaceSize.larger};

  ${responsiveSize.mobile} {
    padding: ${mobileHeaderHeight} ${spaceSize.medium}
      ${mobileHeaderButtonsBoxHeight} ${spaceSize.medium};
  }
`;

export default PageContentContainer;
