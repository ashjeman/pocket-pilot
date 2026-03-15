import { CheckCircle2 } from "lucide-react";
const features = [
  "Track fixed expenses & monthly loans",
  "Plan your engagement & wedding budget",
  "Monitor savings from both partners",
  "Task checklists with image attachments",
];

export default function DescriptionComponent() {
  return (
    <div className="relative z-10 space-y-8">
      <div>
        <h2 className="text-white leading-tight">
          Plan every moment,
          <br />
          <span className="text-white/80">from daily expenses</span>
          <br />
          to your dream wedding.
        </h2>
        <p className="text-white/70 text-sm mt-4 leading-relaxed max-w-xs">
          All-in-one finance planner built for couples — track budgets, split
          savings, and stay on top of every milestone together.
        </p>
      </div>

      <ul className="space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5">
            <CheckCircle2 className="size-4 text-white/80 shrink-0" />
            <span className="text-white/80 text-sm">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
