"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { openSans } from "./fonts";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Web3", href: "/web3" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const navLinks = links.map((link) => {
    return (
      <Link
        key={link.name}
        href={link.href}
        className={clsx(`${openSans.className} text-black bg-white p-2 w-20 rounded flex justify-center`, {
          "text-yellow-600": pathname === link.href,
        })}
      >
        {link.name}
      </Link>
    );
  });

  return (
    <div
      className="flex justify-around mt-8 mb-8
  "
    >
      {navLinks}
    </div>
  );
};
