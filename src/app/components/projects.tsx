import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Github from "./github";

interface IProject {
  project: {
    name: string;
    image: StaticImageData;
    link: string;
    github: string;
    youtube: string | null;
    createdWith: string;
  };
  key: number;
}

export default function Projects({ project, key }: IProject) {
  const { name, image, link, github, createdWith } = project;
  return (
    <div className="sm:p-10">
      <h2 className="flex justify-center text-xl">{name}</h2>
      <h3 className="flex justify-center">{createdWith}</h3>
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
        <div className="flex justify-center mt-1 mb-3">
          <Github githubLink={github} />
        </div>
      </div>
      <Link href={link} target="_blank" className="flex justify-center">
        <Image
          src={image}
          alt={name}
          className="border rounded hover:border-yellow min-w-[400px]"
          width={427}
          height={250}
        />
      </Link>
    </div>
  );
}
