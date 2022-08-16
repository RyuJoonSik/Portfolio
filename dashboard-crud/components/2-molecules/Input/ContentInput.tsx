import React from "react";

import InputContainer from "../../1-atoms/Box/InputContainer";

interface ContentInputProps {
  value: string;
  handleChange({
    target,
  }: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }): void;
}

export default function ContentInput({
  handleChange,
  ...restProps
}: ContentInputProps): JSX.Element {
  return (
    <InputContainer>
      <label htmlFor="content">내용</label>
      <textarea
        placeholder="내용을 입력해 주세요."
        id="content"
        onChange={handleChange}
        {...restProps}
      />
    </InputContainer>
  );
}
