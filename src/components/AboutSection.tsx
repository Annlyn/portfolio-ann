import {portfolioData} from '../data/portfolio.ts';

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-80 h-96 bg-muted rounded-lg photo-tilt shadow-2xl border-4 border-background overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Photo will be added later</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          
          {/* Text Section */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              {portfolioData.about.greeting.split(' ').map((word, index) => (
                <span key={index} className={word === 'Ann!' ? 'font-bold text-primary' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {portfolioData.about.description}
            </p>
            
            {/* Accent decoration */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px bg-gradient-to-r from-primary to-transparent flex-1"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="h-px bg-gradient-to-l from-primary to-transparent flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};