type ComingSoonBadgeProps = {
  className?: string;
};

export default function ComingSoonBadge({ className = "" }: ComingSoonBadgeProps) {
  return (
    <span className={`chip-status chip-app-store ${className}`}>Coming soon</span>
  );
}
