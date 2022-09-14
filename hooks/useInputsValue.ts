import { useState } from "react";

import { HTMLInputElements } from "../types/htmlElement";

export default function useInputsValue<T>(initState: T) {
  const [inputsValue, setInpustValue] = useState(initState);

  function handleInputsValue({ target }: { target: HTMLInputElements }) {
    if (!(target.id in inputsValue))
      throw new Error(
        "input 태그의 id 속성과 useInputsValue의 상태 프로퍼티를 일치 시켜 주세요."
      );

    setInpustValue((prevState) => ({
      ...prevState,
      [target.id]: target.value,
    }));
  }

  return [inputsValue, handleInputsValue] as const;
}
