import { createPortal } from "react-dom";
import React from "react";

interface ModalPortalProps {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: ModalPortalProps) {
  const modalRoot = document.getElementById("modal") as HTMLElement;

  return createPortal(children, modalRoot);
}
