import Image from "next/image";
import TextLink from "@/components/TextLink";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  link?: {
    label: string;
    href: string;
  };
  image?: {
    src: string;
    alt: string;
  };
};

export default function PageHeader({
  title,
  subtitle,
  link,
  image,
}: PageHeaderProps) {
  return (
    <header className={`mb-14 ${image ? "flex items-start gap-8" : ""}`}>
      {image && (
        <div className="relative h-[150px] w-[150px] shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-border">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-top"
            sizes="150px"
            priority
          />
        </div>
      )}
      <div>
        <h1 className="text-page-h1 text-primary">{title}</h1>
        {subtitle && (
          <p className="mt-5 text-body-lg text-secondary">{subtitle}</p>
        )}
        {link && (
          <p className="mt-5">
            <TextLink href={link.href} external className="text-meta text-accent-2">
              {link.label}
            </TextLink>
          </p>
        )}
      </div>
    </header>
  );
}
