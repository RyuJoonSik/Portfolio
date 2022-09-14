import React from "react";

import InputContainer from "../../atoms/Container/InputContainer";

interface ImageFileInputProps {
  inputFileRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
}

export default function ImageFileInput({
  inputFileRef,
}: ImageFileInputProps): JSX.Element {
  return (
    <InputContainer>
      <label htmlFor="file">이미지</label>
      <input id="file" type="file" ref={inputFileRef} />
    </InputContainer>
  );
}
