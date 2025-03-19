
import React from 'react';
import { DollarSign } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CostItem {
  title: string;
  amount: string;
  oneTime: boolean;
  discount?: string;
}

interface CostBreakdownProps {
  costBreakdown: CostItem[];
  className?: string;
}

const CostBreakdown: React.FC<CostBreakdownProps> = ({ costBreakdown, className }) => {
  return (
    <div className={cn("glass-card p-5 rounded-xl border border-primary/10", className)}>
      <h3 className="text-lg font-bold mb-4 flex items-center">
        <DollarSign size={18} className="text-primary mr-2" />
        Fee Breakdown
      </h3>
      
      <div className="space-y-4">
        <div className="pb-2 border-b border-border">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Move-in Costs</h4>
          {costBreakdown.filter(cost => cost.oneTime).map((cost, index) => (
            <div key={index} className="flex justify-between items-center py-1">
              <span className="text-sm">{cost.title}</span>
              <span className="text-sm font-medium">{cost.amount}</span>
            </div>
          ))}
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Monthly Costs</h4>
          {costBreakdown.filter(cost => !cost.oneTime).map((cost, index) => (
            <div key={index}>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm">{cost.title}</span>
                <span className="text-sm font-medium">{cost.amount}</span>
              </div>
              {cost.discount && (
                <div className="text-xs text-primary ml-5 -mt-1">{cost.discount}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CostBreakdown;
