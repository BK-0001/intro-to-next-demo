import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} antialiased`}>
        <header>header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
