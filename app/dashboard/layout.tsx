import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Dashboard for Admin",
  description: "dashboard include some graphs and summaries of data"
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div>
      <div>sidebar</div>
      {children}
    </div>
  );
}
