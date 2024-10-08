import { Metadata } from "next";
import Projects from "../components/projects";
import cloudSwap from "../../../public/assets/CloudSwap.png";
import bMSwap from "../../../public/assets/BMSwap.png";
import dexAgg from "../../../public/assets/DexAgg.png";

export const metadata: Metadata = {
  title: "Web3",
};

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
    <div className="animate-grow-fade sm:mx-20 flex sm:flex-wrap no-wrap sm:flex-row flex-col sm:justify-around justify-center sm:mb-[250px] my-10 overflow-hidden">
      {projectDivs}
    </div>
  );
}
