import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export interface ProjectFrontmatter {
  title: string
  description: string
  date: string
  featured?: boolean
  image?: string
  tags?: string[]
  github?: string
  demo?: string
}

export interface Project {
  slug: string
  frontmatter: ProjectFrontmatter
  content: string
}

export async function getProjects(): Promise<Project[]> {
  const projectsDirectory = path.join(contentDirectory, 'projects')
  
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(projectsDirectory)
  const projects = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(projectsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        const processedContent = await remark()
          .use(html)
          .process(content)
        const contentHtml = processedContent.toString()

        return {
          slug,
          frontmatter: data as ProjectFrontmatter,
          content: contentHtml,
        }
      })
  )

  return projects.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  })
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects()
  return projects.find((project) => project.slug === slug) || null
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects()
  return projects.filter((project) => project.frontmatter.featured)
}

export async function getAboutContent(): Promise<string> {
  const aboutPath = path.join(contentDirectory, 'about.md')
  
  if (!fs.existsSync(aboutPath)) {
    return ''
  }

  const fileContents = fs.readFileSync(aboutPath, 'utf8')
  const { content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)

  return processedContent.toString()
}
