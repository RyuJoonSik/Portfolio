import styled, { css } from "styled-components";

import contentAlign, { ContentAlignLiteral } from "../../_styles/contentAlign";
import contentDirection, {
  ContentDirectionLiteral,
} from "../../_styles/contentDirection";
import fontSize, { FontSizeLiteral } from "../../_styles/fontSize";
import spaceSize, { SpaceSizeLiteral } from "../../_styles/spaceSize";

interface CustomContainerProps {
  direction?: ContentDirectionLiteral;
  align?: ContentAlignLiteral;
  gap?: SpaceSizeLiteral;
  size?: FontSizeLiteral;
  width?: string;
}

const CustomContainer = styled.div<CustomContainerProps>`
  ${({ direction, size, align, gap, width }) => css`
    ${direction ? contentDirection[direction] : contentDirection["horizontal"]};
    ${align ? contentAlign[align] : contentAlign["startStart"]};
    gap: ${gap ? spaceSize[gap] : "initial"};
    ${size ? fontSize[size as FontSizeLiteral] : fontSize["medium"]};
    width: ${width ? width : "auto"};
  `}
`;

export default CustomContainer;
