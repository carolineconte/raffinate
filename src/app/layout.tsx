import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";

import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raffinate",
  description: "Raffinate Odontologia e Estética",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={publicSans.className}>{children}</body>
    </html>
  );
}
