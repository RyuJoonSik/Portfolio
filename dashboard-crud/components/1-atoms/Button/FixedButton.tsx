import styled from "styled-components";

import contentDirection from "../../../styles/contentDirection";
import contentAlign from "../../../styles/contentAlign";
import spaceSize from "../../../styles/spaceSize";
import Button from "./Button";

const FixedButton = styled(Button.White)`
  ${contentDirection.horizontal};
  ${contentAlign.center};
  gap: ${spaceSize.small};
  padding: ${spaceSize.small};
  opacity: 0.7;
  box-shadow: 0px 4px 6px -2px rgb(0 0 0 / 12%),
    0px 2px 2px -1px rgb(0 0 0 / 5%);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
    }
  }
`;

export default FixedButton;
