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
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full rounded border border-border bg-surface px-4 py-3 text-primary transition-all duration-200 ease-in-out focus:border-accent focus:shadow-[0_0_0_3px_rgba(45,45,45,0.1)] focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded border border-border bg-surface px-4 py-3 text-primary transition-all duration-200 ease-in-out focus:border-accent focus:shadow-[0_0_0_3px_rgba(45,45,45,0.1)] focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full resize-y rounded border border-border bg-surface px-4 py-3 text-primary transition-all duration-200 ease-in-out focus:border-accent focus:shadow-[0_0_0_3px_rgba(45,45,45,0.1)] focus:outline-none"
        />
      </div>
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
}
