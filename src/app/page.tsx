import ContactForm from "./components/contact-form";
import Modal from "./components/modal";
import AboutPage from "./components/about-page";
import ProjectsPage from "./components/projects-page";
import Web3Page from "./components/web3-page";

export default function Home() {
  return (
    <div className="animate-fade flex justify-center flex-col w-full overflow-hidden">
      <Modal />
      <div className="flex flex-col justify-center items-center sm:mb-[150px]">
        <ContactForm />
        <AboutPage />
        <ProjectsPage />
        <Web3Page />
      </div>
    </div>
  );
}
