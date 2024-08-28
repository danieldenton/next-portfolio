import Projects from "../components/projects";
import dcdImg from "../../../public/assets/dcd.png";
import dilImg from "../../../public/assets/dil.png";
// import

const oldProjects = [
  {
    name: "Deep Cut Discovery",
    image: dcdImg,
    link: "https://deepcutdiscovery.netlify.app/",
    github: "https://github.com/danieldenton/deep-cut-discovery",
    youtube: null,
    createdWith: "MongoDB, Express, React, Node",
  },
  {
    name: "A Day in the Life",
    image: dilImg,
    link: "https://dayinthelife.netlify.app",
    github: "https://github.com/danieldenton/day-in-life-client",
    youtube: null,
    createdWith: "MongoDB, Express, React, Node",
  },
];

export default function ProjectPage() {
  const projectDivs = oldProjects.map((project, idx) => {
    return <Projects project={project} key={idx} />;
  });

  return (
    <div className="animate-fade sm:mx-20 flex sm:flex-row flex-col">{projectDivs}</div>
  );
}
