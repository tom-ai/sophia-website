import ContactForm from "../components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <header className={`py-12 text-center`}>
        <hgroup>
          <h1 className="text-3xl font-bold">Contact Sophia</h1>
          <p>Drop me a message!</p>
        </hgroup>
      </header>
      <main className="md:flex md:justify-center">
        <ContactForm />
      </main>
    </>
  );
}
