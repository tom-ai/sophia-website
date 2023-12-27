import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import { Button, Card, CardBody, Link } from "@nextui-org/react";

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact">Let's work together</PageHeader>
      <main>
        <section className="py-12">
          <ContactForm />
          <Button
            as={Link}
            href="https://www.instagram.com/sophiayadig/"
            fullWidth
            color="secondary"
            rel="noreferrer me"
            className="mt-8"
          >
            Follow on Instagram
          </Button>
        </section>
      </main>
    </>
  );
}
