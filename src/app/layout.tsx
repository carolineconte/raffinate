import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import Script from 'next/script'

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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17439030146"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17439030146');
          `}
        </Script>
      </head>
      <body className={publicSans.className}>
        {children}
      </body>
    </html>
  );
}
