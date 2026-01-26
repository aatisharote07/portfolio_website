"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ExperienceCardProps {
    title: string
    company: string
    location: string
    period: string
    description: string[]
    index: number
}

export function ExperienceCard({ title, company, location, period, description, index }: ExperienceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <Card className="border-l-4 border-primary shadow-[-2px_0_8px_rgba(91,108,255,0.3)]">
                <CardHeader className="flex flex-row gap-4 items-start">
                    {/* Icon Placeholder */}
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Briefcase className="h-6 w-6 text-primary" />
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                            <div>
                                <CardTitle>{title}</CardTitle>
                                <CardDescription className="mt-1 font-medium text-foreground">
                                    {company}
                                </CardDescription>
                                <CardDescription>
                                    {location}
                                </CardDescription>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                                <Calendar className="h-4 w-4" />
                                {period}
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="pl-[5.5rem]"> {/* Indent content to align with text start, accounting for icon width + gap */}
                    <ul className="space-y-2">
                        <AnimatePresence initial={false}>
                            {description.map((item, i) => {
                                // Should show if expanded OR if it's the first item
                                if (!isExpanded && i > 0) return null;

                                return (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-sm text-muted-foreground flex items-start"
                                    >
                                        <span className="mr-2">•</span>
                                        <span>{item}</span>
                                    </motion.li>
                                )
                            })}
                        </AnimatePresence>
                    </ul>

                    {description.length > 1 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            className="mt-4 p-0 h-auto font-normal text-muted-foreground hover:text-primary hover:bg-transparent"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? (
                                <>
                                    Show less <ChevronUp className="ml-1 h-3 w-3" />
                                </>
                            ) : (
                                <>
                                    Show more <ChevronDown className="ml-1 h-3 w-3" />
                                </>
                            )}
                        </Button>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    )
}
