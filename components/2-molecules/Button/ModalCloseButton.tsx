import styled from "styled-components";

import Button from "../../1-atoms/Button/Button";
import spaceSize from "../../../styles/spaceSize";

const ModalCloseButton = styled(Button.White)`
  padding: ${spaceSize.smaller} ${spaceSize.medium};
  border-radius: ${spaceSize.smaller};
  border: ${spaceSize.smallest} solid
    ${({ theme }) => theme.color.borderDefault};
`;

export default ModalCloseButton;
