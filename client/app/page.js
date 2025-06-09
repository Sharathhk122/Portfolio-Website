'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from './loading';

// Components that might use browser APIs
const SafeHeroSection = dynamic(() => import('./components/homepage/hero-section'), {
  ssr: false,
  loading: () => <div className="min-h-[80vh] bg-[#0d1224]"></div>
});

const SafeSkills = dynamic(() => import('./components/homepage/skills'), {
  ssr: false,
  loading: () => <div className="min-h-[50vh] bg-[#0d1224]"></div>
});

// Components that are safe for SSR
const AboutSection = dynamic(() => import('./components/homepage/about'));
const Experience = dynamic(() => import('./components/homepage/experience'));
const Projects = dynamic(() => import('./components/homepage/projects'));
const Education = dynamic(() => import('./components/homepage/education'));
const ContactSection = dynamic(() => import('./components/homepage/contact'));

export default function Home() {
  return (
    <main className="bg-[#0d1224]">
      <Suspense fallback={<Loading />}>
        <SafeHeroSection />
        <AboutSection />
        <Experience />
        <SafeSkills />
        <Projects />
        <Education />
        <ContactSection />
      </Suspense>
    </main>
  );
}