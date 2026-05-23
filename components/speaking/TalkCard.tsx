import Card from "@/components/Card";
import SecondaryButton from "@/components/SecondaryButton";
import TagPill from "@/components/TagPill";
import type { Talk } from "@/lib/data/talks";

type TalkCardProps = {
  talk: Talk;
};

export default function TalkCard({ talk }: TalkCardProps) {
  return (
    <Card className="p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-semibold text-primary">{talk.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-secondary">
            {talk.description}
          </p>
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
