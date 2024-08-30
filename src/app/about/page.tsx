import Image from "next/image";
import headshot from "../../../public/assets/headshot.png"

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center animate-fade sm:w-3/4 w-full overflow-hidden">
      <div className="flex flex-wrap justify-around sm:mx-20 m-0 my-5 overflow-hidden animate-fade"></div>
      <Image src={headshot} alt="headshot" className="rounded-full mb-9" height={160} width={160}/>
      <p className="flex justify-center text-center text-lg mb-5">
        I'm a full stack developer currently working with React Native and Ruby
        on Rails, however I'm comfortable working with a variety of languages,
        frameworks and libraries on both the front and back end. This includes
        blockchain. Recently I've been building apps using Solidity, Hardhat and
        Ethers.js. I'm very confident in my ability to learn and work with new
        technologies.
      </p>
      <p className="flex justify-center text-center text-lg mb-5">
        As of now, I'm working with an early stage start up, PainNavigator, as
        their sole developer, making all technical decisions. I currently work solo but I am
        also comfortable working on team in any role from leadership on down. I
        pride myself on writing clean, readable and efficient code, as well as
        my problem solving skills and work ethic.
      </p>
      <p className="flex justify-center text-center text-lg mb-5">
        I completed General Assembly's Software Engineering Immersive in 2022.
        Prior to my career in software development, I was working as a touring
        musician.
      </p>
    </div>
  );
};
