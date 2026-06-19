import Image from "next/image";
import AppStoreBadge from "@/components/AppStoreBadge";
import PlaceholderImage from "@/components/PlaceholderImage";

type ProjectCardImageProps = {
  alt: string;
  src?: string;
  aspectRatio?: "4/3" | "16/9" | "square";
  className?: string;
  showAppStoreBadge?: boolean;
  workInProgress?: boolean;
  objectPosition?: "top" | "bottom";
  objectFit?: "cover" | "contain";
};

export default function ProjectCardImage({
  alt,
  src,
  aspectRatio = "4/3",
  className = "",
  showAppStoreBadge = false,
  workInProgress = false,
  objectPosition = "top",
  objectFit = "cover",
}: ProjectCardImageProps) {
  const aspectClass =
    aspectRatio === "square"
      ? "aspect-square"
      : aspectRatio === "16/9"
        ? "aspect-video"
        : "aspect-[4/3]";

  return (
    <div className="relative">
      {src ? (
        <div
          className={`relative w-full overflow-hidden border-b border-border ${
            objectFit === "contain" ? "bg-[#F5F0E8]" : "bg-surface-2"
          } ${aspectClass} ${className}`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className={
              objectFit === "contain"
                ? "object-contain p-6"
                : `object-cover ${
                    objectPosition === "bottom" ? "object-bottom" : "object-top"
                  }`
            }
          />
        </div>
      ) : (
        <PlaceholderImage
          alt={alt}
          aspectRatio={aspectRatio}
          className={`border-b border-border ${className}`}
          workInProgress={workInProgress}
        />
      )}
      {showAppStoreBadge && (
        <div className="absolute left-4 top-4">
          <AppStoreBadge />
        </div>
      )}
    </div>
  );
}
