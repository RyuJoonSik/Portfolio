import styled from "styled-components";

import SPACE_SIZE from "../../../styles/spaceSize";

const DL = styled.dl`
  padding: ${SPACE_SIZE.LARGER};

  color: ${({ theme }) => theme.color.textDefault};
`;

export default DL;
