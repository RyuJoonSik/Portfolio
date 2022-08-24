import React from "react";

import InputContainer from "../../atoms/Container/InputContainer";

interface TextContentInputProps {
  value: string;
  id: string;
  handleChange({
    target,
  }: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }): void;
}

export default function TextContentInput({
  value,
  id,
  handleChange,
}: TextContentInputProps): JSX.Element {
  return (
    <InputContainer>
      <label htmlFor={id}>내용</label>
      <textarea
        placeholder="내용을 입력해 주세요."
        value={value}
        id={id}
        onChange={handleChange}
      />
    </InputContainer>
  );
}
