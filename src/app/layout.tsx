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
  const githubLink = "https://github.com/danieldenton";

  return (
    <html lang="en">
      <body className={`${openSans.className} bg-black text-white overflow-x-hidden`}>
        <header className="flex sm:flex-row flex-col justify-between m-10 ">
          <div className="mt-3">
            <h1 className="text-4xl mb-1.5 flex sm:justify-start justify-center">
              Daniel Denton
            </h1>
            <h2 className="text-xl flex sm:justify-start justify-center">
              Software Developer
            </h2>
          </div>
          <div>
            <div className="flex flex-row sm:justify-end justify-center mt-1">
              <Github githubLink={githubLink} />
              <LinkedIn />
            </div>
            <h2 className="flex sm:justify-end justify-center ">
              daniel@danieldentondev.com
            </h2>
          </div>
        </header>
        <hr />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
