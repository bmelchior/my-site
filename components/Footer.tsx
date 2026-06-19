export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-10">
      <div className="content-container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-meta text-subtle">
          &copy; 2026 Brandon Melchior
        </p>
        <nav
          className="flex flex-wrap gap-6"
          aria-label="Social links"
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
    </footer>
  );
}
