
import React from 'react';
import { DollarSign, Gift } from 'lucide-react';
import FeeCategory from './FeeCategory';
import FeeItem from './FeeItem';

const MonthlyFeesSection = () => {
  return (
    <FeeCategory 
      title="Essential Monthly Costs" 
      icon={<DollarSign className="mr-2 text-primary" size={20} />}
    >
      <FeeItem
        id="pest-control"
        title="Pest Control Services"
        amount="$6.00/month"
        description="Regular pest prevention and treatment services for your apartment."
      />
      
      <FeeItem
        id="renters-insurance"
        title="Renters Liability Insurance"
        amount="Varies"
        description="Insurance that protects your personal belongings and provides liability coverage."
        discount="Use our referral link to get 1 month FREE insurance, then just $10/month!"
      />
      
      <FeeItem
        id="admin-monthly"
        title="Trash/Recycling - Hauling"
        amount="$25.00/month"
        description="Fee for trash collection and recycling services."
      />
      
      <FeeItem
        id="electricity"
        title="Utility - Electric"
        amount="Usage-based"
        description="Electricity charges based on your usage."
        discount="Our referral program offers COMPLETELY FREE first month electricity for students! Save $50-100!"
      />
      
      <FeeItem
        id="gas"
        title="Utility - Gas"
        amount="Usage-based"
        description="Gas charges for heating, cooking, etc. based on usage."
        discount="Use our referral code to get a $50 credit on your first gas bill!"
      />
      
      <FeeItem
        id="water"
        title="Utility - Water/Sewer"
        amount="Usage-based"
        description="Water and sewer charges based on usage."
      />
    </FeeCategory>
  );
};

export default MonthlyFeesSection;
