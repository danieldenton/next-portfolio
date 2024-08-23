import Link from "next/link";

export default function Github() {
    return (
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://github.com/danieldenton"
        className="github"
      >
        <i class="fa-brands fa-github-square"></i>
      </Link>
    );
  }
  