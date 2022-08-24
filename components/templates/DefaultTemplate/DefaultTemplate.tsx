import React from "react";

import PageHeader from "../../modules/Header/PageHeader";

interface DefaultTemplate {
  children?: React.ReactNode;
}

export default function DefaultTemplate({
  children,
}: DefaultTemplate): JSX.Element {
  return (
    <>
      <PageHeader />
      {children}
    </>
  );
}
