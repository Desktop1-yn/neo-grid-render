import { useState } from 'react';

interface Client {
  name: string;
  logo: string;
  project: string;
  year: string;
}

const clients: Client[] = [
  { name: "LACMA", logo: "LACMA", project: "Immersive Data Forest", year: "2024" },
  { name: "Venice Biennale", logo: "VB", project: "Quantum Memories", year: "2023" },
  { name: "Ars Electronica", logo: "AE", project: "Digital Consciousness", year: "2023" },
  { name: "MIT Media Lab", logo: "MIT", project: "Research Collaboration", year: "2022" },
  { name: "Google Arts", logo: "GA", project: "AI & Art Initiative", year: "2024" },
  { name: "Samsung", logo: "SS", project: "Urban Shadows", year: "2023" },
  { name: "Vivid Sydney", logo: "VS", project: "Light Installation", year: "2023" },
  { name: "MOMA", logo: "MOMA", project: "New Media Showcase", year: "2022" }
];

const ClientsSection = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  return (
    <section className="py-20 px-6 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-foreground mb-6">
            Clients & Collaborations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partnerships with leading cultural institutions, technology companies, 
            and art festivals worldwide.
          </p>
        </div>

        {/* Horizontal scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right space-x-12 py-8">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-32 h-20 bg-secondary/30 rounded-lg border border-border/30 flex items-center justify-center cursor-pointer hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 group"
                onClick={() => setSelectedClient(client)}
              >
                <span className="font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                  {client.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected client info */}
        {selectedClient && (
          <div className="mt-12 p-6 bg-card rounded-xl border border-border/50 max-w-md mx-auto text-center">
            <h3 className="text-xl font-mono font-bold text-foreground mb-2">
              {selectedClient.name}
            </h3>
            <p className="text-muted-foreground mb-1">
              {selectedClient.project}
            </p>
            <p className="text-sm text-primary">
              {selectedClient.year}
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Exhibitions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Collaborations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground">Years Active</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;