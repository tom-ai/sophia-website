import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <>
      <PageHeader direction="center" title="Contact">
        Drop me a message!
      </PageHeader>
      <main className="md:flex md:justify-center">
        <section className="py-12 md:w-2/3">
          <ContactForm />
        </section>
      </main>
    </>
  );
}
