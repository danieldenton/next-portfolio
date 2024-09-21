import ContactForm from "./components/contact-form";

export default function Home() {
  return (
    <div className="animate-fade flex justify-center flex-col w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center sm:mb-[150px]">
        <ContactForm />
      </div>
    </div>
  );
}
