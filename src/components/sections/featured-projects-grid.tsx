"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./animated-section"

// Define the Project type based on usage. 
// Ideally this should be imported from a types file, but inferring for now to fix immediately.
interface Project {
    title: string
    description: string
    image?: string
    tags: string[]
    github: string
    demo?: string
    featured?: boolean
}

interface FeaturedProjectsGridProps {
    projects: Project[]
}

export function FeaturedProjectsGrid({ projects }: FeaturedProjectsGridProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {projects.map((project) => (
                <motion.div key={project.title} variants={item}>
                    <Card className="gradient-border h-full flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.3),0_0_20px_rgba(91,108,255,0.25)] hover:border-primary/50">
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
                            <CardTitle>{project.title}</CardTitle>
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
                            <Button size="sm" variant="outline" className="transition-all duration-300 hover:bg-primary hover:text-white" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    View Code
                                </a>
                            </Button>
                            {project.demo && (
                                <Button size="sm" className="transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/50 animate-subtle-pulse" asChild>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        Live Demo
                                    </a>
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    )
}
