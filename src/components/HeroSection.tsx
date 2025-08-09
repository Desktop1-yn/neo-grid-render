import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6
    }));
    setParticles(particleArray);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay with Gradient */}
      <div className="hero-overlay" />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-mono font-bold text-foreground mb-6 leading-none">
            Alex<br />
            Morgan
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light tracking-wide">
            Media Artist & Producer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-lg leading-relaxed">
            Creating immersive digital experiences through multimedia installations, 
            video art, and contemporary technological interventions.
          </p>
          
          <Button 
            onClick={scrollToProjects}
            className="bg-gradient-primary text-primary-foreground font-mono uppercase tracking-wider px-8 py-6 text-base hover:shadow-neon transition-all duration-500 hover:scale-105"
          >
            Explore Work
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToProjects}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-sm font-mono uppercase tracking-wider mb-2">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;