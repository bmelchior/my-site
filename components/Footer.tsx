export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-bg py-8">
      <div className="content-container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-dark-primary">
          &copy; 2026 Brandon Melchior
        </p>
        <nav
          className="flex flex-wrap gap-6 text-sm"
          aria-label="Social links"
        >
          <a
            href="https://www.linkedin.com/in/bmelchior/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-secondary transition-colors duration-200 ease-in-out hover:text-dark-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/bmelchior"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-secondary transition-colors duration-200 ease-in-out hover:text-dark-primary"
          >
            Instagram
          </a>
          <a
            href="mailto:bmelchior79@gmail.com"
            className="text-dark-secondary transition-colors duration-200 ease-in-out hover:text-dark-primary"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
