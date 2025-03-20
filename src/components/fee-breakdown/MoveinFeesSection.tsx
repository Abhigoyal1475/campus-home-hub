
import React from 'react';
import { Home, Gift } from 'lucide-react';
import FeeCategory from './FeeCategory';
import FeeItem from './FeeItem';

const MoveinFeesSection = () => {
  return (
    <FeeCategory 
      title="Move-In Basics" 
      icon={<Home className="mr-2 text-primary" size={20} />}
    >
      <FeeItem
        id="admin-fee"
        title="Administrative Fee"
        amount="$325.00"
        description="This is a one-time fee charged by the property management to process your application and prepare your lease documents."
        discount="Use our referral link and save $300 on this fee! Many properties waive it completely!"
      />
      
      <FeeItem
        id="application-fee"
        title="Application Fee"
        amount="$60.00"
        description="Fee charged to process your rental application, including background and credit checks."
        discount="Save $25-50 on this fee with our exclusive referral code!"
      />
      
      <FeeItem
        id="security-deposit"
        title="Security Deposit Alternative"
        amount="$300.00-$1,000.00"
        description="This is a refundable deposit that covers potential damages to the apartment beyond normal wear and tear."
        note={{
          type: 'info',
          text: 'The amount varies based on your credit score and rental history.'
        }}
        discount="Our referral program can reduce this deposit by up to $200!"
      />
    </FeeCategory>
  );
};

export default MoveinFeesSection;
