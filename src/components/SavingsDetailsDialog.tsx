
import React from 'react';
import { Gift, ExternalLink, Zap, Home, Shield, ShoppingBag } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '../lib/utils';
import Badge from './ui-components/Badge';
import Button from './ui-components/Button';

interface SavingItem {
  icon: React.ReactNode;
  title: string;
  amount: string;
  description: string;
  link?: string;
  linkText?: string;
}

interface SavingsDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SavingsDetailsDialog: React.FC<SavingsDetailsDialogProps> = ({ 
  open, 
  onOpenChange 
}) => {
  const savingsItems: SavingItem[] = [
    {
      icon: <Home className="text-primary" size={20} />,
      title: "Admin Fee Waiver",
      amount: "Save $300-500",
      description: "Use our exclusive referral code when applying for your lease to get the admin fee completely waived at most partner properties.",
      link: "#",
      linkText: "View eligible properties"
    },
    {
      icon: <Zap className="text-primary" size={20} />,
      title: "First Month Electricity",
      amount: "Save $80-120",
      description: "Our electricity partner offers first month completely FREE to new student accounts through our referral link.",
      link: "#",
      linkText: "Get electricity discount"
    },
    {
      icon: <Shield className="text-primary" size={20} />,
      title: "Renters Insurance",
      amount: "Save $50-75",
      description: "Get 50% off your first year of renters insurance with our partner insurance provider.",
      link: "#",
      linkText: "Apply for insurance"
    },
    {
      icon: <Zap className="text-primary" size={20} />,
      title: "Internet Setup & Discount",
      amount: "Save $100+",
      description: "Free installation and first month WiFi at 50% off with our partner ISPs when using our referral link.",
      link: "#", 
      linkText: "Setup internet service"
    },
    {
      icon: <ShoppingBag className="text-primary" size={20} />,
      title: "Student Furniture Marketplace",
      amount: "Save $200+",
      description: "Browse our exclusive student marketplace for affordable, quality furniture from graduating students.",
      link: "#",
      linkText: "Shop student marketplace"
    }
  ];

  const totalSavings = "$730-995";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Gift className="text-primary" size={20} />
            Student Savings Bundle
          </DialogTitle>
          <DialogDescription>
            Take advantage of these exclusive student discounts and save up to $700+ on your housing and utilities!
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4 my-4">
            {savingsItems.map((item, index) => (
              <div key={index} className="p-4 rounded-lg border bg-accent/20">
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <Badge variant="success">{item.amount}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    {item.link && (
                      <a 
                        href={item.link} 
                        className="text-xs text-primary hover:underline inline-flex items-center"
                      >
                        {item.linkText} <ExternalLink size={12} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Total Potential Savings:</h3>
              <span className="text-lg font-bold text-primary">{totalSavings}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              *Actual savings may vary based on property selection and service usage
            </p>
          </div>
        </ScrollArea>

        <div className="mt-4">
          <Button variant="primary" className="w-full" size="lg">
            Get Started With Savings
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SavingsDetailsDialog;
