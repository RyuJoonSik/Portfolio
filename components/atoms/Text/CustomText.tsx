import styled, { css } from "styled-components";

import fontSize from "../../_styles/fontSize";
import { FontSizeLiteral } from "../../_styles/fontSize";

interface CustomTextProps {
  size?: FontSizeLiteral;
}

export const customTextStyle = css<CustomTextProps>`
  ${({ size }) => css`
    ${size ? fontSize[size as FontSizeLiteral] : fontSize["medium"]}
  `}
`;

const CustomText = styled.span<CustomTextProps>`
  ${customTextStyle};
`;

export default CustomText;
