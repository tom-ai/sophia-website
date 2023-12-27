"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@nextui-org/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <section id="contact" className="py-12">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button type="submit" disabled={state.submitting}>
          Submit
        </Button>

        <ValidationError errors={state.errors} />
      </form>
    </section>
  );
}
