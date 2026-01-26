import { Hero } from '@/components/sections/hero'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Contact } from '@/components/sections/contact';
import { Connect } from '@/components/sections/connect';
import { Resume } from '@/components/sections/resume';
import { AnimatedSection } from '@/components/sections/animated-section';

export default function HomePage() {
  return (
    <>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <FeaturedProjects />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Experience />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Skills />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Connect />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Resume />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Contact />
      </AnimatedSection>
    </>
  )
}
