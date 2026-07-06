type PlaceholderImageProps = {
  alt: string;
  aspectRatio?: "4/3" | "16/9" | "16/7" | "square";
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
    aspectRatio === "square"
      ? "aspect-square"
      : aspectRatio === "16/9"
        ? "aspect-video"
        : aspectRatio === "16/7"
          ? "aspect-[16/7]"
          : "aspect-[4/3]";

  return (
    <div
      role="img"
      aria-label={workInProgress ? `${alt} — Work in progress` : alt}
      className={`relative flex w-full items-center justify-center overflow-hidden bg-surface-2 ${aspectClass} ${className}`}
    >
      {/* Abstract UI panel */}
      <div className="absolute inset-4 rounded-[var(--radius-sm)] border border-border bg-surface-3 opacity-60" />
      <div className="absolute bottom-6 left-6 right-6 h-2 rounded-full bg-border" />
      <div className="absolute bottom-10 left-6 h-2 w-1/3 rounded-full bg-border-strong" />
      {workInProgress && (
        <span className="chip-status relative z-10">WORK IN PROGRESS</span>
      )}
    </div>
  );
}
