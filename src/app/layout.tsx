import type { Metadata } from "next";
import { openSans } from "./components/fonts";
import "./globals.css";
import { Navbar } from "./components/navbar";
import Github from "./components/github";
import LinkedIn from "./components/linkedin";

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
        <header className="flex flex-row justify-between m-10">
          <div className="mt-3">
            <h1 className="text-4xl mb-1.5">Daniel Denton</h1>
            <h2 className="text-xl">Software Developer</h2>
          </div>
          <div className="">
            <div className="flex flex-row justify-end mt-1">
              <Github />
              <LinkedIn />
            </div>
            <h2>danieldentondev@gmail.com</h2>
          </div>
        </header>
        <hr />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
