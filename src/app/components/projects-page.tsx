import Projects from "./projects";
import PainNavigator from "../components/painnavigator";
import dcdImg from "../../../public/assets/dcd.png";
import dilImg from "../../../public/assets/dil.png";

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

export default function ProjectsPage() {
  const projectDivs = oldProjects.map((project, idx) => {
    return <Projects project={project} key={idx} />;
  });

  return (
    <div className="animate-fade overflow-hidden py-10 mt-20">
        <h1 className="text-center text-3xl mb-4">Projects</h1>
      <PainNavigator />
      <div className="sm:mx-20 mx-0 flex sm:flex-row flex-col sm:justify-around justify-center my-10">
        {projectDivs}
      </div>
    </div>
  );
}
