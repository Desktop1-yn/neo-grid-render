import { Download, Award, Globe, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import artistPortrait from '@/assets/artist-portrait.jpg';

const AboutSection = () => {
  const achievements = [
    { icon: Award, text: "Featured at Venice Biennale 2023" },
    { icon: Globe, text: "Exhibited in 15+ countries" },
    { icon: Lightbulb, text: "5+ years in digital art" }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Images */}
          <div className="space-y-6">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={artistPortrait}
                  alt="Alex Morgan in studio"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative glow effect */}
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-xl rounded-2xl -z-10" />
            </div>
            
            {/* Process collage placeholder */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-mono">Studio Process</span>
              </div>
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-mono">Behind Scenes</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-mono font-bold text-foreground mb-6">
                About
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a media artist and producer based in Los Angeles, specializing in creating 
                immersive digital experiences that challenge the boundaries between technology 
                and human perception.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My work explores themes of digital consciousness, data visualization, and the 
                intersection of virtual and physical realities. Through multimedia installations, 
                interactive sculptures, and projection mapping, I create spaces for contemplation 
                and wonder in our increasingly digital world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Educated at CalArts (MFA Digital Arts) and MIT Media Lab (Visiting Researcher), 
                I collaborate with institutions like LACMA, Venice Biennale, and Ars Electronica 
                to bring cutting-edge digital art to diverse audiences.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-4 text-foreground">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <achievement.icon size={16} className="text-primary" />
                  </div>
                  <span className="text-base">{achievement.text}</span>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="p-6 bg-secondary/50 rounded-xl border border-border/50">
              <h3 className="text-xl font-mono font-semibold text-foreground mb-3">
                Creative Philosophy
              </h3>
              <p className="text-muted-foreground italic leading-relaxed">
                "Technology is not just a tool—it's a medium for emotional and spiritual 
                expression. My work seeks to humanize digital experiences and create 
                meaningful connections in an increasingly virtual world."
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default"
                className="bg-gradient-primary text-primary-foreground font-mono uppercase tracking-wider hover:shadow-neon transition-all duration-500"
              >
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono uppercase tracking-wider transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Collaborate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;