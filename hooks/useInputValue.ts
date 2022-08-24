import { useState } from "react";

export default function useInputValue(
  initState: string | { [name: string]: string }
) {
  const [inputValue, setInputValue] = useState(initState);

  function handleInputValue({
    target,
  }: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }) {
    setInputValue(target.value);
  }

  return [inputValue, handleInputValue];
}
