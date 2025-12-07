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
                    Hey, I&apos;m Aatish. I work across the data stack building analytics pipelines, training ML models, and designing interactive visualizations to create solutions that are reliable, intuitive, and genuinely useful.
                  </p>
                  <p>
                    I&apos;m fascinated by generative AI and agentic workflows, particularly how they transform the way people interact with information. I&apos;m drawn to problems that combine analytical rigor with creativity, pushing me to understand the world more deeply.
                  </p>
                  <p>
                    My approach is rooted in curiosity and continuous learning. I constantly ask &quot;why?&quot; and &quot;how can this be better?&quot; treating every project as an opportunity to grow. I believe in discipline and consistency: showing up every day, iterating relentlessly, and trusting that sustained effort creates meaningful progress.
                  </p>
                  <p>
                    My projects and resume cover the technical details. This space is about how I think, learn, and approach my work.
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
