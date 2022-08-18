import React, { KeyboardEvent } from "react";

import InputContainer from "../../1-atoms/Box/InputContainer";

interface PasswordInputProps {
  value: string;
  id: string;
  handleChange: ({ target }: { target: HTMLInputElement }) => void;
  handleEnter?: () => void;
}

export default function PasswordInput({
  value,
  id,
  handleChange,
  handleEnter,
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
        value={value}
        id={id}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </InputContainer>
  );
}
