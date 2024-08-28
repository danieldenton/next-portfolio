import ContactForm from "./components/contact-form";

export default function Home() {
  return (
    <div className="animate-fade">
    <ContactForm />
    <p className="text-center mt-10">This app was created with Next.js</p>
    <p className="text-center my-2">DD 2024</p>
    </div>
  );
}
