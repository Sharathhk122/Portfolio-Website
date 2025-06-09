'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from './loading'; // Create a loading component

// Dynamically import all homepage sections with SSR disabled
const HeroSection = dynamic(() => import('./components/homepage/hero-section'), { 
  ssr: false,
  loading: () => <div className="min-h-[80vh]"></div>
});
const AboutSection = dynamic(() => import('./components/homepage/about'), { 
  ssr: false,
  loading: () => <div className="min-h-[50vh]"></div>
});
const Experience = dynamic(() => import('./components/homepage/experience'), { 
  ssr: false,
  loading: () => <div className="min-h-[50vh]"></div>
});
const Skills = dynamic(() => import('./components/homepage/skills'), { 
  ssr: false,
  loading: () => <div className="min-h-[50vh]"></div>
});
const Projects = dynamic(() => import('./components/homepage/projects'), { 
  ssr: false,
  loading: () => <div className="min-h-[50vh]"></div>
});
const Education = dynamic(() => import('./components/homepage/education'), { 
  ssr: false,
  loading: () => <div className="min-h-[50vh]"></div>
});
const ContactSection = dynamic(() => import('./components/homepage/contact'), { 
  ssr: false,
  loading: () => <div className="min-h-[50vh]"></div>
});

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <ContactSection />
      </Suspense>
    </main>
  );
}