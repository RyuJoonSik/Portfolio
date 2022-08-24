import styled, { css } from "styled-components";

import fontSize from "../../../styles/fontSize";
import { FontSizeLiteral } from "../../_styles/fontSize";

interface CustomTextProps {
  size?: FontSizeLiteral;
}

const CustomText = styled.span<CustomTextProps>`
  ${({ size }) => css`
    ${size ? fontSize[size as FontSizeLiteral] : fontSize["medium"]}
  `}
`;

export default CustomText;
