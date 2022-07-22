import styled from "styled-components";

import BORDER_RADIUS from "../../../styles/borderRadius";

const MainDefaultContentItemContainer = styled.div`
  ${BORDER_RADIUS.LARGET};
  background-color: ${({ theme }) => theme.color.backgroundAccent};
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.12),
    0px 2px 2px -1px rgba(0, 0, 0, 0.05);
`;

export default MainDefaultContentItemContainer;
