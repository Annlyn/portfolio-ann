import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export const ProjectDetail = () => {
  const { projectId } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground capitalize">
            {projectId?.replace('-', ' ')} Project
          </h1>
        </div>
        
        <div className="space-y-8">
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
            <span className="text-foreground/60 text-lg">Project details will be added later</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                This is a placeholder for the {projectId} project details. 
                The project showcase will include detailed information about the 
                technologies used, challenges faced, and solutions implemented.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'MongoDB'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};