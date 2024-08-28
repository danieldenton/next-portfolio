import Projects from "../components/projects";
// import
import dcdImg from "../../../public/assets/dcd.png"
import dilImg from "../../../public/assets/dil.png"

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
      className=""
      project={project}
      key={idx}
    />
  );
});

export default function ProjectPage() {
  return <h1>Projects</h1>;
}
