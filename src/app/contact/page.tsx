import PageHeader from "../components/PageHeader";
import { Button, Card, CardBody, Divider, Link } from "@nextui-org/react";

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact">Let's work together</PageHeader>
      <main>
        <section className="py-12">
          <Card>
            <CardBody className="flex h-36 items-center justify-center">
              <p>
                <em>Contact form coming soon!</em>
              </p>
            </CardBody>
          </Card>
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
