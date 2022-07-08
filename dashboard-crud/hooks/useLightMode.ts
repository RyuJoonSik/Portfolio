import { useState } from "react";

export default function useLightMode() {
  const [isLightMode, setIsLightMode] = useState(true);

  return [isLightMode, setIsLightMode];
}
