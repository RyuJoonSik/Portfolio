import styled from "styled-components";

import SPACE_SIZE from "../../../styles/spaceSize";

const P = styled.p`
  padding: ${SPACE_SIZE.LARGER};

  color: ${({ theme }) => theme.color.textDefault};
`;

export default P;
