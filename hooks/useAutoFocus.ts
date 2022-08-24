import { useEffect } from "react";

import { HTMLFocusableElements } from "../types/htmlElement";

export default function useAutoFocus(
  target: React.RefObject<HTMLFocusableElements>
) {
  useEffect(() => {
    target.current?.focus();
  }, []);
}
