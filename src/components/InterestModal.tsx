import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

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
          <div className="md:col-span-6">
            <div className="w-full h-48 bg-gradient-to-br from-primary/30 to-accent/20 rounded-lg flex items-center justify-center">
              <img src={interest.backgroundImage} alt={interest.title} className="object-cover w-full h-full rounded-lg" />
            </div>
          </div>
          
          {/* Caption */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {interest.caption}
            </h3>
            <p className='w-full'>
              {interest.summary}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};