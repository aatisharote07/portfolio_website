"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TechIcon } from "@/components/ui/tech-icon"

const skillCategories = [
  {
    name: "Programming & Databases",
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "MySQL" },
    ]
  },
  {
    name: "Data Science Libraries",
    skills: [
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Scikit-Learn" },
    ]
  },
  {
    name: "Tools, Software & Cloud",
    skills: [
      { name: "Jupyter Notebook" },
      { name: "Git" },
      { name: "Microsoft Excel" },
      { name: "Tableau" },
      { name: "AWS" },
      { name: "Azure" },
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.name} className="bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center text-primary">{category.name}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-muted/50">
                      <div className="text-accent-foreground/80"><TechIcon skillName={skill.name} /></div>
                      <span className="font-medium text-sm text-foreground/90">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
