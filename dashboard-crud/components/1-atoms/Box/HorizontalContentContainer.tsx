import styled from "styled-components";

import contentDirection from "../../../styles/contentDirection";
import contentAlign from "../../../styles/contentAlign";
import spaceSize from "../../../styles/spaceSize";

const HorizontalContentContainer = styled.div`
  ${contentDirection.horizontal};
  ${contentAlign.center};
  gap: ${spaceSize.small};
`;

export default HorizontalContentContainer;
