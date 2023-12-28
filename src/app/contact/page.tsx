import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <>
      <PageHeader direction="center" title="Contact Sophia">
        Drop me a message!
      </PageHeader>
      <main className="md:flex md:justify-center">
        <ContactForm />
      </main>
    </>
  );
}
