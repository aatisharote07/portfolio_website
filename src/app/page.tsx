import { Hero } from '@/components/sections/hero'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Contact } from '@/components/sections/contact';
import { Connect } from '@/components/sections/connect';
import { Resume } from '@/components/sections/resume';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Experience />
      <Skills />
      <Connect />
      <Resume />
      <Contact />
    </>
  )
}
