import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raffinate Odontologia Estética",
  description: "Especialistas em transformar sorrisos com tratamentos odontológicos de alta qualidade e tecnologia avançada. Agende sua consulta e descubra como podemos melhorar sua saúde bucal e estética dental.",
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
