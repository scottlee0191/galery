import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/sonner";

const mon = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gallery App",
  description: "Gallery next generation app!",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(mon.className, "antialiased min-h-dvh flex flex-col")}
      >
        <Header />
        {auth}
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
