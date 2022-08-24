import styled from "styled-components";

import contentDirection from "../../_styles/contentDirection";
import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import responsiveSize from "../../_styles/responsiveSize";

const desktopHeaderHeight = "82px";
const mobileHeaderHeight = "36px";
const mobileHeaderButtonsBoxHeight = "62px";

const PageContentsContainer = styled.div`
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

export default PageContentsContainer;
