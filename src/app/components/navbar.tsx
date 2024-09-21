"use client";

// import { Link } from 'react-scroll';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { openSans } from "./fonts";

const links = [
  { name: "Contact", href: "/" },
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
        className={clsx(`${openSans.className} text-white`, {
          "text-yellow": pathname === link.href,
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
  //  return (
  //   <nav className="flex space-x-4 p-4 bg-gray-800 text-white">
  //     <Link
  //       activeClass="active"
  //       to="contact"
  //       spy={true}
  //       smooth={true}
  //       offset={-70}
  //       duration={500}
  //       className="cursor-pointer"
  //     >
  //       Contact
  //     </Link>
  //     <Link
  //       activeClass="active"
  //       to="about"
  //       spy={true}
  //       smooth={true}
  //       offset={-70}
  //       duration={500}
  //       className="cursor-pointer"
  //     >
  //       About
  //     </Link>
  //     <Link
  //       activeClass="active"
  //       to="projects"
  //       spy={true}
  //       smooth={true}
  //       offset={-70}
  //       duration={500}
  //       className="cursor-pointer"
  //     >
  //       Projects
  //     </Link>
  //     <Link
  //       activeClass="active"
  //       to="web3"
  //       spy={true}
  //       smooth={true}
  //       offset={-70}
  //       duration={500}
  //       className="cursor-pointer"
  //     >
  //       Web3
  //     </Link>
  //   </nav>
  // );
};
