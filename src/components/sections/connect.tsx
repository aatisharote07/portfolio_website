import { siteConfig } from "@/config/site";
import { SiGithub, SiLinkedin, SiCodechef, SiLeetcode, SiKaggle, SiHackerrank } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function Connect() {
    const socialIcons = {
        github: { Icon: SiGithub, url: siteConfig.github },
        linkedin: { Icon: SiLinkedin, url: siteConfig.linkedin },
        codechef: { Icon: SiCodechef, url: siteConfig.codechef },
        leetcode: { Icon: SiLeetcode, url: siteConfig.leetcode },
        kaggle: { Icon: SiKaggle, url: siteConfig.kaggle },
        hackerrank: { Icon: SiHackerrank, url: siteConfig.hackerrank },
        email: { Icon: FaEnvelope, url: `mailto:${siteConfig.email}` },
    };

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
                                {Object.entries(socialIcons).map(([key, { Icon, url }]) => (
                                    url && (
                                        <Tooltip key={key}>
                                            <TooltipTrigger asChild>
                                                <a
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-accent"
                                                    aria-label={`${key} profile`}
                                                >
                                                    <Icon className="h-6 w-6" />
                                                </a>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="capitalize">{key}</p>
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
