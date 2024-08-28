import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Github from "./github";

interface IProject {
  project: {
    name: string;
    image: StaticImageData;
    link: string;
    github: string;
    youtube: string | null
    createdWith: string;
  };
  key: number;
}

export default function Projects({ project, key }: IProject) {
  const { name, image, link, github, createdWith } = project;
  return (
    <div className="p-10 mx-auto">
      <h2 className="flex justify-center text-xl">{name}</h2>
      <h2 className="flex justify-center">{createdWith}</h2>
      <div>
        {/* {project.youtube1 ? (
          <div className="project-youtube-link">
            <a
              href={project.youtube1}
              target="_blank"
              className="project-github-link"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        ) : null} */}
        <div className="flex justify-center">
          <Link href={github} target="_blank" className="">
            <Github />
          </Link>
        </div>
      </div>
      <Link href={link} target="_blank">
        <Image
          src={image}
          alt="A Day In The Life"
          className="border rounded hover:border-yellow min-w-[400px]"
          width={427}
          height={250}
        />
      </Link>
    </div>
  );
}
