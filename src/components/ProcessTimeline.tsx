import { useState, useEffect, useRef } from 'react';
import { Lightbulb, Cpu, Camera, Wrench, Eye } from 'lucide-react';

interface TimelineStep {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
}

const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Concept",
    description: "Ideation and conceptual development",
    details: "Research, mood boards, and initial sketches exploring themes and narrative structures."
  },
  {
    id: 2,
    icon: Cpu,
    title: "Render",
    description: "3D modeling and digital prototyping",
    details: "Creating digital assets, testing technical feasibility, and developing visual language."
  },
  {
    id: 3,
    icon: Camera,
    title: "Shoot",
    description: "Content creation and capture",
    details: "Filming, motion capture, data collection, and real-world documentation."
  },
  {
    id: 4,
    icon: Wrench,
    title: "Install",
    description: "Technical implementation",
    details: "Hardware setup, software integration, and space preparation for exhibition."
  },
  {
    id: 5,
    icon: Eye,
    title: "Experience",
    description: "Audience interaction and iteration",
    details: "Live testing, audience feedback collection, and continuous refinement."
  }
];

const ProcessTimeline = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps((prev) => [...new Set([...prev, stepId])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = document.querySelectorAll('[data-step]');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-foreground mb-6">
            Creative Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial concept to final experience, each project follows a meticulous 
            process that balances artistic vision with technical innovation.
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

          {/* Timeline Steps */}
          <div className="space-y-16">
            {timelineSteps.map((step, index) => (
              <div
                key={step.id}
                data-step={step.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div
                    className={`p-6 bg-card rounded-xl border border-border/50 transition-all duration-700 hover:shadow-elegant cursor-pointer ${
                      visibleSteps.includes(step.id)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    } ${
                      activeStep === step.id ? 'bg-primary/5 border-primary/30' : ''
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  >
                    <h3 className="text-xl font-mono font-bold text-foreground mb-2 flex items-center gap-3">
                      <step.icon size={20} className="text-primary" />
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {step.description}
                    </p>
                    
                    {/* Expandable Details */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeStep === step.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-3 border-t border-border/30">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-card border-2 border-primary rounded-full z-10">
                  <div
                    className={`w-full h-full rounded-full bg-primary transition-all duration-500 ${
                      visibleSteps.includes(step.id) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 300}ms` }}
                  />
                </div>

                {/* Step Number */}
                <div
                  className={`absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 -top-2 w-8 h-8 bg-background border border-primary rounded-full flex items-center justify-center transition-all duration-500 ${
                    visibleSteps.includes(step.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 500}ms` }}
                >
                  <span className="text-xs font-mono font-bold text-primary">
                    {step.id}
                  </span>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;