const workEntries = [
  {
    title: "Elevating Work & People",
    paragraphs: [
      "I balance setting a high bar with an empathetic, encouraging approach that brings the best work out of people.",
      "I cut through noise to find and articulate what matters most, breaking down complex ideas into something simple and easy to understand.",
    ],
  },
  {
    title: "Vision & Strategy",
    paragraphs: [
      "I work with the team to set a clear vision and the strategy to reach it — establishing principles the team can rally around and setting an iterative path to get there.",
      "All work is rooted in discovery: user research and data ground key decisions. And every team member is encouraged to balance data with intuition, experience, and conviction.",
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
