import type { ExpertiseSectionProps, Skills } from "@/types";

export default function ExpertisePage() {
  return (
    <div className="px-72 py-7">
      <h1 className="text-lg font-mono">Programming languages</h1>
    </div>
  );
}

function ExpertiseSection({ title, skills }: ExpertiseSectionProps) {
  return <div></div>;
}

function Skill({ title, description, index }: Skills) {
  return <div></div>;
}
