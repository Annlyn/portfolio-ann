import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';
import {portfolioData} from '../data/portfolio.ts';

export const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const navigate = useNavigate();
  const projects = portfolioData.projects;

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleProjectClick = (route: string) => {
    navigate(route);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Projects</h2>
        
        <div className="relative">
          {/* Main Project Display */}
          <div className="flex justify-center mb-8">
            <Card 
              className="w-full max-w-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              onClick={() => handleProjectClick(projects[currentProject].route)}
            >
              <CardContent className="p-0">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-foreground/60">Project Image</span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">
                        {projects[currentProject].isCompleted ? 
                          projects[currentProject].title : 
                          "Coming Soon"}
                        </h3>
                      <p className="text-white/80 mb-4">Click to view details</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {projects[currentProject].technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Project Info */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {projects[currentProject].title}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {projects[currentProject].technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 carousel-control p-3 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 carousel-control p-3 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};