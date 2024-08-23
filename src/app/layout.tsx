import type { Metadata } from "next";
import { openSans } from "./ui/fonts";
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
      <body className={`${openSans.className} bg-black text-white`}>
        <Navbar />
        <header className="flex flex-row justify-between m-8">
          <div>
          <h1 className="text-2xl">Daniel Denton</h1>
          <h2 className="text-xl">Software Developer</h2>
          </div>
          <div>
            <h2>DanielMDenton@gmail.com</h2>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
