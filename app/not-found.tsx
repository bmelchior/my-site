import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="content-container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="text-hero text-primary">Page not found</h1>
      <p className="mt-5 max-w-md text-body-lg text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </div>
      <p className="mt-6 text-body text-secondary">
        Or try{" "}
        <Link href="/perspectives" className="link-editorial">
          Perspectives
        </Link>
      </p>
    </div>
  );
}
