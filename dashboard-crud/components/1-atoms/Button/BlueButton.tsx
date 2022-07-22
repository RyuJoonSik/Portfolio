import styled from "styled-components";

import BORDER_RADIUS from "../../../styles/borderRadius";
import { BLUE, WHITE } from "../../../styles/color";
import CONTENT_ALIGN from "../../../styles/contentAlign";
import CONTENT_DIRECTION from "../../../styles/contentDirection";

const BlueButton = styled.button`
  ${CONTENT_DIRECTION.VERTICAL};
  ${CONTENT_ALIGN.CENTER};
  ${BORDER_RADIUS.DEFAULT};
  height: 3.2rem;
  background-color: ${BLUE.DEFAULT};

  color: ${WHITE.LIGHT};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${BLUE.LIGHT};
    }
  }

  &:active {
    background-color: ${BLUE.DARK};
  }
`;

export default BlueButton;
