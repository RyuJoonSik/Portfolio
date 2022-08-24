import { useState } from "react";

import { HTMLInputElements } from "../types/htmlElement";

export default function useInputsValue<T>(initState: T) {
  const [inputsValue, setInpustValue] = useState(initState);

  function handleInputsValue({ target }: { target: HTMLInputElements }) {
    setInpustValue((prevState) => ({
      ...prevState,
      [target.id]: target.value,
    }));
  }

  return [inputsValue, handleInputsValue] as const;
}
