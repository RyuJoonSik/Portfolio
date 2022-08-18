import React from "react";

import InputContainer from "../../1-atoms/Box/InputContainer";

interface TitleInputProps {
  value: string;
  id: string;
  handleChange({ target }: { target: HTMLInputElement }): void;
}

export default function TitleInput({
  value,
  id,
  handleChange,
}: TitleInputProps): JSX.Element {
  return (
    <InputContainer>
      <label htmlFor={id}>제목</label>
      <input
        placeholder="제목을 입력해 주세요."
        value={value}
        id={id}
        onChange={handleChange}
      />
    </InputContainer>
  );
}
