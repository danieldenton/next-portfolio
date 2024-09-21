import type { Metadata } from "next";
import { openSans } from "./components/fonts";
import "./globals.css";
import Header from "./components/header";
import { Navbar } from "./components/navbar";
import Modal from "./components/modal";

export const metadata: Metadata = {
  title: {
    template: "%s | Daniel Denton Dev",
    default: "Daniel Denton Dev",
  },
  description: "Daniel Denton software developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} bg-black text-white overflow-x-hidden`}
      >
        <Modal />
        <Header />
        <Navbar />
        <div className="flex justify-center">{children}</div>
        <footer className="text-center my-4">DD 2024</footer>
      </body>
    </html>
  );
}
