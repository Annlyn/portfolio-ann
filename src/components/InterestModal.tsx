import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Button } from '../components/ui/button';
import { X } from 'lucide-react';

interface Interest {
  id: number;
  title: string;
  backgroundImage: string;
  caption: string;
  summary: string;
  review: string;
  accordions: {
    title: string;
    content: string;
  }[];
}

interface InterestModalProps {
  interest: Interest | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InterestModal = ({ interest, isOpen, onClose }: InterestModalProps) => {
  if (!interest) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-primary">
              {interest.title}
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {/* Image */}
          <div className="md:col-span-1">
            <div className="w-full h-48 bg-gradient-to-br from-primary/30 to-accent/20 rounded-lg flex items-center justify-center">
              <span className="text-foreground/60 text-sm">Interest Image</span>
            </div>
          </div>
          
          {/* Caption */}
          <div className="md:col-span-1 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {interest.caption}
            </h3>
            <p className="text-muted-foreground">
              {interest.summary}
            </p>
          </div>
          
          {/* Summary */}
          <div className="md:col-span-1 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              My Review
            </h3>
            <p className="text-muted-foreground">
              {interest.review}
            </p>
          </div>
        </div>
        
        {/* Accordions */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            More Details
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {interest.accordions.map((accordion, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {accordion.title}
                </AccordionTrigger>
                <AccordionContent>
                  {accordion.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
};