"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { SiGithub, SiLinkedin, SiCodechef, SiLeetcode, SiKaggle } from "react-icons/si"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function Contact() {
  const socials = [
    { name: "GitHub", Icon: SiGithub, color: "#0F1724", url: siteConfig.github },
    { name: "LinkedIn", Icon: SiLinkedin, color: "#5B6CFF", url: siteConfig.linkedin },
    { name: "CodeChef", Icon: SiCodechef, color: "#6B7280", url: siteConfig.codechef }, // Using Muted/Grey
    { name: "LeetCode", Icon: SiLeetcode, color: "#BFA66A", url: siteConfig.leetcode }, // Using Gold
    { name: "Kaggle", Icon: SiKaggle, color: "#5B6CFF", url: siteConfig.kaggle },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full flex flex-col justify-center">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  You can reach me through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground hover:text-primary">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <p className="font-medium mb-4">Connect with me</p>
                  <div className="flex flex-wrap gap-4">
                    {socials.map((social) => (
                      <motion.a
                        key={social.name}
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
                      >
                        <social.Icon className="h-5 w-5 dark:invert dark:brightness-200" />
                        <span className="sr-only">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Input placeholder="Subject" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
