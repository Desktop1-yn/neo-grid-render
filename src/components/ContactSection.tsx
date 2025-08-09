import { useState } from 'react';
import { Send, Mail, MessageCircle, Instagram, Play, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      color: "hover:text-[#E4405F]"
    },
    {
      icon: Play,
      label: "Vimeo",
      href: "#",
      color: "hover:text-[#1AB7EA]"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-foreground"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-foreground mb-6">
            Let's Create Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration, commissioning a piece, or just want to chat about 
            digital art? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="p-8 bg-card rounded-2xl border border-border/50">
              <h3 className="text-2xl font-mono font-bold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-primary-foreground font-mono uppercase tracking-wider hover:shadow-neon transition-all duration-500"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="p-8 bg-card rounded-2xl border border-border/50">
              <h3 className="text-2xl font-mono font-bold text-foreground mb-6">
                Quick Contact
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:alex@alexmorgan.art"
                  className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">alex@alexmorgan.art</div>
                  </div>
                </a>
                
                <a
                  href="https://t.me/alexmorgan"
                  className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <MessageCircle size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Telegram</div>
                    <div className="text-muted-foreground">@alexmorgan</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 bg-card rounded-2xl border border-border/50">
              <h3 className="text-2xl font-mono font-bold text-foreground mb-6">
                Follow My Work
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`flex flex-col items-center justify-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon size={24} className="mb-2 transition-colors" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* QR Code placeholder */}
            <div className="p-8 bg-card rounded-2xl border border-border/50 text-center">
              <h3 className="text-xl font-mono font-bold text-foreground mb-4">
                Quick Connect
              </h3>
              <div className="w-32 h-32 mx-auto bg-secondary/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-muted-foreground text-sm font-mono">QR Code</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Scan to connect on Telegram
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;