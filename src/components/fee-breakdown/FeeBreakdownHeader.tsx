
import React from 'react';
import { ArrowLeft, Gift } from 'lucide-react';
import Button from '../ui-components/Button';

interface FeeBreakdownHeaderProps {
  onBack: () => void;
}

const FeeBreakdownHeader: React.FC<FeeBreakdownHeaderProps> = ({ onBack }) => {
  return (
    <div className="mb-8">
      <Button
        variant="outline"
        size="sm"
        className="mb-6"
        leftIcon={<ArrowLeft size={16} />}
        onClick={onBack}
      >
        Back to listings
      </Button>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Complete Apartment Fee Breakdown</h1>
      <p className="text-lg text-muted-foreground mb-3">
        Understanding all the costs associated with renting an apartment is crucial for budgeting. 
        Here's a comprehensive breakdown of all possible fees you might encounter.
      </p>
      
      <div className="bg-primary/10 p-4 rounded-lg mb-8">
        <h3 className="text-lg font-semibold mb-2 flex items-center text-primary">
          <Gift size={20} className="mr-2" />
          Special for Indian Students
        </h3>
        <p className="text-sm mb-3">
          We've curated this list of properties where significant Indian communities already live, 
          making it easier for you to find friends, share cultural experiences, and settle in comfortably.
        </p>
        <p className="text-sm font-medium">
          Our referral program offers exclusive discounts up to $700 in total savings across various services!
        </p>
      </div>
    </div>
  );
};

export default FeeBreakdownHeader;
