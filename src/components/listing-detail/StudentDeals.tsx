
import React from 'react';
import { Tag, Info } from 'lucide-react';
import Badge from '../ui-components/Badge';
import Button from '../ui-components/Button';
import { cn } from '../../lib/utils';

interface Deal {
  title: string;
  savings: string;
  description: string;
}

interface StudentDealsProps {
  deals: Deal[];
  className?: string;
}

const StudentDeals: React.FC<StudentDealsProps> = ({ deals, className }) => {
  return (
    <div className={cn("glass-card p-5 rounded-xl border border-primary/10", className)}>
      <h3 className="text-lg font-bold mb-4 flex items-center">
        <Tag size={18} className="text-primary mr-2" />
        Student Savings
      </h3>
      
      <div className="space-y-3">
        {deals.map((deal, index) => (
          <div key={index} className="p-3 bg-accent rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">{deal.title}</span>
              <Badge variant="success">{deal.savings}</Badge>
            </div>
            <p className="text-xs text-muted-foreground">{deal.description}</p>
          </div>
        ))}
        
        <div className="pt-3">
          <Button 
            variant="outline" 
            className="w-full" 
            leftIcon={<Info size={16} />}
          >
            How to claim these offers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentDeals;
