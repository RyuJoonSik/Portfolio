import styled from "styled-components";

import contentAlign from "../../../styles/contentAlign";
import contentDirection from "../../../styles/contentDirection";

const HorizontalList = styled.ul`
  ${contentDirection.horizontal};
  ${contentAlign.center}
  flex-wrap: wrap;

  li {
    flex: 1 1 250px;
  }
`;

export default HorizontalList;
