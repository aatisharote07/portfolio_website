"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Intern - Data Visualization",
    company: "Infosys Springboard",
    location: "Remote",
    period: "Sep 2025– Dec 2025",
    description: [
      "Built a unified Global Tourism insight platform that blends Power BI visual storytelling with clean data pipelines, uncovering meaningful trends like seasonal travel peaks and country-wise patterns.",
      "Developed a Flask-based interactive web app to bring these insights to life, integrating AI-driven analysis and presenting it as the highlighted project of the internship cohort."
    ]
  },
  {
    title: "Data Analytics & Visualization Virtual Job Simulation",
    company: "Accenture (Forage)",
    location: "Remote",
    period: "Mar 2025– Apr 2025",
    description: [
      "Processed and analyzed 100,000+ daily unstructured posts (36M annually), integrating datasets and identi fying the top 5 content categories driving user engagement.",
      "Delivered strategic insights such as the popularity of Animals, Science, and Healthy Eating, recommending targeted campaigns and brand partnerships to increase retention"
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the roles I&apos;ve held.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
