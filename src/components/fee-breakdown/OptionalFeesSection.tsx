
import React from 'react';
import { DollarSign } from 'lucide-react';
import FeeCategory from './FeeCategory';
import FeeItem from './FeeItem';

const OptionalFeesSection = () => {
  return (
    <FeeCategory 
      title="Optional Add-ons" 
      icon={<DollarSign className="mr-2 text-primary" size={20} />}
    >
      <FeeItem
        id="pet-deposit"
        title="Pet Deposit (Refundable)"
        amount="$250.00"
        description="Refundable deposit for pet owners to cover potential pet damages."
      />
      
      <FeeItem
        id="pet-fee"
        title="Pet Fee"
        amount="$250.00"
        description="One-time non-refundable fee for having a pet in the apartment."
      />
      
      <FeeItem
        id="pet-rent"
        title="Pet Rent"
        amount="$20.00/month"
        description="Monthly fee for having a pet in the apartment."
      />
      
      <FeeItem
        id="credit-reporting"
        title="Positive Credit Reporting"
        amount="$6.95-$10.95/month"
        description="Optional service that reports your on-time rent payments to credit bureaus to help build your credit score."
      />
    </FeeCategory>
  );
};

export default OptionalFeesSection;
