
import React, { useState } from 'react';
import { ArrowLeft, Download, Info, DollarSign, Home, Clock, Alert } from 'lucide-react';
import Button from './ui-components/Button';
import Badge from './ui-components/Badge';
import { cn } from '../lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './ui/collapsible';

interface FeeBreakdownProps {
  onBack: () => void;
  className?: string;
}

const FeeBreakdown: React.FC<FeeBreakdownProps> = ({ onBack, className }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <div className={cn("container px-4 py-16 mx-auto", className)}>
      <div className="max-w-4xl mx-auto">
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
          <p className="text-lg text-muted-foreground mb-6">
            Understanding all the costs associated with renting an apartment is crucial for budgeting. 
            Here's a comprehensive breakdown of all possible fees you might encounter.
          </p>
          
          <div className="bg-primary/5 p-4 rounded-lg mb-8 flex items-center">
            <Info size={20} className="text-primary mr-3 flex-shrink-0" />
            <p className="text-sm">
              Not all properties charge all these fees. The specific costs vary by property and lease terms. 
              Our referral program can help you save on many of these costs!
            </p>
          </div>
        </div>
        
        {/* Fee Breakdown Image */}
        <div className="mb-10">
          <div className="relative">
            <Collapsible 
              open={isImageExpanded} 
              onOpenChange={setIsImageExpanded}
              className="w-full"
            >
              <div className="border border-border rounded-lg overflow-hidden mb-2">
                <CollapsibleTrigger asChild>
                  <div className="cursor-pointer">
                    <img 
                      src="/lovable-uploads/e5213118-b9dc-4047-8899-900af6bf8836.png" 
                      alt="Fee Breakdown Chart" 
                      className={cn(
                        "w-full h-auto transition-all duration-300",
                        isImageExpanded ? "" : "max-h-[300px] object-cover object-top"
                      )}
                    />
                    {!isImageExpanded && (
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent flex items-end justify-center pb-2">
                        <Badge variant="outline" className="bg-background">
                          Click to expand full chart
                        </Badge>
                      </div>
                    )}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 bg-background">
                    <p className="text-sm text-muted-foreground">
                      This chart shows all potential fees associated with renting an apartment. Remember that not all properties charge all these fees.
                    </p>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>
        </div>
        
        {/* Categorized Fee Breakdown */}
        <div className="space-y-8">
          {/* Move-In Fees */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="mr-2 text-primary" size={20} />
                Move-In Basics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="admin-fee">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Administrative Fee</span>
                      <Badge variant="outline" className="ml-2">$325.00</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      This is a one-time fee charged by the property management to process your application and prepare your lease documents.
                    </p>
                    <div className="text-sm flex items-center text-primary">
                      <Info size={14} className="mr-1" />
                      <span>You can save on this fee with our referral program!</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="application-fee">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Application Fee</span>
                      <Badge variant="outline" className="ml-2">$60.00</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Fee charged to process your rental application, including background and credit checks.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="security-deposit">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Security Deposit Alternative</span>
                      <Badge variant="outline" className="ml-2">$300.00-$1,000.00</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      This is a refundable deposit that covers potential damages to the apartment beyond normal wear and tear.
                    </p>
                    <div className="text-sm flex items-center text-amber-600">
                      <Info size={14} className="mr-1" />
                      <span>The amount varies based on your credit score and rental history.</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          
          {/* Essential Monthly Fees */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 text-primary" size={20} />
                Essential Monthly Costs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="pest-control">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Pest Control Services</span>
                      <Badge variant="outline" className="ml-2">$6.00/month</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Regular pest prevention and treatment services for your apartment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="renters-insurance">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Renters Liability Insurance</span>
                      <Badge variant="outline" className="ml-2">Varies</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Insurance that protects your personal belongings and provides liability coverage.
                    </p>
                    <div className="text-sm flex items-center text-primary">
                      <Info size={14} className="mr-1" />
                      <span>We can help you find affordable renters insurance starting at $10/month!</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="admin-monthly">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Trash/Recycling - Hauling</span>
                      <Badge variant="outline" className="ml-2">$25.00/month</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Fee for trash collection and recycling services.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="electricity">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Utility - Electric</span>
                      <Badge variant="outline" className="ml-2">Usage-based</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Electricity charges based on your usage.
                    </p>
                    <div className="text-sm flex items-center text-primary">
                      <Info size={14} className="mr-1" />
                      <span>Our referral program offers first month FREE electricity for students!</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="gas">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Utility - Gas</span>
                      <Badge variant="outline" className="ml-2">Usage-based</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Gas charges for heating, cooking, etc. based on usage.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="water">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Utility - Water/Sewer</span>
                      <Badge variant="outline" className="ml-2">Usage-based</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Water and sewer charges based on usage.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          
          {/* Optional Add-ons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 text-primary" size={20} />
                Optional Add-ons
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="pet-deposit">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Pet Deposit (Refundable)</span>
                      <Badge variant="outline" className="ml-2">$250.00</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Refundable deposit for pet owners to cover potential pet damages.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="pet-fee">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Pet Fee</span>
                      <Badge variant="outline" className="ml-2">$250.00</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      One-time non-refundable fee for having a pet in the apartment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="pet-rent">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Pet Rent</span>
                      <Badge variant="outline" className="ml-2">$20.00/month</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Monthly fee for having a pet in the apartment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="credit-reporting">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Positive Credit Reporting</span>
                      <Badge variant="outline" className="ml-2">$6.95-$10.95/month</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Optional service that reports your on-time rent payments to credit bureaus to help build your credit score.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          
          {/* Situational Fees */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 text-primary" size={20} />
                Situational Fees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="late-fee">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Late Fee</span>
                      <Badge variant="outline" className="ml-2">9.99%</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Fee charged if rent is paid after the due date, typically a percentage of the monthly rent.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="early-termination">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Early Lease Termination</span>
                      <Badge variant="outline" className="ml-2">$2,000.00</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Fee for breaking your lease before the agreed-upon end date.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="lockout">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>Access/Lock Change Fee</span>
                      <Badge variant="outline" className="ml-2">$75.00</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Fee for changing locks or gaining access if locked out.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
        
        {/* Savings and Referrals Section */}
        <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/10">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <DollarSign size={20} className="mr-2 text-primary" />
            How Our Referral Program Saves You Money
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-white rounded-lg shadow-sm border border-border">
              <h3 className="font-medium mb-2 flex items-center">
                <Badge variant="success" className="mr-2">Save $300</Badge>
                Admin Fee Waiver
              </h3>
              <p className="text-sm text-muted-foreground">
                Most properties will waive or reduce the admin fee when you use our referral link.
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-sm border border-border">
              <h3 className="font-medium mb-2 flex items-center">
                <Badge variant="success" className="mr-2">Save $100</Badge>
                WiFi Installation
              </h3>
              <p className="text-sm text-muted-foreground">
                Get free installation and first month discounted with our partner ISPs.
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-sm border border-border">
              <h3 className="font-medium mb-2 flex items-center">
                <Badge variant="success" className="mr-2">Save $80</Badge>
                First Month Electricity
              </h3>
              <p className="text-sm text-muted-foreground">
                Our electricity partner offers first month free to new student accounts.
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-sm border border-border">
              <h3 className="font-medium mb-2 flex items-center">
                <Badge variant="success" className="mr-2">Save $200+</Badge>
                Move-in Specials
              </h3>
              <p className="text-sm text-muted-foreground">
                Many properties offer exclusive move-in specials like reduced deposits through our program.
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
      </div>
    </div>
  );
};

export default FeeBreakdown;
