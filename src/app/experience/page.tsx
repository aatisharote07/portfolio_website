import { Metadata } from "next"
import { Briefcase, Calendar, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Experience",
  description: "My professional experience and education background",
}

const experiences = [
  {
    title: "Intern - Data Visualization",
    company: "Infosys Springboard",
    location: "Remote",
    period: "Sep 2025– Present (Ongoing)",
    description: [
      "Completed foundational courses in Business Intelligence, Multidimensional Data Modeling, ER Modeling, and DBMS, strengthening database design and management skills.",
      "Built hands-on expertise in Power BI and Agile Scrum, creating dashboards, interactive reports, and applying teamwork practices used in real-world projects."
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
    location: "Current SGPI: 8.43/10",
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

const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    url: "https://learn.microsoft.com/en-us/users/aatisharote07/credentials/certification/azure-fundamentals?tab=credentials-tab&source=docs"
  },
  {
    name: "Accenture Data Analytics and Visualization Job Simulation",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_NQqACaT3jEDuenHGc_1743869859726_completion_certificate.pdf"
  },
  {
    name: "Python for Beginners – Udemy",
    url: "https://www.udemy.com/certificate/UC-dfc517f2-0299-444c-95bf-43793335ee47/"
  },
  {
    name: "SQL (Basic) Certificate – HackerRank",
    url: "https://www.hackerrank.com/certificates/iframe/4f85da1bb669"
  }
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
        <p className="text-xl text-muted-foreground mb-12">
          My professional journey, education, and certifications.
        </p>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={exp.company}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
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
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.institution}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription className="mt-1">
                        {edu.institution} • {edu.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
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

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                      {cert.name}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Featured Blog */}
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
    </div>
  )
}
