import React from "react";

interface ImageUploadProgressBarProps {
  value: number;
}

function getMessage(value: number) {
  if (value === 0) {
    return "이미지 업로드 대기 중...";
  }

  if (0 < value && value < 100) {
    return "이미지 업로드 중...";
  }

  if (value == 100) {
    return "이미지 업로드 완료!";
  }
}

export default function ImageUploadProgressBar({
  value,
}: ImageUploadProgressBarProps) {
  return (
    <>
      <strong>{getMessage(value)}</strong>
      <progress max={100} value={value}>
        {value}%
      </progress>
    </>
  );
}
