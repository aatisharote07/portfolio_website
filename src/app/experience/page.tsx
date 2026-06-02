import { Metadata } from "next"
import { Briefcase, Calendar, GraduationCap, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExperienceCard } from "@/components/ui/experience-card"
import { AnimatedSection } from "@/components/sections/animated-section"

export const metadata: Metadata = {
  title: "Experience",
  description: "My professional experience and education background",
}

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

const education = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "University of Mumbai",
    location: "CGPA: 8.77",
    period: "Aug 2022 - May 2026",
    description: ""
  },
  {
    degree: "HSC (12th)",
    institution: "Fr. Agnel Multipurpose School & Junior College",
    location: "67.67%",
    period: "Mar 2022",
    description: ""
  },
  {
    degree: "SSC (10th)",
    institution: "Fr. Agnel Multipurpose School & Junior College",
    location: "92.20%",
    period: "Mar 2020",
    description: ""
  }
]



export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
          <p className="text-xl text-muted-foreground mb-12">
            My professional journey, education, and certifications.
          </p>
        </AnimatedSection>

        {/* Certifications */}
        {/* Certifications */}
        {/* Certifications: Moved to /certifications */}




        {/* Work Experience */}
        <AnimatedSection delay={0.1}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Work Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <ExperienceCard key={exp.company} {...exp} index={index} />
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={0.2}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.institution}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription className="mt-1 font-medium text-foreground">
                          {edu.institution}
                        </CardDescription>
                        <CardDescription>
                          {edu.location}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </AnimatedSection>

      </div>

      {/* Featured Blog */}
      <AnimatedSection delay={0.3}>
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            Featured Blog
          </h2>
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle>Data Analysis and Data Science: A Rewarding Career Path for Students</CardTitle>
                  <CardDescription className="mt-1">
                    Understanding demand and future opportunities
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Nov 2024
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                An in-depth exploration of why data science is becoming one of the most sought-after career paths for students, analyzing market trends and the skills required to succeed in this evolving landscape.
              </p>
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://medium.com/@aatisharote07/data-analysis-and-data-science-a-rewarding-career-path-for-students-understanding-demand-and-e2dc4398abc1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read on Medium
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </AnimatedSection>
    </div>
  )
}
