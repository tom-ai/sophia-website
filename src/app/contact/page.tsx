import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import { Button, Divider, Link } from "@nextui-org/react";

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" />
      <main>
        <section className="py-12">
          <p>Drop me a message!</p>
          <ContactForm />
          <Button
            as={Link}
            href="https://www.instagram.com/sophiayadig/"
            fullWidth
            color="secondary"
            rel="noreferrer me"
            className="mt-12"
          >
            Follow on Instagram
          </Button>
        </section>
      </main>
    </>
  );
}
