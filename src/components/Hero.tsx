
import React from 'react';
import { ArrowRight, Search, MapPin, Building, DollarSign, Wifi } from 'lucide-react';
import Button from './ui-components/Button';
import { cn } from '../lib/utils';

interface HeroProps {
  className?: string;
  onViewFees?: () => void;
}

const Hero: React.FC<HeroProps> = ({ className, onViewFees }) => {
  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-b from-accent to-background pt-20 pb-24", className)}>
      {/* Background decoration elements - no blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 bg-primary/5 rounded-full"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary animate-fade-in">
            <span className="text-sm font-medium">Perfect for Indian students!</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            Find Your Perfect Student Home
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Save up to $700 & Get One Month Free Rent!
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
            We've negotiated the best deals for you – Get housing, WiFi, electricity, and more at student-friendly rates!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Button 
              variant="primary" 
              size="lg" 
              className="group"
              rightIcon={<ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />}
            >
              Start Your Search Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={onViewFees}
            >
              View Complete Fee Breakdown
            </Button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto">
          {[
            { icon: <MapPin size={20} />, title: "Perfect Location", description: "Find housing near your campus" },
            { icon: <Building size={20} />, title: "Quality Housing", description: "Vetted properties for students" },
            { icon: <DollarSign size={20} />, title: "Student Savings", description: "Special rates and discounts" },
            { icon: <Wifi size={20} />, title: "All Utilities", description: "WiFi, electricity & more included" }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl hover-lift card-highlight animate-fade-in" 
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
