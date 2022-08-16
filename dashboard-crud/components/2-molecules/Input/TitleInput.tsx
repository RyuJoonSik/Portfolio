import React from "react";

import InputContainer from "../../1-atoms/Box/InputContainer";

interface TitleInputProps {
  value: string;
  handleChange({ target }: { target: HTMLInputElement }): void;
}

export default function TitleInput({
  handleChange,
  ...restProps
}: TitleInputProps): JSX.Element {
  return (
    <InputContainer>
      <label htmlFor="title">제목</label>
      <input
        placeholder="제목을 입력해 주세요."
        id="title"
        onChange={handleChange}
        {...restProps}
      />
    </InputContainer>
  );
}
