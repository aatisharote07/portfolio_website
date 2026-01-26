"use client"

import { siteConfig } from "@/config/site";
import { SiGithub, SiLinkedin, SiCodechef, SiLeetcode, SiKaggle, SiHackerrank } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

export function Connect() {
    const socials = [
        { name: "GitHub", Icon: SiGithub, color: "#0F1724", url: siteConfig.github },
        { name: "LinkedIn", Icon: SiLinkedin, color: "#5B6CFF", url: siteConfig.linkedin },
        { name: "CodeChef", Icon: SiCodechef, color: "#6B7280", url: siteConfig.codechef },
        { name: "LeetCode", Icon: SiLeetcode, color: "#BFA66A", url: siteConfig.leetcode },
        { name: "Kaggle", Icon: SiKaggle, color: "#5B6CFF", url: siteConfig.kaggle },
        { name: "HackerRank", Icon: SiHackerrank, color: "#2EC866", url: siteConfig.hackerrank },
        { name: "Email", Icon: FaEnvelope, color: "#EA4335", url: `mailto:${siteConfig.email}` },
    ];

    return (
        <section id="connect" className="py-20">
            <div className="container mx-auto px-4 max-w-2xl">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl md:text-4xl font-bold mb-2">Connect With Me</CardTitle>
                        <CardDescription>Find me on the following platforms</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TooltipProvider>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {socials.map((social) => (
                                    social.url && (
                                        <Tooltip key={social.name}>
                                            <TooltipTrigger asChild>
                                                <motion.a
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ "--btn-color": social.color } as React.CSSProperties}
                                                    className="p-3 rounded-xl bg-muted/50 border border-transparent flex items-center justify-center text-muted-foreground hover:bg-[var(--btn-color)] hover:text-white transition-all duration-300"
                                                    whileHover={{
                                                        scale: 1.1,
                                                        rotate: 5,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    aria-label={`${social.name} profile`}
                                                >
                                                    <social.Icon className="h-6 w-6 dark:invert dark:brightness-200" />
                                                    <span className="sr-only">{social.name}</span>
                                                </motion.a>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{social.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )
                                ))}
                            </div>
                        </TooltipProvider>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
