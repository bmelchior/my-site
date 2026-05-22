type PlaceholderImageProps = {
  alt: string;
  aspectRatio?: "4/3" | "square";
  className?: string;
  workInProgress?: boolean;
};

export default function PlaceholderImage({
  alt,
  aspectRatio = "4/3",
  className = "",
  workInProgress = false,
}: PlaceholderImageProps) {
  const aspectClass =
    aspectRatio === "square" ? "aspect-square" : "aspect-[4/3]";

  return (
    <div
      role="img"
      aria-label={workInProgress ? `${alt} — Work in progress` : alt}
      className={`flex w-full items-center justify-center bg-highlight ${aspectClass} ${className} ${
        workInProgress ? "shadow-[inset_0_2px_16px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      {workInProgress && (
        <span className="text-sm font-bold tracking-wide text-secondary/60">
          WORK IN PROGRESS
        </span>
      )}
    </div>
  );
}
