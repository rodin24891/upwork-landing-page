import type { Metadata } from "next";
import { Poppins, Italianno, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: ["400"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RCovington Photography - Capture Meaningful Moments",
  description: "Professional wedding photography capturing your most meaningful moments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${italianno.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
