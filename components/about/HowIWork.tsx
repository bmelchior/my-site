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
    <ol className="space-y-8">
      {workEntries.map((entry) => (
        <li key={entry.title}>
          <h3 className="text-sm font-bold text-secondary">{entry.title}</h3>
          {entry.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-1 text-base text-primary"
            >
              {paragraph}
            </p>
          ))}
        </li>
      ))}
    </ol>
  );
}
