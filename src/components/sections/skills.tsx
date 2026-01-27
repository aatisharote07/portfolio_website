"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TechIcon } from "@/components/ui/tech-icon"

const skillCategories = [
  {
    name: "Core Programming & Data Handling",
    color: "#3b82f6", // Blue
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
    ]
  },
  {
    name: "Data Science & Analytics",
    color: "#8b5cf6", // Purple
    skills: [
      { name: "Scikit-Learn" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "Microsoft Excel" },
      { name: "Jupyter Notebook" },
    ]
  },
  {
    name: "Cloud, Engineering & DevOps",
    color: "#10b981", // Green
    skills: [
      { name: "AWS" },
      { name: "Azure" },
      { name: "Snowflake" },
      { name: "Flask" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "Git" },
      { name: "Apache Spark" },
      { name: "Apache Airflow" },
    ]
  }
]

import { AnimatedSection } from "@/components/sections/animated-section"

// ... imports

// ... skillCategories

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-blue-500/[0.03] to-purple-500/[0.03]">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.name} delay={index * 0.1}>
              <Card
                className="bg-card/80 backdrop-blur-sm"
                style={{ backgroundColor: `${category.color}0D` }} // 0.05 opacity approx in hex is 0D
              >
                <CardContent className="p-6">
                  <h3
                    className="text-xl font-semibold mb-4 text-center pb-2"
                    style={{ borderBottom: `3px solid ${category.color}`, color: category.color }}
                  >
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary/10 dark:hover:bg-white/10 hover:scale-105 hover:shadow-md border border-transparent hover:border-primary/20">
                        <div className="text-foreground/80 transition-colors group-hover:text-primary"><TechIcon skillName={skill.name} className="transition-all dark:brightness-0 dark:invert" /></div>
                        <span className="font-medium text-sm text-foreground/90 group-hover:font-semibold transition-all">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
