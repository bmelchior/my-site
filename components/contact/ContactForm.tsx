"use client";

import Button from "@/components/Button";

export default function ContactForm() {
  return (
    <form
      className="space-y-6"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-meta text-muted">
          Name
        </label>
        <input id="name" name="name" type="text" className="field-input" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-meta text-muted">
          Email
        </label>
        <input id="email" name="email" type="email" className="field-input" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-meta text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="field-input min-h-[140px] resize-y"
        />
      </div>
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
}
