import type { Metadata } from "next";
import {Poppins} from 'next/font/google'
import "./globals.css";





const poppins = Poppins({ subsets: ["latin"], weight: "800" });

export const metadata: Metadata = {
  title: "Buider.io Velocity",
  description: "AI Lauch Event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
