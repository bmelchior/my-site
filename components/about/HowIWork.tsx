const workEntries = [
  {
    title: "Elevating Work & People",
    paragraphs: [
      "I balance setting a high bar with an encouraging approach that brings the best work out of people.",
      "I cut through noise to find and articulate what matters most, breaking down a complex idea so it clicks.",
    ],
  },
  {
    title: "Reading The Situation",
    paragraphs: [
      "I listen for what's not being said. That's the real underlying need. Whether that's mediating a team conflict, coaching a designer, or deciphering user feedback.",
      "I deliver what's needed with empathy, whether that's motivation, reassurance, or a reframe that moves both sides toward resolution.",
    ],
  },
];

export default function HowIWork() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {workEntries.map((entry) => (
        <article
          key={entry.title}
          className="rounded-[var(--radius-md)] border border-border bg-surface-2 p-6"
        >
          <h3 className="text-card-title text-primary">{entry.title}</h3>
          {entry.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-3 text-body text-secondary"
            >
              {paragraph}
            </p>
          ))}
        </article>
      ))}
    </div>
  );
}
