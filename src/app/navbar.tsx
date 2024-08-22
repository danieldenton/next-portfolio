import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Web3", href: "/web3" },
];

export const Navbar = () => {
  const pathame = usePathname();
  const navLinks = links.map((link) => {
    return <Link key={link.name} href={link.href} className={clsx()}></Link>;
  });

  return { navLinks };
};
