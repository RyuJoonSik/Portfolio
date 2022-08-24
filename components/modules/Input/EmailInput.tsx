import React, { KeyboardEvent } from "react";

import InputContainer from "../../atoms/Container/InputContainer";

interface EmailInputProps {
  value: string;
  id: string;
  handleChange: ({ target }: { target: HTMLInputElement }) => void;
  handleEnter?: () => void;
}

export default function EmailInput({
  value,
  id,
  handleChange,
  handleEnter,
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
      <label htmlFor={id}>이메일</label>
      <input
        placeholder="id@email.com 형식으로 입력해 주세요."
        type="email"
        value={value}
        id={id}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </InputContainer>
  );
}
