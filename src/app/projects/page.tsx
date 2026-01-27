import { Metadata } from "next"
import { getSortedProjectsData } from "@/lib/projects"
import { AnimatedSection } from "@/components/sections/animated-section"
import { AllProjectsGrid } from "@/components/sections/all-projects-grid"

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse my portfolio of web development projects",
}


export default function ProjectsPage() {
  const projects = getSortedProjectsData()
  console.log('Projects on Page:', projects);
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground mb-12">
            A collection of projects I&apos;ve worked on, showcasing my skills and experience.
          </p>
        </AnimatedSection>

        <div className="mt-8">
          <AllProjectsGrid projects={projects} />
        </div>
      </div>
    </div>
  )
}
