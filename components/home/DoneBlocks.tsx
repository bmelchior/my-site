export type DoneBlockLogo = {
  src: string;
  alt: string;
  compact?: boolean;
  offsetY?: number;
};

export type DoneBlock = {
  image?: string;
  imageAlt?: string;
  images?: DoneBlockLogo[];
  leadIn: string;
  story: string;
};

type DoneBlocksProps = {
  blocks: DoneBlock[];
};

function extractMetric(leadIn: string): { metric: string; label: string } {
  const trimmed = leadIn.replace(/—\s*$/, "").trim();
  const numericMatch = trimmed.match(
    /^([+]?\d+(?:\.\d+)?(?:%|pt|x)?)\s*(.*)$/i,
  );

  if (numericMatch?.[1]) {
    return {
      metric: numericMatch[1],
      label: numericMatch[2]?.trim() ?? "",
    };
  }

  return { metric: trimmed, label: "" };
}


export default function DoneBlocks({ blocks }: DoneBlocksProps) {
  return (
    <div className="relative -mx-[var(--page-margin)] border-y border-border bg-surface px-[var(--page-margin)] py-10 md:py-14">
      <div className="content-container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {blocks.map((block) => {
            const { metric, label } = extractMetric(block.leadIn);

            return (
              <article
                key={block.leadIn}
                className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-surface-2 p-6"
              >
                {block.images?.length ? (
                  <div className="flex flex-nowrap items-center gap-4">
                    {block.images.map((logo) => (
                      <img
                        key={logo.src}
                        src={logo.src}
                        alt={logo.alt}
                        style={
                          logo.offsetY
                            ? { transform: `translateY(-${logo.offsetY}px)` }
                            : undefined
                        }
                        className={
                          logo.compact
                            ? "h-[24px] w-[18%] shrink-0 bg-transparent object-contain object-center"
                            : "h-[40px] w-[30%] shrink-0 bg-transparent object-contain object-center"
                        }
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={block.image}
                    alt={block.imageAlt ?? ""}
                    className="h-[40px] w-auto max-w-full bg-transparent object-contain object-left"
                  />
                )}
                <div>
                  <p className="font-mono text-2xl font-medium leading-none tracking-tight text-accent md:text-3xl">
                    {metric}
                  </p>
                  {label && (
                    <p className="mt-2 text-sm font-medium text-primary">{label}</p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-secondary">
                    {block.story}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
