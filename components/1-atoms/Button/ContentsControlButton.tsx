import styled from "styled-components";

import contentDirection from "../../../styles/contentDirection";
import contentAlign from "../../../styles/contentAlign";
import spaceSize from "../../../styles/spaceSize";
import fontSize from "../../../styles/fontSize";
import Button from "./Button";

const ContentsControlButton = styled(Button.Blue)`
  ${contentDirection.horizontal};
  ${contentAlign.center};
  gap: ${spaceSize.small};
  padding: ${spaceSize.small};
  border-radius: ${spaceSize.smaller};

  ${fontSize.small};
`;

export default ContentsControlButton;
