import React, { KeyboardEvent } from "react";

import InputContainer from "../../1-atoms/Box/InputContainer";

interface EmailInputProps {
  value: string;
  handleChange: ({ target }: { target: HTMLInputElement }) => void;
  handleEnter?: () => void;
}

export default function EmailInput({
  handleChange,
  handleEnter,
  ...restProps
}: EmailInputProps): JSX.Element {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!handleEnter) {
      return;
    }

    if (e.key == "Enter") {
      handleEnter();
    }
  };

  return (
    <InputContainer>
      <label htmlFor="email">이메일</label>
      <input
        placeholder="id@email.com 형식으로 입력해 주세요."
        type="email"
        id="email"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
    </InputContainer>
  );
}
