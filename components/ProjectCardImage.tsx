import Image from "next/image";
import AppStoreBadge from "@/components/AppStoreBadge";
import PlaceholderImage from "@/components/PlaceholderImage";

type ProjectCardImageProps = {
  alt: string;
  src?: string;
  aspectRatio?: "4/3" | "square";
  className?: string;
  showAppStoreBadge?: boolean;
  workInProgress?: boolean;
};

export default function ProjectCardImage({
  alt,
  src,
  aspectRatio = "4/3",
  className = "",
  showAppStoreBadge = false,
  workInProgress = false,
}: ProjectCardImageProps) {
  const aspectClass =
    aspectRatio === "square" ? "aspect-square" : "aspect-[4/3]";

  return (
    <div className="relative">
      {src ? (
        <div
          className={`relative w-full overflow-hidden bg-highlight ${aspectClass} ${className}`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <PlaceholderImage
          alt={alt}
          aspectRatio={aspectRatio}
          className={className}
          workInProgress={workInProgress}
        />
      )}
      {showAppStoreBadge && (
        <div className="absolute left-3 top-3">
          <AppStoreBadge />
        </div>
      )}
    </div>
  );
}
