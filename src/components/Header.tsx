import { useState, useEffect } from 'react';
import { Download, Moon, Sun } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useTheme } from 'next-themes';
import {portfolioData} from '../data/portfolio.ts';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className={`flex items-center transition-all duration-500 ${
            isScrolled ? 'justify-between' : 'justify-center'
          }`}>
            <h1 className={`text-2xl font-bold text-foreground transition-all duration-500 ${
              isScrolled ? 'text-xl' : 'text-3xl'
            }`}>
              {portfolioData.personal.name}
            </h1>
            
            <div className={`flex items-center gap-3 transition-all duration-500 ${
              isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  // Resume download functionality
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Ann_Resume.pdf';
                  link.click();
                }}
                className="h-9 w-9"
                disabled
              >
                <Download className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="h-9 w-9"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};