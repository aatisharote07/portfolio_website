import { Metadata } from "next"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getSortedProjectsData } from "@/lib/projects"
import { AnimatedSection } from "@/components/sections/animated-section"

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

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="gradient-border flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.3),0_0_20px_rgba(91,108,255,0.25)] hover:border-primary/50">
                {/* Image Section */}
                {project.image && (
                  <div className="w-full h-48 relative overflow-hidden rounded-t-lg bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    {project.featured && (
                      <Badge variant="default" className="ml-2">Featured</Badge>
                    )}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" variant="outline" asChild className="flex-1 transition-all duration-300 hover:bg-primary hover:text-white">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild className="flex-1 transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/50 animate-subtle-pulse">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
