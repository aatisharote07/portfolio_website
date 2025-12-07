import { siteConfig } from "@/config/site"

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  fork: boolean
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=100`,
      {
        headers: {
          ...(siteConfig.githubToken && {
            Authorization: `Bearer ${siteConfig.githubToken}`,
          }),
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos = await response.json()

    // Filter out forks and sort by stars
    return repos
      .filter((repo: GitHubRepo) => !repo.fork)
      .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count)
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    return []
  }
}

export async function getGitHubUser() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${siteConfig.githubUsername}`,
      {
        headers: {
          ...(siteConfig.githubToken && {
            Authorization: `Bearer ${siteConfig.githubToken}`,
          }),
        },
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching GitHub user:", error)
    return null
  }
}
