import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const textButtonStyle = css`
  color: ${({ theme }) => theme.color.textDefault};
`;

const TextButton = styled.button`
  ${textButtonStyle};
`;

export default TextButton;

export const TextLinkButton = styled(Link)`
  ${textButtonStyle};
`;
