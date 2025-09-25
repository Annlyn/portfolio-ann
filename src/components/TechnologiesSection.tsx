import portfolioData from '../data/portfolio.json';

export const TechnologiesSection = () => {
  return (
    <section className="py-12 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Technologies</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {portfolioData.technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-box bg-background border border-border rounded-lg p-4 text-center shadow-sm hover:shadow-md hover:bg-primary/5"
            >
              <span className="text-sm font-medium text-foreground">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};