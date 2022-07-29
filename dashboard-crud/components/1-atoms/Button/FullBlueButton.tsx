import styled from "styled-components";

import BUTTON_STYLE from "./_mixins";

const FullBlueButton = styled.button`
  ${BUTTON_STYLE.DEFAULT};
  ${BUTTON_STYLE.SIZE.FULL};
  ${BUTTON_STYLE.COLOR.BLUE};
  ${BUTTON_STYLE.EFFECT.BLUE}
`;

export default FullBlueButton;
