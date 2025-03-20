
import React from 'react';
import { cn } from '../lib/utils';
import FeeBreakdownHeader from './fee-breakdown/FeeBreakdownHeader';
import FeeBreakdownImage from './fee-breakdown/FeeBreakdownImage';
import MoveinFeesSection from './fee-breakdown/MoveinFeesSection';
import MonthlyFeesSection from './fee-breakdown/MonthlyFeesSection';
import OptionalFeesSection from './fee-breakdown/OptionalFeesSection';
import SituationalFeesSection from './fee-breakdown/SituationalFeesSection';
import ReferralSavings from './fee-breakdown/ReferralSavings';

interface FeeBreakdownProps {
  onBack: () => void;
  className?: string;
}

const FeeBreakdown: React.FC<FeeBreakdownProps> = ({ onBack, className }) => {
  return (
    <div className={cn("container px-4 py-16 mx-auto", className)}>
      <div className="max-w-4xl mx-auto">
        <FeeBreakdownHeader onBack={onBack} />
        <FeeBreakdownImage />
        
        {/* Categorized Fee Breakdown */}
        <div className="space-y-8">
          <MoveinFeesSection />
          <MonthlyFeesSection />
          <OptionalFeesSection />
          <SituationalFeesSection />
        </div>
        
        <ReferralSavings />
      </div>
    </div>
  );
};

export default FeeBreakdown;
