import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

import BUTTON_STYLE from "./_mixins";

const STYLE = css`
  ${BUTTON_STYLE.DEFAULT};
  ${BUTTON_STYLE.SIZE.DEFAULT};
  ${BUTTON_STYLE.COLOR.BLUE};
  ${BUTTON_STYLE.EFFECT.BLUE};
`;

const MediumBlueButton = {
  NavLink: styled(NavLink)`
    ${STYLE}
  `,
  Link: styled(Link)`
    ${STYLE}
  `,
  Default: styled.button`
    ${STYLE}
  `,
};

export default MediumBlueButton;
