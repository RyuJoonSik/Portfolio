import React, { KeyboardEvent } from "react";

import InputContainer from "../../1-atoms/Box/InputContainer";

interface PasswordInputProps {
  value: string;
  handleChange({ target }: { target: HTMLInputElement }): void;
  handleEnter?: () => void;
}

export default function PasswordInput({
  handleChange,
  handleEnter,
  ...restProps
}: PasswordInputProps): JSX.Element {
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
      <label htmlFor="password">비밀번호</label>
      <input
        placeholder="비밀번호 6자리를 입력해 주세요."
        type="password"
        id="password"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
    </InputContainer>
  );
}
