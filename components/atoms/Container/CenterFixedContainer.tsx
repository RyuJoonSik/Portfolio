import styled, { css } from "styled-components";
import contentAlign from "../../_styles/contentAlign";
import contentDirection from "../../_styles/contentDirection";
import spaceSize from "../../_styles/spaceSize";

const CenterFixedContainerStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;

  ${contentDirection.horizontal};
  ${contentAlign.center};
  box-sizing: border-box;
  width: 100%;
  padding: 0 ${spaceSize.large};

  transform: translate(-50%, -50%);
`;

const CenterFixedContainer = styled.div`
  ${CenterFixedContainerStyle};
`;

export default CenterFixedContainer;
