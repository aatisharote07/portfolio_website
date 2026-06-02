"use client"

import { motion } from "framer-motion"
import { ExperienceCard } from "@/components/ui/experience-card"

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Smollan (Extended Workforce for Google)",
    location: "Remote",
    period: "Apr 2026 – Present",
    description: [
      "Managed end-to-end weekly data pipelines for the EMEA region, standardizing web-scraped datasets for mobile hardware sales and carrier tariffs to ensure consistency across 5 executive dashboards.",
      "Executed advanced SQL queries in Google BigQuery to manage database insertions, leveraging Python (Pandas) for rigorous data cleaning and complex data transformation workflows.",
      "Audited source data accuracy and structured reporting feeds utilizing advanced Excel and Google Sheets functions (XLOOKUP, VLOOKUP, IMPORTRANGE, Pivot Tables) to bridge raw data with front-end reporting."
    ]
  },
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
    <section id="experience" className="py-20 bg-muted/50 bg-gradient-to-b from-purple-500/[0.03] to-transparent">
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
            <ExperienceCard key={exp.company} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
