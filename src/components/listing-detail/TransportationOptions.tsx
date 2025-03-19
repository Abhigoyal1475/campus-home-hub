
import React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '../../lib/utils';

interface TransportOption {
  mode: string;
  icon: React.ReactNode;
  time: string;
  details: string;
  additionalInfo?: string[];
  highlight: boolean;
}

interface TransportationOptionsProps {
  transportationOptions: TransportOption[];
  className?: string;
}

const TransportationOptions: React.FC<TransportationOptionsProps> = ({ 
  transportationOptions, 
  className 
}) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Clock size={20} className="text-primary mr-2" />
        Transportation
      </h2>
      
      <div className="space-y-4">
        {transportationOptions.map((option, index) => (
          <div 
            key={index} 
            className={cn(
              "p-4 border rounded-lg",
              option.highlight ? "border-primary/20 bg-primary/5" : "border-border"
            )}
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-3">
                {option.icon}
              </div>
              <div>
                <h4 className="font-medium">{option.mode}</h4>
                <p className={cn(
                  "text-sm",
                  option.highlight ? "text-primary font-medium" : "text-muted-foreground"
                )}>
                  {option.time}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{option.details}</p>
            
            {option.additionalInfo && (
              <ul className="mt-2 space-y-1">
                {option.additionalInfo.map((info, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span> {info}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransportationOptions;
