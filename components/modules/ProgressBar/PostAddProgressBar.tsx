import React from "react";

interface PostAddProgressBarProps {
  value: 0 | 100;
}

function getMessage(value: number) {
  if (value === 0) {
    return "포스트 업로드 중...";
  }

  if (value === 100) {
    return "포스트 업로드 완료!";
  }
}

export default function PostAddProgressBar({ value }: PostAddProgressBarProps) {
  return (
    <>
      <strong>{getMessage(value)}</strong>
      <progress max={100} value={value}>
        {value}%
      </progress>
    </>
  );
}
