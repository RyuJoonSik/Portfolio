import React from "react";
import styled from "styled-components";

import contentDirection from "../../_styles/contentDirection";
import spaceSize from "../../_styles/spaceSize";

interface PreventDefaultFormProps {
  children: React.ReactNode;
}

const Form = styled.form`
  ${contentDirection.vertical};
  gap: ${spaceSize.small};
  width: 100%;
`;

export default function PreventDefaultForm({
  children,
}: PreventDefaultFormProps) {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return <Form onSubmit={handleSubmit}>{children}</Form>;
}
