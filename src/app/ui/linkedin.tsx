import Link from "next/link";
import Image from "next/image";
import linkedIn from "../assets/linkedin-square-white-icon-transparent.png";

export default function LinkedIn() {
  return (
    <>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/danielmdenton/"
      >
        <Image src={linkedIn} alt="linkedIn-logo" className="h-12 w-12 mt-0.5 mb-2" />
      </Link>
    </>
  );
}