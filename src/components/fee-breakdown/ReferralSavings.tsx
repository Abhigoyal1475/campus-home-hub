
import React from 'react';
import { Gift, Download } from 'lucide-react';
import Badge from '../ui-components/Badge';
import Button from '../ui-components/Button';

const ReferralSavings = () => {
  return (
    <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/10">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Gift size={20} className="mr-2 text-primary" />
        How Our Referral Program Saves You Money
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-border">
          <h3 className="font-medium mb-2 flex items-center">
            <Badge variant="success" className="mr-2">Save $300</Badge>
            Admin Fee Waiver
          </h3>
          <p className="text-sm text-muted-foreground">
            Most properties will completely waive the $300+ admin fee when you use our referral link!
          </p>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm border border-border">
          <h3 className="font-medium mb-2 flex items-center">
            <Badge variant="success" className="mr-2">Save $100</Badge>
            WiFi Installation
          </h3>
          <p className="text-sm text-muted-foreground">
            Get completely FREE installation and first month service at 50% off with our partner ISPs!
          </p>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm border border-border">
          <h3 className="font-medium mb-2 flex items-center">
            <Badge variant="success" className="mr-2">Save $80</Badge>
            First Month Electricity
          </h3>
          <p className="text-sm text-muted-foreground">
            Our electricity partner offers first month COMPLETELY FREE to new student accounts!
          </p>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm border border-border">
          <h3 className="font-medium mb-2 flex items-center">
            <Badge variant="success" className="mr-2">Save $200+</Badge>
            Move-in Specials
          </h3>
          <p className="text-sm text-muted-foreground">
            Many properties offer exclusive move-in specials like $200 gift cards through our program!
          </p>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button 
          variant="primary"
          size="lg"
          leftIcon={<Download size={16} />}
        >
          Download Complete Fee Guide (PDF)
        </Button>
      </div>
    </div>
  );
};

export default ReferralSavings;
