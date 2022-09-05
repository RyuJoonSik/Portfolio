import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { textButtonStyle } from "./TextButton";

const textLinkButtonStyle = css`
  ${textButtonStyle};
`;

const TextLinkButton = styled(Link)`
  ${textLinkButtonStyle};
`;

export default TextLinkButton;
