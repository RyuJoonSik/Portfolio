import styled from "styled-components";
import BORDER_RADIUS from "../../../styles/borderRadius";

import FONT_SIZE from "../../../styles/fontSize";
import RESPONSIVE_SIZE from "../../../styles/responsiveSize";
import BlueButton from "./BlueButton";

const MediumBlueButton = styled(BlueButton)`
  ${FONT_SIZE.SMALLEST};
  min-width: 5rem;

  ${RESPONSIVE_SIZE.MOBILE} {
    ${BORDER_RADIUS.NONE}
    flex: 1;
  }
`;

export default MediumBlueButton;
