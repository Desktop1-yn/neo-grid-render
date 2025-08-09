import { useState } from 'react';
import { X, ExternalLink, Calendar, User, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

interface Project {
  id: number;
  title: string;
  year: string;
  role: string;
  technologies: string[];
  preview: string;
  description: string;
  concept: string;
  partners: string[];
  vimeoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Immersive Data Forest",
    year: "2024",
    role: "Lead Artist & Technical Director",
    technologies: ["TouchDesigner", "Kinect", "Unity", "Ableton Live"],
    preview: project1,
    description: "An interactive installation that transforms visitor movements into a living digital ecosystem, where biometric data creates unique visual and auditory landscapes.",
    concept: "Exploring the intersection between human presence and digital nature, this piece questions our relationship with data collection and environmental consciousness in the digital age.",
    partners: ["LACMA", "Google Arts & Culture", "MIT Media Lab"],
    vimeoUrl: "#"
  },
  {
    id: 2,
    title: "Quantum Memories",
    year: "2023",
    role: "Creative Producer & 3D Artist",
    technologies: ["Blender", "Unreal Engine", "Max/MSP", "Arduino"],
    preview: project2,
    description: "A generative sculpture series that visualizes quantum computing principles through dynamic 3D forms that respond to real quantum computer outputs.",
    concept: "Bridging the gap between quantum physics and human perception by creating tangible representations of quantum states and superposition.",
    partners: ["IBM Quantum", "Venice Biennale", "Ars Electronica"],
    vimeoUrl: "#"
  },
  {
    id: 3,
    title: "Urban Shadows",
    year: "2023",
    role: "Video Artist & Director",
    technologies: ["After Effects", "Cinema 4D", "MadMapper", "Resolume"],
    preview: project3,
    description: "Large-scale projection mapping transforming city buildings into canvases for exploring themes of urban alienation and digital connectivity.",
    concept: "Investigating how digital technology both connects and isolates urban dwellers, creating temporary moments of collective experience in public spaces.",
    partners: ["Vivid Sydney", "City of Los Angeles", "Samsung"],
    vimeoUrl: "#"
  }
];

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-foreground mb-6">
            Selected Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of multimedia installations, digital sculptures, and interactive experiences 
            exploring the boundaries between technology and human perception.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={project.preview}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-xl font-mono font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.year} • {project.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Project Image */}
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                  <img
                    src={selectedProject.preview}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-mono font-bold text-foreground mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {selectedProject.year}
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        {selectedProject.role}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-mono font-semibold text-foreground mb-2">
                      Description
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-mono font-semibold text-foreground mb-2">
                      Concept
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.concept}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-mono font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Cpu size={18} />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-mono font-semibold text-foreground mb-2">
                      Partners
                    </h4>
                    <p className="text-muted-foreground">
                      {selectedProject.partners.join(' • ')}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="default"
                      className="bg-gradient-primary text-primary-foreground font-mono"
                      asChild
                    >
                      <a href={selectedProject.vimeoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} className="mr-2" />
                        View on Vimeo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsGrid;