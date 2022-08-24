import React from "react";

interface PreventDefaultFormProps {
  children: React.ReactNode;
}
export default function PreventDefaultForm({
  children,
}: PreventDefaultFormProps) {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}
