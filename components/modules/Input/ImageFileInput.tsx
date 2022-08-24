import React from "react";

import InputContainer from "../../atoms/Container/InputContainer";

interface ImageFileInputProps {
  inputFileRef?: React.RefObject<HTMLInputElement>;
}

export default function ImageFileInput({
  inputFileRef,
}: ImageFileInputProps): JSX.Element {
  return (
    <InputContainer>
      <label htmlFor="file">이미지(선택)</label>
      <input
        placeholder="추가할 이미지를 선택해 주세요."
        id="file"
        type="file"
        ref={inputFileRef}
      />
    </InputContainer>
  );
}
