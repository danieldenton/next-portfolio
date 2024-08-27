import Link from "next/link";
import Image from "next/image";
import github from "../../../public/assets/github-mark-white.png";

export default function Github() {
  return (
    <>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://github.com/danieldenton"
        className="m-1"
      >
        <Image src={github} alt="github-logo" className="h-10 w-10" />
      </Link>
    </>
  );
}
