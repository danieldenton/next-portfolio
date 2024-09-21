import ModalContact from "./components/modal-contact";

export default function Home() {
  return (
    <div className="animate-grow-fade animate-grow flex justify-center flex-col w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center sm:mb-[150px]">
        <ModalContact />
      </div>
    </div>
  );
}
