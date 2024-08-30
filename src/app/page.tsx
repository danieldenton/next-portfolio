import ContactForm from "./components/contact-form";

export default function Home() {
  return (
    <div className="sm:mx-20 flex justify-around flex-col overflow-hidden">
    <ContactForm />
    <p className="text-center my-2 mt-10">DD 2024</p>
    </div>
  );
}
