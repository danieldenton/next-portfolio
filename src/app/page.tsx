import ContactForm from "./components/contact-form";

export default function Home() {
  return (
    <div className="flex justify-center flex-col w-full overflow-hidden">
      <div className="flex justify-center">
      <ContactForm />
      </div>
      <p className="text-center my-2 mt-[100px]">DD 2024</p>
    </div>
  );
}
