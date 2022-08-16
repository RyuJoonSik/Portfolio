import styled from "styled-components";
import { Link } from "react-router-dom";

import responsiveSize from "../../../styles/responsiveSize";
import blueButtonStyle from "../../1-atoms/Button/BlueButton";

const PageHeaderLinkButton = styled(Link)`
  ${blueButtonStyle};

  ${responsiveSize.mobile} {
    border-radius: 0;
    flex: 1;
  }
`;

export default PageHeaderLinkButton;
