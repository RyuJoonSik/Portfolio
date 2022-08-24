import styled, { css } from "styled-components";

const modalContentsContainerStyle = css`
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContentsContainer = styled.div`
  ${modalContentsContainerStyle};
`;

export default ModalContentsContainer;
