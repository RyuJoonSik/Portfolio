import styled, { css } from "styled-components";

import contentDirection from "../../_styles/contentDirection";
import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import responsiveSize from "../../_styles/responsiveSize";

const sectionHeaderStyle = css`
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

const SectionHeader = styled.header`
  ${sectionHeaderStyle};
`;

export default SectionHeader;
