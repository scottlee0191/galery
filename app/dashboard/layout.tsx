import React, { PropsWithChildren, ReactNode } from "react";

export default function DashboardLayout({
  children,
  modal,
}: PropsWithChildren<{ modal: ReactNode }>) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
