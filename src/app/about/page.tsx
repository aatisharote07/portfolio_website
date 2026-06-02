import { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, skills, and experience",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="w-60 h-60 relative rounded-full overflow-hidden mx-auto mb-4 bg-muted border-2 border-border shadow-sm">
                  {/* Placeholder for profile image */}
                  <Image
                    src="/images/profile-new.png"
                    alt={siteConfig.name}
                    layout="fill"
                    className="object-cover scale-[1.3] object-[60%_90%]"
                  />
                </div>
                <h2 className="text-xl font-bold mb-2">{siteConfig.name}</h2>
                <p className="text-muted-foreground">{siteConfig.title}</p>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Background</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hey, I&apos;m Aatish. I am a recent Computer Engineering graduate (Class of 2026) and a Microsoft Certified Data Analyst (PL-300). My work bridges the gap between raw data and actionable strategy using Python, SQL, and Power BI to build pipelines and dashboards that are reliable, intuitive, and genuinely useful.
                  </p>
                  <p>
                    I have hands-on experience managing data infrastructure and leading visualization projects. Currently, I am a Data Analyst Intern at Smollan (an extended workforce for Google), where I manage regional data pipelines and ensure data consistency for executive dashboards using Python and Google BigQuery. Previously, I honed my ability to turn complex datasets into clear narratives during a remote internship with Infosys Springboard. I&apos;m particularly fascinated by how Generative AI and agentic workflows are transforming analytics, and I actively build projects like my Real Estate Analytics platform to push those boundaries.
                  </p>
                  <p>
                    My approach is rooted in discipline and curiosity. Whether I&apos;m training ML models or refining an ETL pipeline, I treat every error as a lesson and every project as an opportunity to grow. I believe that sustained, daily effort is the only secret to meaningful progress.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">What I Do</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Data Analysis & EDA</h4>
                    <p className="text-sm text-muted-foreground">
                      Clean, explore, and find signals in datasets (Pandas, NumPy, SQL).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Machine Learning & Modeling</h4>
                    <p className="text-sm text-muted-foreground">
                      Build, validate, and tune models with emphasis on interpretability and reliability.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">End-to-End Pipelines</h4>
                    <p className="text-sm text-muted-foreground">
                      Web scraping → preprocessing → modeling → deployment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dashboards & Visualization</h4>
                    <p className="text-sm text-muted-foreground">
                      Create clear dashboards that drive decisions (interactive & static).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">MLOps Basics & Cloud</h4>
                    <p className="text-sm text-muted-foreground">
                      Deploy models and manage artifacts with reproducible workflows.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      Translate technical findings into business-focused recommendations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4">Interests & Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Tech Blogging</Badge>
              <Badge variant="secondary">Sports</Badge>
              <Badge variant="secondary">Photography</Badge>
              <Badge variant="secondary">Hiking</Badge>
              <Badge variant="secondary">Reading</Badge>
              <Badge variant="secondary">Gaming</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
