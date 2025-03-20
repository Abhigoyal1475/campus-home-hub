
import React from 'react';
import { Clock } from 'lucide-react';
import FeeCategory from './FeeCategory';
import FeeItem from './FeeItem';

const SituationalFeesSection = () => {
  return (
    <FeeCategory 
      title="Situational Fees" 
      icon={<Clock className="mr-2 text-primary" size={20} />}
    >
      <FeeItem
        id="late-fee"
        title="Late Fee"
        amount="9.99%"
        description="Fee charged if rent is paid after the due date, typically a percentage of the monthly rent."
      />
      
      <FeeItem
        id="early-termination"
        title="Early Lease Termination"
        amount="$2,000.00"
        description="Fee for breaking your lease before the agreed-upon end date."
      />
      
      <FeeItem
        id="lockout"
        title="Access/Lock Change Fee"
        amount="$75.00"
        description="Fee for changing locks or gaining access if locked out."
      />
    </FeeCategory>
  );
};

export default SituationalFeesSection;
