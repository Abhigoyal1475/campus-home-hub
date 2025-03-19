
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui-components/Button';
import { cn } from '../../lib/utils';

interface LeaseStep {
  title: string;
  description: string;
}

interface LeaseStepsProps {
  leaseSteps: LeaseStep[];
  className?: string;
}

const LeaseSteps: React.FC<LeaseStepsProps> = ({ leaseSteps, className }) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4">Lease Application Process</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {leaseSteps.map((step, index) => (
          <div key={index} className="glass-card p-4 rounded-xl border border-primary/5 flex">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3 flex-shrink-0">
              {index + 1}
            </div>
            <div>
              <h4 className="font-medium mb-1">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
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
