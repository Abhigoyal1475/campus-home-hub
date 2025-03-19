
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Button from './ui-components/Button';
import { cn } from '../lib/utils';

interface StickyBannerProps {
  className?: string;
}

const StickyBanner: React.FC<StickyBannerProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 transform",
      hasScrolled ? "translate-y-0" : "translate-y-full",
      className
    )}>
      <div className="glass-card mx-auto max-w-5xl m-4 px-4 py-3 rounded-xl shadow-soft border border-primary/10 flex items-center justify-between animate-slide-up">
        <div className="flex items-center space-x-3">
          <div className="hidden md:block w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary text-xl font-bold">$</span>
          </div>
          <div>
            <p className="font-medium text-sm md:text-base">Don't miss out on $700+ in savings – Details inside listings!</p>
            <p className="text-muted-foreground text-xs md:text-sm">Limited time offer for students</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="primary" size="sm">See Offers</Button>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground p-1 rounded-full transition-colors"
            aria-label="Close banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
