import { useEffect } from "react";

import { HTMLFocusableElement } from "../types/htmlElement";

export default function useAutoFocus(
  target: React.RefObject<HTMLFocusableElement>
) {
  useEffect(() => {
    target.current?.focus();
  }, []);
}
