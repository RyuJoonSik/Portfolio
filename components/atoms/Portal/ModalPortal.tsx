import { createPortal } from "react-dom";
import React from "react";

import ModalContentsContainer from "../Container/ModalContentsContainer";
import CenterFixedContainer from "../Container/CenterFixedContainer";

interface ModalPortalProps {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: ModalPortalProps) {
  const modalRoot = document.getElementById("modal") as HTMLElement;

  return createPortal(
    <ModalContentsContainer>
      <CenterFixedContainer>{children}</CenterFixedContainer>
    </ModalContentsContainer>,
    modalRoot
  );
}
