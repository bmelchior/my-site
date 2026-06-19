type TagPillProps = {
  label: string;
  variant?: "tech" | "status" | "default";
};

export default function TagPill({
  label,
  variant = "tech",
}: TagPillProps) {
  if (variant === "tech" || variant === "default") {
    return <span className="chip-tech">{label}</span>;
  }

  return <span className="chip-status">{label}</span>;
}
