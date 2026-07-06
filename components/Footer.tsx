import Button from "@/components/Button";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-10">
      <div className="content-container">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
          <p className="text-meta text-subtle text-center sm:justify-self-start sm:text-left">
            &copy; 2026 Brandon Melchior
          </p>

          <Button
            href="/photography"
            variant="primary"
            className="justify-self-center"
          >
            See my photography
          </Button>

          <nav
            className="flex flex-wrap justify-center gap-6 sm:justify-self-end"
            aria-label="Footer links"
          >
            <a
              href="https://www.linkedin.com/in/bmelchior/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-editorial text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/bmelchior"
              target="_blank"
              rel="noopener noreferrer"
              className="link-editorial text-sm"
            >
              Instagram
            </a>
            <a
              href="mailto:bmelchior79@gmail.com"
              className="link-editorial text-sm"
            >
              Email
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
