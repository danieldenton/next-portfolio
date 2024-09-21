import Link from "next/link";
import Image from "next/image";
import github from "../../../public/assets/github-mark-white.png"

type props = {
  githubLink: string
}

export default function Github({ githubLink }: props) {
  return (
    <>
      <Link
        target="_blank"
        rel="noreferrer"
        href={githubLink}
        className="m-1"
      >
        <Image src={github} alt="github-logo" height={42} width={42}/>
      </Link>
    </>
  );
}
