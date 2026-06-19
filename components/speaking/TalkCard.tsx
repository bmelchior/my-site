import Card from "@/components/Card";
import SecondaryButton from "@/components/SecondaryButton";
import TagPill from "@/components/TagPill";
import type { Talk } from "@/lib/data/talks";

type TalkCardProps = {
  talk: Talk;
};

export default function TalkCard({ talk }: TalkCardProps) {
  return (
    <Card variant="product" className="p-8 md:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-card-title text-primary">{talk.title}</h2>
          <p className="mt-4 text-body text-secondary">{talk.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {talk.audiences.map((audience) => (
              <TagPill key={audience} label={audience} />
            ))}
          </div>
        </div>
        <div className="shrink-0">
          <SecondaryButton href="/contact">Get in touch</SecondaryButton>
        </div>
      </div>
    </Card>
  );
}
