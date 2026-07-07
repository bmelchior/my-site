const timelineEntries = [
  {
    year: "2025–Present: Started building",
    description:
      "Designing and shipping AI-powered products — Teller Family, The Usher, Teller Stories, and a dyslexia EdTech suite — from idea to App Store.",
  },
  {
    year: "2022–Present: Leading design at Dish and AXS",
    description: "VP of Product Design, leading designers and researchers across consumer and enterprise experiences, and elevating the role they play in an organization.",
  },
  {
    year: "2020–2022: Raised the bar at Capital One and NETGEAR",
    description: "Lifted conversion metrics that drove a 4.5% increase in funded auto loans at Capital One. Built a small team and elevated research as a core function at NETGEAR.",
  },
  {
    year: "2017–2020: Transformed design at Ticketmaster",
    description: "Led a team of 20, built Ticketmaster's first global design system, grew NPS by 42 points, and earned Team of the Year. Proved that design-led content strategy could drive revenue.",
  },
  {
    year: "2015–2017: Built a product from zero at DirecTV",
    description: "Oversaw interaction design for DirecTV Stream across 10+ platforms from scratch. Established motion design as a discipline and built the team to support it.",
  },
  {
    year: "2009–2015: Found my footing — NYT, BuzzFeed",
    description: "Creative direction at The New York Times across digital, print, and experiential. Led UX for an internal B2B venture. Three Publisher's Awards in four years.",
  },
];

export default function CareerTimeline() {
  return (
    <ol className="relative border-l border-border pl-8">
      {timelineEntries.map((entry) => (
        <li key={entry.year} className="relative mb-10 last:mb-0">
          <span
            className="absolute -left-[calc(1rem+4px)] top-2 h-2 w-2 rounded-full bg-accent ring-4 ring-bg"
            aria-hidden="true"
          />
          <p className="text-meta text-accent">{entry.year.split(":")[0]}</p>
          <h3 className="mt-1 text-card-title text-primary">
            {entry.year.includes(":") ? entry.year.split(":").slice(1).join(":").trim() : entry.year}
          </h3>
          <p className="mt-2 text-body text-secondary">{entry.description}</p>
        </li>
      ))}
    </ol>
  );
}
