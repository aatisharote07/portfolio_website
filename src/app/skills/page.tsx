import { Metadata } from "next"
import { Skills } from "@/components/sections/skills"

export const metadata: Metadata = {
  title: "Skills",
  description: "My technical skills and expertise",
}

export default function SkillsPage() {
  return (
    <div className="py-20">
      <Skills />
    </div>
  )
}
