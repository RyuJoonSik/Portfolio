import styled from "styled-components";
import { Link } from "react-router-dom";

import responsiveSize from "../../../styles/responsiveSize";
import contentDirection from "../../../styles/contentDirection";
import contentAlign from "../../../styles/contentAlign";
import spaceSize from "../../../styles/spaceSize";
import fontSize from "../../../styles/fontSize";
import { blueButtonStyle } from "./Button";

const PageHeaderLinkButton = styled(Link)`
  ${blueButtonStyle};
  ${contentDirection.vertical};
  ${contentAlign.center};
  min-width: 5rem;
  width: 5rem;
  padding: ${spaceSize.small} 0;
  border-radius: ${spaceSize.smaller};

  ${fontSize.smaller};

  ${responsiveSize.mobile} {
    border-radius: 0;
    flex: 1;
  }
`;

export default PageHeaderLinkButton;
