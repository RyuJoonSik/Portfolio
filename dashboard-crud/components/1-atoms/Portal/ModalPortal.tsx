import { createPortal } from "react-dom";
import React from "react";
import styled from "styled-components";

import contentDirection from "../../../styles/contentDirection";
import contentAlign from "../../../styles/contentAlign";
import spaceSize from "../../../styles/spaceSize";

const ModalBackground = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

const ContentWrapper = styled.div`
  position: fixed;
  top: 50%;

  ${contentDirection.horizontal};
  ${contentAlign.center};
  box-sizing: border-box;
  width: 100%;
  padding: 0 ${spaceSize.large};

  transform: translateY(-50%);
`;

interface ModalPortalProps {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: ModalPortalProps) {
  const modalRoot = document.getElementById("modal") as HTMLElement;

  return createPortal(
    <ModalBackground>
      <ContentWrapper>{children}</ContentWrapper>
    </ModalBackground>,
    modalRoot
  );
}
