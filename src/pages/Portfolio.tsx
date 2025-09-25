import { Header } from '../components/Header';
import { AboutSection } from '../components/AboutSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { EducationSection } from '../components/EducationSection';
import { InterestsSection } from '../components/InterestsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { TechnologiesSection } from '../components/TechnologiesSection';
import { Footer } from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="relative">
      <Header />
      <main>
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <InterestsSection />
        <ProjectsSection />
        <TechnologiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;