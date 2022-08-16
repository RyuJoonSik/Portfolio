import styled, { css } from "styled-components";

import buttonStyle from "./_mixins";
import { blue, white } from "../../../styles/color";

const blueButtonStyle = css`
  background-color: ${blue.default};

  color: ${white.light};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${blue.light};
    }
  }

  &:active {
    background-color: ${blue.dark};
  }
`;

export default blueButtonStyle;

// export const rectangleMediumButtonStyle = css`
//   ${buttonStyle.color.blue};
//   ${buttonStyle.rectangle.medium};
// `;

// export const rectangleFullButtonStlye = css`
//   ${buttonStyle.color.blue};
//   ${buttonStyle.rectangle.full};
// `;

// const BlueButton = {
//   Rectangle: {
//     Medium: styled.button`
//       ${rectangleMediumButtonStyle};
//     `,

//     Full: styled.button`
//       ${rectangleFullButtonStlye};
//     `,
//   },
// };

// export default BlueButton;
