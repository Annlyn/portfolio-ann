import { Github, Linkedin, Mail, MapPin, Phone, Code } from 'lucide-react';
import { Button } from '../components/ui/button';
import portfolioData from '../data/portfolio.json';

export const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer className="bg-foreground text-background py-6 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{personal.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{personal.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{personal.address}</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-background hover:text-foreground hover:bg-background/20"
              onClick={() => window.open(personal.github, '_blank')}
            >
              <Github className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-background hover:text-foreground hover:bg-background/20"
              onClick={() => window.open(personal.linkedin, '_blank')}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-background hover:text-foreground hover:bg-background/20"
              onClick={() => window.open(personal.leetcode, '_blank')}
            >
              <Code className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-4 pt-4 border-t border-background/20">
          <p className="text-xs text-background/70">
            © 2024 {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};