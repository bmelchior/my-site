import Card from "@/components/Card";
import TagPill from "@/components/TagPill";
import type { Talk } from "@/lib/data/talks";

type TalkCardProps = {
  talk: Talk;
};

export default function TalkCard({ talk }: TalkCardProps) {
  return (
    <Card className="p-8">
      <h2 className="text-xl font-semibold text-primary">{talk.title}</h2>
      <p className="mt-4 text-base leading-relaxed text-secondary">
        {talk.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {talk.audiences.map((audience) => (
          <TagPill key={audience} label={audience} />
        ))}
      </div>
    </Card>
  );
}
