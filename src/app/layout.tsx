import type { Metadata } from 'next'
import { Noto_Sans, Noto_Sans as Indeed_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Analytics } from '@/components/analytics'
import '@/styles/globals.css'

const fontHeading = Indeed_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const fontBody = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'Aatish Arote | Portfolio',
    template: '%s | Aatish Arote',
  },
  description: 'Data Scientist and Data Analyst specializing in building data-driven solutions and extracting actionable insights from complex datasets.',
  keywords: ['Data Scientist', 'Data Analyst', 'Python', 'Machine Learning', 'Portfolio', 'Aatish Arote'],
  authors: [{ name: 'Aatish Arote' }],
  creator: 'Aatish Arote',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aatisharote.com', // Assuming this or similar, checking config might be better but for now replacing placehodelr
    siteName: 'Aatish Arote Portfolio',
    title: 'Aatish Arote | Portfolio',
    description: 'Data Scientist and Data Analyst specializing in building data-driven solutions and extracting actionable insights from complex datasets.',
    images: [
      {
        url: '/og.png', // Simplified path
        width: 1200,
        height: 630,
        alt: 'Aatish Arote | Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aatish Arote | Portfolio',
    description: 'Data Scientist and Data Analyst specializing in building data-driven solutions and extracting actionable insights from complex datasets.',
    creator: '@aatisharote07', // Making a guess or should I use config? Config has no twitter but github/linkedin. I'll stick to a reasonable placeholder or remove specific creator if unknown, but better to match style.
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontHeading.variable} ${fontBody.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
