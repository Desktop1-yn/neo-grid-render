import { useState, useEffect } from 'react';

const Footer = () => {
  const [pixelAnimation, setPixelAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPixelAnimation(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left - Brand */}
          <div>
            <div className="font-mono text-2xl font-bold text-primary mb-2">
              Alex Morgan
            </div>
            <p className="text-muted-foreground text-sm">
              Media Artist & Producer
              <br />
              Los Angeles, CA
            </p>
          </div>

          {/* Center - Links */}
          <div className="space-y-2">
            <h4 className="font-mono font-semibold text-foreground mb-4">
              Links
            </h4>
            <div className="space-y-2 text-sm">
              <a 
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Colophon
              </a>
              <a 
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Press Kit
              </a>
            </div>
          </div>

          {/* Right - Contact */}
          <div className="space-y-2">
            <h4 className="font-mono font-semibold text-foreground mb-4">
              Connect
            </h4>
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:alex@alexmorgan.art"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                alex@alexmorgan.art
              </a>
              <a 
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                @alexmorgan_art
              </a>
              <a 
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Vimeo Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Alex Morgan. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Built with digital precision
            </span>
            
            {/* Animated pixel */}
            <div 
              className={`w-2 h-2 bg-primary rounded-full transition-all duration-500 ${
                pixelAnimation ? 'opacity-100 scale-100' : 'opacity-50 scale-75'
              }`}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;