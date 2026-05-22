import Link from "next/link";

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
          <Link
            href="#"
            className="text-dark-secondary transition-colors duration-200 ease-in-out hover:text-dark-primary"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            className="text-dark-secondary transition-colors duration-200 ease-in-out hover:text-dark-primary"
          >
            GitHub
          </Link>
          <Link
            href="#"
            className="text-dark-secondary transition-colors duration-200 ease-in-out hover:text-dark-primary"
          >
            Email
          </Link>
        </nav>
      </div>
    </footer>
  );
}
