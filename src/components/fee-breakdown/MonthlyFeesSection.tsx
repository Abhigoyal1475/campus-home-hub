
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
        id="rent"
        title="Base Rent"
        amount="$700.00-$1,200.00/month"
        description="Your monthly rent payment, the core cost of housing."
        note={{
          type: 'primary',
          text: 'Properties near Indian student communities often offer special rates - ask us for details!'
        }}
      />
      
      <FeeItem
        id="pest-control"
        title="Pest Control Services"
        amount="$6.00/month"
        description="Regular pest prevention and treatment services for your apartment."
      />
      
      <FeeItem
        id="renters-insurance"
        title="Renters Liability Insurance"
        amount="$10.00-$20.00/month"
        description="Insurance that protects your personal belongings and provides liability coverage."
        discount="Use our referral link to get 1 month FREE insurance, then just $10/month!"
      />
      
      <FeeItem
        id="trash-fee"
        title="Trash/Recycling - Hauling"
        amount="$25.00/month"
        description="Fee for trash collection and recycling services."
      />
      
      <FeeItem
        id="electricity"
        title="Utility - Electric"
        amount="$50.00-$100.00/month"
        description="Electricity charges based on your usage."
        discount="Our referral program offers COMPLETELY FREE first month electricity for students! Save $50-100!"
      />
      
      <FeeItem
        id="gas"
        title="Utility - Gas"
        amount="$30.00-$60.00/month"
        description="Gas charges for heating, cooking, etc. based on usage."
        discount="Use our referral code to get a $50 credit on your first gas bill!"
      />
      
      <FeeItem
        id="water"
        title="Utility - Water/Sewer"
        amount="$25.00-$45.00/month"
        description="Water and sewer charges based on usage."
      />
      
      <FeeItem
        id="internet"
        title="Internet/WiFi Service"
        amount="$40.00-$70.00/month"
        description="High-speed internet service essential for students."
        discount="Get $100 off installation AND $20/month discount with our special Indian student package!"
      />
      
      <FeeItem
        id="parking"
        title="Parking Fee"
        amount="$25.00-$100.00/month"
        description="Monthly fee for reserved or covered parking spaces."
        note={{
          type: 'info',
          text: 'Many properties include one free spot with rent.'
        }}
      />
      
      <FeeItem
        id="amenity-fee"
        title="Amenity Fee"
        amount="$10.00-$30.00/month"
        description="Fee for access to property amenities like gym, pool, etc."
        discount="Save 50% on your first 3 months with our referral!"
      />
    </FeeCategory>
  );
};

export default MonthlyFeesSection;
