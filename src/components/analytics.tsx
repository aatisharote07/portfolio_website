"use client"

import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import { siteConfig } from "@/config/site"

export function Analytics() {
  if (!siteConfig.features.analytics) return null
  return <VercelAnalytics />
}
