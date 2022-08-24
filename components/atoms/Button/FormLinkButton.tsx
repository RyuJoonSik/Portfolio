import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const FormLinkButtonStyle = css`
  color: ${({ theme }) => theme.color.textDefault};
`;

const FormLinkButton = styled(Link)`
  ${FormLinkButtonStyle};
`;

export default FormLinkButton;
