import React from "react";
import styled from "styled-components";

const StyledProgress = styled.progress`
  width: 100%;
`;

interface ProgressProps {
  behavior: string;
  max: number;
  value: number;
}

export default function Progress({ behavior, max, value }: ProgressProps) {
  return (
    <>
      <strong>
        {value === 100 ? `${behavior} 완료!` : `${behavior} 중...`}
      </strong>
      <StyledProgress max={max} value={value} />
    </>
  );
}
