import React from "react";

interface CustomProgressBarProps {
  work: string;
  value: number;
}

export default function CustomProgressBar({
  work,
  value,
}: CustomProgressBarProps) {
  const getMessage = (work: string, value: number) => {
    if (value === 0) {
      return `${work} 시작!`;
    }

    if (0 < value && value < 100) {
      return `${work} 중...`;
    }

    if (value == 100) {
      return `${work} 완료!`;
    }
  };

  return (
    <>
      <strong>{getMessage(work, value)}</strong>
      <progress max={100} value={value}>
        {value}%
      </progress>
    </>
  );
}
