import styled from "styled-components";

import contentDirection from "../../../styles/contentDirection";
import contentAlign from "../../../styles/contentAlign";
import spaceSize from "../../../styles/spaceSize";
import responsiveSize from "../../../styles/responsiveSize";

const SectionHeader = styled.header`
  ${contentDirection.horizontal};
  ${contentAlign.spaceBetweenCenter};
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  padding: ${spaceSize.larger} 0;
  border-bottom: ${spaceSize.smallest}
    ${({ theme }) => theme.color.borderDefault} solid;

  color: ${({ theme }) => theme.color.textAccent};

  ${responsiveSize.mobile} {
    padding: ${spaceSize.medium} 0;
  }
`;

export default SectionHeader;
