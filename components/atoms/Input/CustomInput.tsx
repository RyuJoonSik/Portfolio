import styled, { css } from "styled-components";
import React, { KeyboardEvent } from "react";

import contentDirection from "../../_styles/contentDirection";
import spaceSize from "../../_styles/spaceSize";
import fontWeight from "../../_styles/fontWeight";
import fontSize from "../../_styles/fontSize";

const Container = styled.div`
  ${contentDirection.vertical};
  gap: ${spaceSize.smaller};

  &:focus-within {
    ${fontWeight.medium};
    color: ${({ theme }) => theme.color.borderFocus};
  }
`;

const inputStyle = css`
  min-width: 0;
  padding: ${spaceSize.small};
  background-color: transparent;
  border: ${spaceSize.smallest} solid
    ${({ theme }) => theme.color.borderDefault};
  border-radius: ${spaceSize.smaller};

  color: ${({ theme }) => theme.color.textDefault};

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    ${fontSize.medium}
    color: ${({ theme }) => theme.color.textPlaceholder};
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.color.textPlaceholder};
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.color.textPlaceholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.borderFocus};
  }
`;

const Input = styled.input`
  ${inputStyle};
`;

const Textarea = styled.textarea`
  ${inputStyle};
  height: 100px;
`;

interface CustomInputProps {
  id?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  handleChange: ({
    target,
  }: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }) => void;
  handleEnter?: () => void;
}

export default function CustomInput({
  id,
  value,
  label,
  placeholder,
  type,
  handleChange,
  handleEnter,
}: CustomInputProps): JSX.Element {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!handleEnter) return;

    if (e.key == "Enter") handleEnter();
  };

  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      {type === "textarea" ? (
        <Textarea
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      ) : (
        <Input
          id={id}
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      )}
    </Container>
  );
}
