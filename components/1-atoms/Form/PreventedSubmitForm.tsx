import React from "react";

interface PreventedSubmitFormProps {
  children: React.ReactNode;
}
export default function PreventedSubmitForm({
  children,
}: PreventedSubmitFormProps) {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}
