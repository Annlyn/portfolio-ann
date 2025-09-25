import { Card, CardContent } from '../components/ui/card';
import portfolioData from '../data/portfolio.json';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Experience</h2>
        
        <div className="space-y-16">
          {portfolioData.experience.map((exp, index) => (
            <div key={exp.id} className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Card */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative h-80 perspective-1000">
                  <Card className="card-rotate h-full cursor-pointer group">
                    {/* Front of card */}
                    <div className="card-front">
                      <CardContent className="p-0 h-full rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                          <span className="text-foreground/60">Experience Image</span>
                        </div>
                      </CardContent>
                    </div>
                    
                    {/* Back of card */}
                    <div className="card-back">
                      <CardContent className="p-6 h-full bg-card border rounded-lg flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-2 text-primary">{exp.position}</h3>
                        <p className="text-foreground font-semibold mb-2">{exp.company}</p>
                        <p className="text-muted-foreground text-sm mb-4">{exp.duration}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.details.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </div>
              
              {/* Text Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.position}</h3>
                  <h4 className="text-xl text-primary mb-2">{exp.company}</h4>
                  <p className="text-muted-foreground mb-4">{exp.duration}</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-foreground">Key Responsibilities:</h5>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.details.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};