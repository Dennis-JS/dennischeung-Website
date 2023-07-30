import AboutSection from '@/components/AboutSection';
import ExpSection from '@/components/ExpSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <main id='content' className='pt-24 lg:w-1/2 lg:py-24'>
      <AboutSection />
      <ExpSection />
      <ProjectsSection />
    </main>
  );
}
