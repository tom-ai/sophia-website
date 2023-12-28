"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Input, Textarea } from "@nextui-org/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORM || "luiygoi",
  );

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <section id="contact" className="py-12 md:w-2/3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          id="email"
          type="email"
          name="email"
          label="Email"
          style={{ backgroundColor: "transparent" }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Textarea
          id="message"
          name="message"
          label="Message"
          style={{ backgroundColor: "transparent" }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button type="submit" disabled={state.submitting} color="primary">
          Submit
        </Button>
        <ValidationError errors={state.errors} />
      </form>
    </section>
  );
}
