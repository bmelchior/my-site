"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

export type DoneBlock = {
  image: string;
  imageAlt: string;
  leadIn: string;
  story: string;
};

type DoneBlocksProps = {
  blocks: DoneBlock[];
};

export default function DoneBlocks({ blocks }: DoneBlocksProps) {
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const syncHeights = () => {
      const items = Array.from(list.children) as HTMLElement[];

      items.forEach((item) => {
        item.style.removeProperty("height");
      });

      const maxHeight = Math.max(
        125,
        ...items.map((item) => item.getBoundingClientRect().height),
      );

      items.forEach((item) => {
        item.style.height = `${maxHeight}px`;
      });
    };

    syncHeights();

    const resizeObserver = new ResizeObserver(syncHeights);
    resizeObserver.observe(list);
    window.addEventListener("resize", syncHeights);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncHeights);
    };
  }, []);

  return (
    <div ref={listRef} className="flex flex-col gap-4">
      {blocks.map((block) => (
        <div
          key={block.leadIn}
          className="flex min-h-[125px] gap-4 overflow-hidden rounded-lg bg-hero-bg"
        >
          <Image
            src={block.image}
            alt={block.imageAlt}
            width={125}
            height={125}
            className="size-[125px] min-h-[125px] min-w-[125px] shrink-0 object-contain object-left"
          />
          <p className="flex flex-1 items-center py-6 pr-6 text-base leading-relaxed text-primary">
            <span>
              <b>{block.leadIn} </b>
              {block.story}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
