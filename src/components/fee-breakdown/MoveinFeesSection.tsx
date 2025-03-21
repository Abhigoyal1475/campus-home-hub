
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
        title="Security Deposit"
        amount="$300.00-$1,000.00"
        description="This is a refundable deposit that covers potential damages to the apartment beyond normal wear and tear."
        note={{
          type: 'info',
          text: 'The amount varies based on your credit score and rental history.'
        }}
        discount="Our referral program can reduce this deposit by up to $200!"
      />
      
      <FeeItem
        id="first-month-rent"
        title="First Month's Rent"
        amount="$700.00-$1,200.00"
        description="Your first month's rent payment, typically due at move-in."
        note={{
          type: 'primary',
          text: 'Some properties offer prorated rent if you move in mid-month.'
        }}
      />
      
      <FeeItem
        id="security-deposit-alt"
        title="Security Deposit Alternative"
        amount="$75.00-$150.00"
        description="Many properties now offer security deposit alternatives - a smaller, non-refundable fee instead of a large deposit."
        note={{
          type: 'info',
          text: 'This is usually much less than a traditional security deposit but is non-refundable.'
        }}
        discount="Save $50 on this fee with our referral code!"
      />
      
      <FeeItem
        id="move-in-fee"
        title="Move-In Fee"
        amount="$100.00-$200.00"
        description="Some properties charge a separate move-in fee to cover the administrative costs of setting up a new tenant."
        discount="Our referral program can get this fee waived at select properties!"
      />
      
      <FeeItem
        id="key-fob-fee"
        title="Key/Fob Deposit"
        amount="$25.00-$75.00"
        description="A refundable deposit for your apartment keys or electronic entry fob."
        note={{
          type: 'info',
          text: 'Returned when you return all keys/fobs at move-out.'
        }}
      />
      
      <FeeItem
        id="utility-connection"
        title="Utility Connection Fees"
        amount="$25.00-$75.00"
        description="Fees to activate and set up your utilities like electricity, water, and internet."
        discount="Get these fees WAIVED ($75 value) with our utility connection service!"
      />
    </FeeCategory>
  );
};

export default MoveinFeesSection;
