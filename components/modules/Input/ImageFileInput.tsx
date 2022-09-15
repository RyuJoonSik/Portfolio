import React, { useRef, useState } from "react";
import styled from "styled-components";

import DefaultButton from "../../atoms/Button/DefaultButton";

interface ImageFileInputProps {
  imgFile: File | null;
  handleChange: ({ target }: { target: HTMLInputElement }) => void;
}

const FileInput = styled.input`
  display: none;
`;

export default function ImageFileInput({
  imgFile,
  handleChange,
}: ImageFileInputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (!inputRef.current) return;

    inputRef.current.click();
  };

  return (
    <>
      <DefaultButton
        buttonName="사진 불러오기(.jpg, .jpeg, .png)"
        color="white"
        handleClick={handleClick}
      />
      <FileInput
        id="file"
        type="file"
        ref={(el) => {
          inputRef.current = el;
        }}
        accept=".jpg, .jpeg, .png"
        onChange={handleChange}
      />
      {imgFile !== null && <div>{imgFile.name}</div>}
    </>
  );
}
