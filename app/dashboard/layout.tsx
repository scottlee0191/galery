import React, { PropsWithChildren, ReactNode } from "react";

export default function DashboardLayout({
  children,
  modal,
}: PropsWithChildren<{ modal: ReactNode }>) {
  console.log("🚀 ~ children:", children);
  console.log("🚀 ~ modal:", modal);
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
