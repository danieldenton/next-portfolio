import ContactForm from "./components/contact-form";

export default function Home() {
  return (
    <div className="animate-grow-fade animate-grow w-full overflow-hidden">
      <div className="flex flex-col sm:mb-[150px]">
        <ContactForm />
      </div>
    </div>
  );
}
