import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react"
import { SiGithub, SiLinkedin, SiCodechef, SiLeetcode, SiKaggle } from "react-icons/si"
import { FaEnvelope } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function Footer() {
  const socialIcons = {
    github: { Icon: SiGithub, url: siteConfig.github },
    linkedin: { Icon: SiLinkedin, url: siteConfig.linkedin },
    codechef: { Icon: SiCodechef, url: siteConfig.codechef },
    leetcode: { Icon: SiLeetcode, url: siteConfig.leetcode },
    kaggle: { Icon: SiKaggle, url: siteConfig.kaggle },
    email: { Icon: FaEnvelope, url: `mailto:${siteConfig.email}` },
  };

  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold gradient-text text-xl">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground mt-2">{siteConfig.title}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


