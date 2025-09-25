import { Card, CardContent } from '../components/ui/card';
import portfolioData from '../data/portfolio.json';

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Education</h2>
        
        <div className="space-y-16">
          {portfolioData.education.map((edu, index) => (
            <div key={edu.id} className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <h4 className="text-xl text-primary mb-2">{edu.institution}</h4>
                  <p className="text-muted-foreground mb-4">{edu.year}</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="space-y-2">
                <h5 className="font-semibold text-foreground">Highlights:</h5>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {edu.details.honors && edu.details.honors.map((honor, honorIndex) => (
                      <li key={honorIndex}>{honor}</li>
                    ))}
                    {edu.details.gpa && <li>GPA: {edu.details.gpa}</li>}
                    {edu.details.percentage && <li>Percentage: {edu.details.percentage}</li>}
                  </ul>
                </div>
              </div>
              
              {/* Image Card */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="relative h-80 perspective-1000">
                  <Card className="card-rotate h-full cursor-pointer group">
                    {/* Front of card */}
                    <div className="card-front">
                      <CardContent className="p-0 h-full rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-accent/30 to-primary/20 flex items-center justify-center">
                          <span className="text-foreground/60">Education Image</span>
                        </div>
                      </CardContent>
                    </div>
                    
                    {/* Back of card */}
                    <div className="card-back">
                      <CardContent className="p-6 h-full bg-card border rounded-lg flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-2 text-primary">{edu.degree}</h3>
                        <p className="text-foreground font-semibold mb-2">{edu.institution}</p>
                        <p className="text-muted-foreground text-sm mb-4">{edu.year}</p>
                        
                        {edu.details.technologies && (
                          <div className="space-y-2 mt-4">
                            <h4 className="font-semibold text-foreground">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.details.technologies.map((tech, techIndex) => (
                                <span 
                                  key={techIndex} 
                                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};