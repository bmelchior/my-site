type TokenSwatchProps = {
  name: string;
  variable: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function TokenSwatch({
  name,
  variable,
  className = "",
  style,
}: TokenSwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`h-16 rounded-[var(--radius-sm)] border border-border ${className}`}
        style={style}
      />
      <div>
        <p className="text-sm font-medium text-primary">{name}</p>
        <p className="font-mono text-xs text-subtle">{variable}</p>
      </div>
    </div>
  );
}
