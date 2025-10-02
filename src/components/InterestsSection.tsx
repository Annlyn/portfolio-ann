import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { InterestModal } from './InterestModal';
import {portfolioData} from '../data/portfolio.ts';

export const InterestsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const interests = portfolioData.interests;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % interests.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + interests.length) % interests.length);
  };

  const openModal = (interest: any) => {
    setSelectedInterest(interest);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="interests" className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/30">
          <div className="w-full h-full flex items-center justify-center text-background/60">
            <img src={interests[currentSlide]?.backgroundImage} alt={interests[currentSlide]?.title} className="object-cover w-full h-full brightness-75" />
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-slide-up">
            {interests[currentSlide]?.title}
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl animate-slide-up">
            {interests[currentSlide]?.caption}
          </p>
          
          <Button
            onClick={() => openModal(interests[currentSlide])}
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-3 text-lg transition-all duration-300"
          >
            Expand
          </Button>
        </div>
        
        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 carousel-control p-3 rounded-full"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 carousel-control p-3 rounded-full"

        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {interests.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>
      
      <InterestModal
        interest={selectedInterest}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};