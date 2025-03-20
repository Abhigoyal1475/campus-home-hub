
import React, { useState } from 'react';
import { CreditCard, Wifi, Lightbulb, Lock, ArrowDown, ArrowUp, FileText } from 'lucide-react';
import Button from './ui-components/Button';
import { cn } from '../lib/utils';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';

interface LeaseGuideProps {
  className?: string;
  onViewFees?: () => void;
}

interface GuideCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  details: DetailItem[];
}

interface DetailItem {
  provider: string;
  plan: string;
  cost: string;
  features: string[];
  referralCode?: string;
}

const LeaseGuide: React.FC<LeaseGuideProps> = ({ className, onViewFees }) => {
  const guideCards: GuideCardProps[] = [
    {
      icon: <CreditCard className="text-primary" size={24} />,
      title: "Lease Basics",
      description: "Application fee, deposit, move-in fees",
      items: ["Application: $50-100", "Deposit: $500-1000", "Admin Fee: $100-250"],
      details: [
        {
          provider: "Standard Lease",
          plan: "12-month term",
          cost: "$50-100 application fee",
          features: [
            "Security deposit: $500-1000",
            "Admin fee: $100-250",
            "Pet deposit: $200-500 (if applicable)",
            "First month's rent in advance"
          ]
        },
        {
          provider: "Extended Lease",
          plan: "16-month term",
          cost: "$50-75 application fee",
          features: [
            "Reduced security deposit: $400-900",
            "Admin fee: $100-200",
            "First month's rent discounted by 10%",
            "Last month's rent deposit waived"
          ]
        },
        {
          provider: "Semester Lease",
          plan: "5-month term",
          cost: "$75-125 application fee",
          features: [
            "Higher monthly rate (+15%)",
            "Security deposit: $700-1200",
            "Admin fee: $150-300",
            "Best for short-term students"
          ]
        }
      ]
    },
    {
      icon: <Wifi className="text-primary" size={24} />,
      title: "WiFi Setup",
      description: "Best student plans & referral codes",
      items: ["Student plans from $20/mo", "Free installation with referral", "No contract options"],
      details: [
        {
          provider: "Xfinity",
          plan: "Student Internet",
          cost: "$30/month",
          features: [
            "200 Mbps download speeds",
            "Free self-installation kit",
            "No data caps",
            "Free access to Xfinity WiFi hotspots"
          ],
          referralCode: "STUDENT10X"
        },
        {
          provider: "AT&T Fiber",
          plan: "Student Fiber 300",
          cost: "$35/month",
          features: [
            "300 Mbps symmetrical speeds",
            "Free installation with student ID",
            "Free equipment rental",
            "No annual contract"
          ],
          referralCode: "ATTSTU25"
        },
        {
          provider: "Spectrum",
          plan: "Internet Ultra",
          cost: "$25/month (first 12 months)",
          features: [
            "400 Mbps download speeds",
            "Free modem",
            "No data caps",
            "Free antivirus security suite"
          ],
          referralCode: "SPEC4STUDENT"
        },
        {
          provider: "Verizon Fios",
          plan: "200 Mbps",
          cost: "$40/month",
          features: [
            "200 Mbps symmetrical speeds",
            "No annual contract",
            "Free router rental for 12 months",
            "Disney+ included for 6 months"
          ],
          referralCode: "FIOS2023STU"
        },
        {
          provider: "Google Fiber",
          plan: "1 Gig",
          cost: "$50/month",
          features: [
            "1000 Mbps symmetrical speeds",
            "No data caps",
            "No contracts",
            "Free installation"
          ],
          referralCode: "GFIBER100"
        }
      ]
    },
    {
      icon: <Lightbulb className="text-primary" size={24} />,
      title: "Electricity Options",
      description: "Fixed vs. variable pricing for students",
      items: ["First month free for students", "Fixed rate protection", "Average cost: $40-80/mo"],
      details: [
        {
          provider: "TXU Energy",
          plan: "Student Fixed Rate",
          cost: "$0.085/kWh",
          features: [
            "Fixed rate for 12 months",
            "First month free with code",
            "No deposit for students",
            "Average bill: $50-70/month"
          ],
          referralCode: "TXUSTUDENT"
        },
        {
          provider: "Reliant Energy",
          plan: "Student Nights & Weekends",
          cost: "$0.095/kWh + Free nights (8pm-6am)",
          features: [
            "Free electricity overnight",
            "Lower rates on weekends",
            "6-month commitment",
            "Average bill: $60-90/month"
          ],
          referralCode: "RELIANT25"
        },
        {
          provider: "Green Mountain Energy",
          plan: "Pollution Free",
          cost: "$0.105/kWh",
          features: [
            "100% renewable energy",
            "No deposit with .edu email",
            "Flexible payment options",
            "Average bill: $65-95/month"
          ],
          referralCode: "GREENEDU"
        },
        {
          provider: "Constellation",
          plan: "Student Value Plan",
          cost: "$0.079/kWh",
          features: [
            "12-month fixed rate",
            "$50 bill credit after 3 months",
            "Autopay discount available",
            "Average bill: $45-75/month"
          ],
          referralCode: "CONST50"
        },
        {
          provider: "Chariot Energy",
          plan: "Saver Solar",
          cost: "$0.089/kWh",
          features: [
            "Solar-powered electricity",
            "Price lock guarantee",
            "No cancellation fees",
            "Average bill: $55-85/month"
          ],
          referralCode: "SOLARSTU"
        }
      ]
    },
    {
      icon: <Lock className="text-primary" size={24} />,
      title: "Renter's Insurance",
      description: "Why it's needed & cheapest providers",
      items: ["Required by most properties", "From $10/month", "Fire, theft & liability protection"],
      details: [
        {
          provider: "Lemonade",
          plan: "Basic Coverage",
          cost: "$5-15/month",
          features: [
            "Personal property coverage: $10,000-$30,000",
            "Liability coverage: $100,000",
            "Instant claims via app",
            "Extra coverage available for electronics"
          ],
          referralCode: "LEMON10"
        },
        {
          provider: "State Farm",
          plan: "Student Policy",
          cost: "$10-20/month",
          features: [
            "Personal property coverage: $15,000-$50,000",
            "Liability coverage: $300,000",
            "Multi-policy discount available",
            "Water damage coverage included"
          ],
          referralCode: "SF4STUDENT"
        },
        {
          provider: "Allstate",
          plan: "Basic Renters",
          cost: "$8-18/month",
          features: [
            "Personal property coverage: $25,000",
            "Liability coverage: $100,000",
            "Identity theft restoration",
            "Additional living expenses coverage"
          ],
          referralCode: "ALLSTU15"
        },
        {
          provider: "Progressive",
          plan: "Student Essentials",
          cost: "$12-22/month",
          features: [
            "Personal property coverage: $20,000-$40,000",
            "Liability coverage: $100,000-$300,000",
            "Pet damage coverage available",
            "Bundling discounts available"
          ],
          referralCode: "PROGSTU"
        }
      ]
    }
  ];

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
            {guideCards.map((guide, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl border border-primary/5 hover-lift animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="mb-4">{guide.icon}</div>
                  <h3 className="text-lg font-medium mb-2">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                  <ul className="space-y-2 mb-4">
                    {guide.items.map((item, i) => (
                      <li key={i} className="text-sm flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/80 mt-1.5 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <button className="w-full flex items-center justify-center text-primary text-sm font-medium">
                        <span>See All Options</span>
                        <ArrowUp size={16} className="ml-1" />
                      </button>
                    </DrawerTrigger>
                    <DrawerContent className="h-[85vh] p-6">
                      <div className="max-h-[80vh] overflow-y-auto px-4">
                        <h2 className="text-2xl font-bold mb-4">{guide.title}</h2>
                        <p className="text-muted-foreground mb-6">{guide.description}</p>
                        
                        <div className="space-y-4">
                          {guide.details.map((detail, i) => (
                            <div key={i} className="p-4 rounded-lg bg-background border border-border">
                              <div className="flex justify-between mb-2">
                                <h4 className="font-medium">{detail.provider}</h4>
                                <span className="text-primary font-medium">{detail.cost}</span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{detail.plan}</p>
                              <ul className="space-y-1 mb-2">
                                {detail.features.map((feature, j) => (
                                  <li key={j} className="text-sm flex items-start">
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/80 mt-1.5 mr-2 flex-shrink-0"></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              {detail.referralCode && (
                                <div className="text-sm mt-2">
                                  <span className="bg-primary/10 text-primary px-2 py-1 rounded font-mono">
                                    Referral: {detail.referralCode}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaseGuide;
