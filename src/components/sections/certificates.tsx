"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const certificates = [
    {
        title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        date: "July 2025",
        url: "https://learn.microsoft.com/en-us/users/aatisharote07/credentials/certification/azure-fundamentals?tab=credentials-tab&source=docs",
        image: "/images/certifications/az-900.png?v=2"
    },
    {
        title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
        issuer: "Microsoft",
        date: "January 2026",
        url: "https://learn.microsoft.com/en-us/users/aatisharote07/credentials/certification/azure-data-fundamentals?wt.mc_id=certnurture_eml1_email_wwl&tab=credentials-tab",
        image: "/images/certifications/dp-900.png?v=1"
    },
    {
        title: "British Airways Data Science Job Simulation",
        issuer: "British Airways | Forage",
        date: "January 2024",
        url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_NQqACaT3jEDuenHGc_1749185988759_completion_certificate.pdf",
        image: "/images/certifications/british-airways-data-science-new.png"
    },
    {
        title: "Accenture Data Analytics and Visualization Job Simulation",
        issuer: "Accenture | Forage",
        date: "January 2024",
        url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_NQqACaT3jEDuenHGc_1743869859726_completion_certificate.pdf",
        image: "/images/certifications/accenture-data-analytics-new.png"
    },
    {
        title: "Python for Beginners",
        issuer: "Udemy",
        date: "December 2023",
        url: "https://www.udemy.com/certificate/UC-dfc517f2-0299-444c-95bf-43793335ee47/",
        image: "/images/certifications/python-udemy-new.png"
    },
    {
        title: "SQL (Basic) Certificate",
        issuer: "HackerRank",
        date: "April 2025",
        url: "https://www.hackerrank.com/certificates/iframe/4f85da1bb669",
        image: "/images/certifications/hackerrank-sql-basic.png"
    },
    {
        title: "AWS PartyRock Hackathon",
        issuer: "AWS",
        date: "October 2023",
        url: "https://drive.google.com/file/d/1hAEldSJhgYbSRFo-lW68pjvquKhtwu71/view?usp=sharing",
        image: "/images/certifications/aws-participation-2025.png"
    }
]

export function Certificates() {
    return (
        <section id="certificates" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                        Certificates

                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                        Professional certifications and achievements.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full flex flex-col bg-card/50 hover:bg-card/80 transition-all duration-300 border-none shadow-lg hover:shadow-xl rounded-2xl overflow-hidden group">
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative h-48 bg-muted overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Badge variant="secondary" className="bg-black/50 text-white backdrop-blur-sm">
                                            <ExternalLink className="w-3 h-3 mr-1" />
                                            View
                                        </Badge>
                                    </div>
                                </a>

                                <CardContent className="flex-1 p-6 flex flex-col pt-6">
                                    <div className="mb-2">
                                        <span className="text-sm font-medium text-muted-foreground">
                                            {cert.issuer}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-lg mb-4 text-foreground leading-tight group-hover:text-primary transition-colors">
                                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                                            {cert.title}
                                        </a>
                                    </h3>

                                    <div className="mt-auto pt-4 border-t border-border/50">
                                        <div className="flex items-center text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                            {cert.date}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
