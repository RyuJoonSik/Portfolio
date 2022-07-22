import styled from "styled-components";

import RESPONSIVE_SIZE from "../../../styles/responsiveSize";

export const LI = styled.li`
  width: 50%;

  ${RESPONSIVE_SIZE.TABLET} {
    width: 100%;
  }
`;

export default LI;
