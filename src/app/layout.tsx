import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "./globals.css";
import { Navbar } from "./ui/navbar";

export const metadata: Metadata = {
  title: "Daniel Denton Dev",
  description: "A portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <header>
          <h1>Daniel Denton</h1>
          <h3>Software Developer</h3>
        </header>
        {children}
      </body>
    </html>
  );
}
