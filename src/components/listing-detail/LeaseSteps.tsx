
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Button from '../ui-components/Button';
import { cn } from '../../lib/utils';

interface LeaseStep {
  title: string;
  description: string;
  details?: string[];
}

interface LeaseStepsProps {
  leaseSteps: LeaseStep[];
  className?: string;
  propertyWebsite?: string;
}

const LeaseSteps: React.FC<LeaseStepsProps> = ({ leaseSteps, className, propertyWebsite }) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4">Lease Application Process</h2>
      <div className="grid grid-cols-1 gap-4">
        {leaseSteps.map((step, index) => (
          <div key={index} className="glass-card p-4 rounded-xl border border-primary/5 flex">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3 flex-shrink-0">
              {index + 1}
            </div>
            <div>
              <h4 className="font-medium mb-1">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
              
              {step.details && step.details.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 space-y-4">
        {propertyWebsite && (
          <div className="text-sm">
            <span className="text-muted-foreground">Official property website: </span>
            <a 
              href={propertyWebsite} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {propertyWebsite} <ExternalLink size={12} className="inline" />
            </a>
          </div>
        )}
        
        <Button 
          variant="primary" 
          rightIcon={<ArrowRight size={16} />}
        >
          Start Application
        </Button>
      </div>
    </div>
  );
};

export default LeaseSteps;
