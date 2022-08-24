import styled from "styled-components";

import contentDirection from "../../../styles/contentDirection";
import contentAlign from "../../../styles/contentAlign";
import spaceSize from "../../../styles/spaceSize";

const VericallContentContainer = styled.div`
  ${contentDirection.vertical};
  ${contentAlign.center};
  gap: ${spaceSize.small};
`;

export default VericallContentContainer;
