import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="content-container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="text-3xl font-semibold text-primary md:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </div>
      <p className="mt-6 text-sm text-secondary">
        Or try{" "}
        <Link
          href="/perspectives"
          className="text-accent transition-colors duration-200 ease-in-out hover:text-accent-hover"
        >
          Perspectives
        </Link>
      </p>
    </div>
  );
}
