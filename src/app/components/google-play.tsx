import Link from "next/link";
import Image from "next/image";
import googlePlay from "../../../public/assets/GooglePlay.png"

type props = {
    googlePlayLink: string
}

export default function GooglePlay({ googlePlayLink }: props) {
  return (
    <>
      <Link
        target="_blank"
        rel="noreferrer"
        href={googlePlayLink}
        className="m-1 rounded flex flex-shrink-0"
      >
        <Image src={googlePlay} alt="google-play-logo" height={42.75} width={128}/>
      </Link>
    </>
  );
}
