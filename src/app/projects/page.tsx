import Projects from "../components/projects";
import dcdImg from "../../../public/assets/dcd.png"
import dilImg from "../../../public/assets/dil.png"
// import

const oldProjects = [
  {
    name: "Deep Cut Discovery",
    image: dcdImg,
    link: "https://deepcutdiscovery.netlify.app/",
    github: "https://github.com/danieldenton/deep-cut-discovery",
    createdWith: "MongoDB, Express, React, Node",
  },
  {
    name: "A Day in the Life",
    image: dilImg,
    link: "https://dayinthelife.netlify.app",
    github: "https://github.com/danieldenton/day-in-life-client",
    createdWith: "MongoDB, Express, React, Node",
  },
];

const projectDivs = oldProjects.map((project, idx) => {
  return (
    <Projects
      project={project}
      key={idx}
    />
  );
});

export default function ProjectPage() {
  return <div className="flex sm:flex-row flex-col justify-around">{projectDivs}</div>;
}
