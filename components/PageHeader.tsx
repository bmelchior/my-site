import Image from "next/image";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <header className={`mb-12 ${image ? "flex items-start gap-6" : ""}`}>
      {image && (
        <div className="relative h-[150px] w-[150px] shrink-0 overflow-hidden rounded-lg">
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
        <h1 className="text-3xl font-semibold text-primary md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-secondary">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
