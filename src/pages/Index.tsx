import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsGrid from '@/components/ProjectsGrid';
import AboutSection from '@/components/AboutSection';
import ProcessTimeline from '@/components/ProcessTimeline';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProjectsGrid />
      <AboutSection />
      <ProcessTimeline />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
