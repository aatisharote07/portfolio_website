export const siteConfig = {
  name: "Aatish Arote",
  title: "Aatish Arote | Portfolio",
  description: "Data Scientist and Data Analyst specializing in building data-driven solutions and extracting actionable insights from complex datasets.",
  email: "aatisharote07@gmail.com",
  phone: "+91 8623071089", // Add your phone number here if you want
  location: "Mumbai, India", // Add your location here if you want
  github: "https://github.com/aatisharote07",
  linkedin: "https://www.linkedin.com/in/aatisharote/",
  codechef: "https://www.codechef.com/users/aatish07",
  leetcode: "https://leetcode.com/u/Aatish09/",
  kaggle: "https://www.kaggle.com/aatisharote",
  hackerrank: "https://www.hackerrank.com/profile/Aatish07",

  // GitHub API Configuration
  githubUsername: process.env.GITHUB_USERNAME || "aatisharote07",
  githubToken: process.env.GITHUB_TOKEN,

  // Site URLs
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  // Features
  features: {
    analytics: true,
    contactForm: true,
    blog: false,
    newsletter: false,
  },

  // Navigation
  navItems: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ],
}

export type SiteConfig = typeof siteConfig
