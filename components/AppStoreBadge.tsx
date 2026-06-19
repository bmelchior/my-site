type AppStoreBadgeProps = {
  className?: string;
};

export default function AppStoreBadge({ className = "" }: AppStoreBadgeProps) {
  return (
    <span className={`chip-status chip-app-store ${className}`}>
      Available in the App Store
    </span>
  );
}
