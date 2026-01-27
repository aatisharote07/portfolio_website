"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Assuming Project type is consistent, defining it here or importing if available
// For safety, I'll define a compatible interface
interface Project {
    title: string
    description: string
    image?: string
    tags: string[]
    github: string
    demo?: string
    featured?: boolean
}

interface AllProjectsGridProps {
    projects: Project[]
}

export function AllProjectsGrid({ projects }: AllProjectsGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <Card className="gradient-border flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.3),0_0_20px_rgba(91,108,255,0.25)] hover:border-primary/50">
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
                </motion.div>
            ))}
        </div>
    )
}
