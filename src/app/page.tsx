import ContactForm from "./components/contact-form";

export default function Home() {
  return (
    <div className="animate-grow-fade animate-grow flex flex-col w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center sm:mb-[150px]">
        <ContactForm />
      </div>
    </div>
  );
}
