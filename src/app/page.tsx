import { Metadata } from "next";
import ContactForm from "./components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Daniel Denton Dev",
};

export default function Home() {
  return (
    <div className="animate-fade flex justify-center flex-col w-full overflow-hidden">
      <div className="flex justify-center sm:mb-[150px]">
        <ContactForm />
      </div>
    </div>
  );
}
