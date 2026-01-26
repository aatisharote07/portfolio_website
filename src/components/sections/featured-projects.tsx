import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getSortedProjectsData } from "@/lib/projects"
import { AnimatedSection } from "./animated-section"
import { FeaturedProjectsGrid } from "./featured-projects-grid"

export function FeaturedProjects() {
  const allProjects = getSortedProjectsData()
  const featuredProjects = allProjects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 bg-muted/50 bg-gradient-to-b from-blue-500/[0.03] to-transparent">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </AnimatedSection>

        <FeaturedProjectsGrid projects={featuredProjects} />

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
