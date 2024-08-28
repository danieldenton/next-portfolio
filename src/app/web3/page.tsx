import Projects from "../components/projects";

import cloudSwap from "../../../public/assets/CloudSwap.png";
import bMSwap from "../../../public/assets/BMSwap.png";
import dexAgg from "../../../public/assets/DexAgg.png";

const projects = [
  {
    name: "Dex Aggregator",
    image: dexAgg,
    link: "https://dex-agg1.netlify.app/",
    github: "https://github.com/danieldenton/dex-aggregator",
    youtube: "https://www.youtube.com/watch?v=NFQ12ekqSH0",
    createdWith: "Solidity, Hardhat, Ethers.js, React, TypeScript",
  },
  {
    name: "Cloud Swap",
    image: cloudSwap,
    link: "https://cloud-swap.netlify.app/",
    github: "https://github.com/danieldenton/cloud-swap",
    youtube: null,
    createdWith: "Solidity, Hardhat, Ethers.js, React, TypeScript",
  },
  {
    name: "Blood Moon Swap",
    image: bMSwap,
    link: "https://blood-moon-swap.netlify.app/",
    github: "https://github.com/danieldenton/blood-moon-swap",
    youtube: null,
    createdWith: "Solidity, Hardhat, Ethers.js, React",
  },
];

export default function Web3() {
  const projectDivs = projects.map((project, idx) => {
    return <Projects project={project} key={idx} />;
  });

  return (
    // <div className="animate-fade sm:mx-20 mx-0 flex sm:flex-row flex-col flex-wrap border">
    <div className="flex flex-wrap sm:mx-20 m-0 flex sm:flex-row flex-col my-10 overflow-hidden border">
      {projectDivs}
    </div>
  );
}
