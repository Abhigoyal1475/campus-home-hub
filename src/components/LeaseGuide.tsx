
import React from 'react';
import { CreditCard, Wifi, Lightbulb, Lock, Info, FileText } from 'lucide-react';
import Button from './ui-components/Button';
import { cn } from '../lib/utils';

interface LeaseGuideProps {
  className?: string;
  onViewFees?: () => void;
}

const LeaseGuide: React.FC<LeaseGuideProps> = ({ className, onViewFees }) => {
  return (
    <section className={cn("py-16 bg-accent", className)}>
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Lease Setup Guide</h2>
              <p className="text-muted-foreground max-w-2xl">
                Everything you need to know before signing your lease
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button 
                variant="outline" 
                leftIcon={<FileText size={16} />}
                onClick={onViewFees}
              >
                View detailed fee breakdown
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <CreditCard className="text-primary" size={24} />,
                title: "Lease Basics",
                description: "Application fee, deposit, move-in fees",
                items: ["Application: $50-100", "Deposit: $500-1000", "Admin Fee: $100-250"]
              },
              {
                icon: <Wifi className="text-primary" size={24} />,
                title: "WiFi Setup",
                description: "Best student plans & referral codes",
                items: ["Student plans from $20/mo", "Free installation with referral", "No contract options"]
              },
              {
                icon: <Lightbulb className="text-primary" size={24} />,
                title: "Electricity Options",
                description: "Fixed vs. variable pricing for students",
                items: ["First month free for students", "Fixed rate protection", "Average cost: $40-80/mo"]
              },
              {
                icon: <Lock className="text-primary" size={24} />,
                title: "Renter's Insurance",
                description: "Why it's needed & cheapest providers",
                items: ["Required by most properties", "From $10/month", "Fire, theft & liability protection"]
              }
            ].map((guide, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-xl border border-primary/5 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{guide.icon}</div>
                <h3 className="text-lg font-medium mb-2">{guide.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                <ul className="space-y-2">
                  {guide.items.map((item, i) => (
                    <li key={i} className="text-sm flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/80 mt-1.5 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaseGuide;
