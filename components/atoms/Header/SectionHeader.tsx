import styled from "styled-components";

import contentDirection from "../../_styles/contentDirection";
import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import responsiveSize from "../../_styles/responsiveSize";

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
