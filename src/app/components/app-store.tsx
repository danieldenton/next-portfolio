import Link from "next/link";
import Image from "next/image";
import googlePlay from "../../../public/assets/AppStore.png"

type props = {
    appStoreLink: string
}

export default function AppStore({ appStoreLink }: props) {
  return (
    <>
      <Link
        target="_blank"
        rel="noreferrer"
        href={appStoreLink}
        className="m-1"
      >
        <Image src={googlePlay} alt="google-play-logo" height={85.5} width={256}/>
      </Link>
    </>
  );
}
