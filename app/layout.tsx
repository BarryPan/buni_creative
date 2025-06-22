import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Buni Creative Studio",
  description: "Build User Need",
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className="scroll-smooth">
      <head>
        {/* 傳統方式載入 Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
         <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* unify text as Nunito_Sans */}
      <body className="font-[Nunito_Sans]">
        {children}
      </body>
    </html>
  );
}
