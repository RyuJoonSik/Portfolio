import { useState } from "react";

export default function useInputsValue<T>(initState: T) {
  const [inputsValue, setInpustValue] = useState(initState);

  function handleInputsValue({
    target,
  }: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }) {
    setInpustValue((prevState) => ({
      ...prevState,
      [target.id]: target.value,
    }));
  }

  return [inputsValue, handleInputsValue] as const;
}
