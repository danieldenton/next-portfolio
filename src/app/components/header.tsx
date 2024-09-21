import Github from "./github";
import LinkedIn from "./linkedin";

export default function Header() {
  return (
    <>
      <header className="flex sm:flex-row flex-col justify-between sm:m-10 ">
        <div className="mt-3">
          <h1 className="text-4xl mb-1.5 flex sm:justify-start justify-center">
            Daniel Denton
          </h1>
          <h2 className="text-xl flex sm:justify-start justify-center">
            Software Developer
          </h2>
        </div>
        <div>
          <div className="flex flex-row sm:justify-end justify-center mt-1">
            <Github githubLink={"https://github.com/danieldenton"}/>
            <LinkedIn />
          </div>
          <h2 className="flex sm:justify-end justify-center ">
            daniel@danieldentondev.com
          </h2>
        </div>
      </header>
      <hr />
    </>
  );
}
