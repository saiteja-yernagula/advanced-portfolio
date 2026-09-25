import { useState } from 'react';
import { FullBackground3D } from './components/3d/FullBackground3D';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutStorySection } from './components/sections/AboutStorySection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { YoutubeSection } from './components/sections/YoutubeSection';
import { LinkedInSection } from './components/sections/LinkedInSection';
import { ImpactStatsSection } from './components/sections/ImpactStatsSection';
import { FaqSection } from './components/sections/FaqSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/ui/Footer';
import { TerminalModal } from './components/ui/TerminalModal';
import { ResumeModal } from './components/ui/ResumeModal';
import { SmoothScrollProvider } from './components/providers/SmoothScrollProvider';
import { TooltipProvider } from './components/ui/shadcn/tooltip';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Python Full Stack Training');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <SmoothScrollProvider>
      <TooltipProvider delayDuration={150}>
        <div className="relative min-h-screen bg-[#05070d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
          {/* Custom Cyber Interactive Cursor */}
          <CustomCursor />

          {/* Full-Screen 3D Three.js Galaxy & Cyber Horizon Background */}
          <FullBackground3D />

          {/* Floating Glassmorphic Navigation Bar */}
          <Navbar
            onOpenTerminal={() => setTerminalOpen(true)}
            onOpenResume={() => setResumeOpen(true)}
          />

          {/* Main Content Sections */}
          <main className="relative z-10 space-y-12">
            <HeroSection
              onOpenTerminal={() => setTerminalOpen(true)}
              onOpenResume={() => setResumeOpen(true)}
            />
            <AboutStorySection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <YoutubeSection />
            <LinkedInSection />
            <ImpactStatsSection />
            <FaqSection />
            <ServicesSection onSelectService={handleSelectService} />
            <ContactSection selectedService={selectedService} />
          </main>

          {/* Footer */}
          <Footer onOpenTerminal={() => setTerminalOpen(true)} />

          {/* Interactive Modals */}
          <TerminalModal
            isOpen={terminalOpen}
            onClose={() => setTerminalOpen(false)}
          />
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        </div>
      </TooltipProvider>
    </SmoothScrollProvider>
  );
}

export default App;
