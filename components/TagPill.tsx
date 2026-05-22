type TagPillProps = {
  label: string;
  size?: "sm" | "md";
};

export default function TagPill({ label, size = "sm" }: TagPillProps) {
  const sizeClasses =
    size === "md"
      ? "px-3.5 py-1.5 text-sm"
      : "px-3 py-1 text-xs";

  return (
    <span
      className={`inline-block rounded bg-highlight text-secondary ${sizeClasses}`}
    >
      {label}
    </span>
  );
}
