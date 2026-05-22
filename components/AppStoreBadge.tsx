type AppStoreBadgeProps = {
  className?: string;
};

export default function AppStoreBadge({ className = "" }: AppStoreBadgeProps) {
  return (
    <span
      className={`inline-block rounded border border-white/20 bg-black px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white ${className}`}
    >
      Available in the App Store
    </span>
  );
}
