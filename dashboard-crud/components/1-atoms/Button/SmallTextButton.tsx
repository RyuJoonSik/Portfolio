import styled from "styled-components";
import { Link } from "react-router-dom";

import FONT_SIZE from "../../../styles/fontSize";

const SmallTextButton = styled(Link)`
  ${FONT_SIZE.SMALL};
  color: ${({ theme }) => theme.color.textDefault};
`;

export default SmallTextButton;
