import styled, { css } from "styled-components";

import buttonStyle from "./_mixins";

export const rectangleMediumButtonStyle = css`
  ${buttonStyle.color.white};
  ${buttonStyle.rectangle.medium};
`;

const WhiteButton = {
  Rectangle: {
    Medium: styled.button`
      ${rectangleMediumButtonStyle};
    `,
  },
};

export default WhiteButton;
