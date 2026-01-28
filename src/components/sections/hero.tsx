"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown } from "lucide-react"
import { SiGithub, SiLinkedin, SiCodechef, SiLeetcode, SiKaggle } from "react-icons/si"
import { FaEnvelope } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function Hero() {
  const socialIcons = {
    github: { Icon: SiGithub, url: siteConfig.github },
    linkedin: { Icon: SiLinkedin, url: siteConfig.linkedin },
    codechef: { Icon: SiCodechef, url: siteConfig.codechef },
    leetcode: { Icon: SiLeetcode, url: siteConfig.leetcode },
    kaggle: { Icon: SiKaggle, url: siteConfig.kaggle },
    email: { Icon: FaEnvelope, url: `mailto:${siteConfig.email}` },
  };
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-blobs"
      aria-label="Hero"
    >
      <div className="container mx-auto px-4 pt-12 pb-20 md:pt-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-foreground mb-6"
          >
            Hi, I&apos;m <span className="text-primary" style={{ textShadow: "var(--title-glow, none)" }}>{siteConfig.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto mb-6"
          >
            {siteConfig.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto min-h-[60px] mb-10"
          >
            <TypeAnimation
              sequence={[
                siteConfig.description,
                2000
              ]}
              wrapper="span"
              speed={40}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="font-bold text-lg px-8" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
              <a href="/images/Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <a href="#projects" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
