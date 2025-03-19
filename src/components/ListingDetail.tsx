
import React, { useState } from 'react';
import { MapPin, Star, DollarSign, Building, Wifi, Dumbbell, Trees, Car, Tag, Clock, Check, X, Info, Zap, ArrowRight, Download, Users, Eye } from 'lucide-react';
import { ListingProps } from './ListingCard';
import Button from './ui-components/Button';
import Badge from './ui-components/Badge';
import { cn } from '../lib/utils';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './ui/collapsible';

interface ListingDetailProps {
  listing: ListingProps;
  onBack: () => void;
  className?: string;
}

const ListingDetail: React.FC<ListingDetailProps> = ({ listing, onBack, className }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  
  const costBreakdown = [
    { title: 'Application Fee', amount: '$50-100', oneTime: true },
    { title: 'Security Deposit', amount: '$500-1000', oneTime: true },
    { title: 'Admin Fee', amount: '$100-250', oneTime: true },
    { title: 'Electricity', amount: '$40-80/month', oneTime: false },
    { title: 'WiFi', amount: '$40/month', oneTime: false, discount: 'or $20 with our referral!' },
    { title: 'Trash Service', amount: '$10/month', oneTime: false },
    { title: 'Water/Sewer', amount: 'Usage-based', oneTime: false }
  ];

  const dealsList = [
    { title: 'WiFi Installation', savings: '$100 off', description: 'Use our exclusive referral code' },
    { title: 'Admin Fee', savings: '$300 waived', description: 'Apply through our link' },
    { title: 'First Month Electricity', savings: 'Free', description: 'For new student accounts' },
    { title: 'Move-in Gift Card', savings: '$50', description: 'Limited time offer for new leases' }
  ];

  const leaseSteps = [
    { title: 'Submit Application', description: 'Complete the online rental application' },
    { title: 'Pay Security Deposit', description: 'Secure your apartment with a deposit' },
    { title: 'Set Up Utilities', description: 'Arrange for electricity, WiFi and more' },
    { title: 'Move-in Day', description: 'Get your keys and settle into your new home!' }
  ];

  return (
    <div className={cn("bg-white rounded-xl shadow-soft border border-primary/5 overflow-hidden", className)}>
      {/* Hero image section */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${listing.imageUrl})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        <div className="absolute top-4 left-4 z-10">
          <Button variant="outline" size="sm" className="bg-white" onClick={onBack}>
            Back to listings
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{listing.title}</h1>
            <div className="flex items-center flex-wrap gap-3">
              <Badge 
                variant="default" 
                className="bg-white/90 text-foreground" 
                icon={<MapPin size={14} />}
              >
                {listing.distance}
              </Badge>
              <Badge 
                variant="default" 
                className="bg-white/90 text-foreground" 
                icon={<DollarSign size={14} />}
              >
                {listing.priceRange}/month
              </Badge>
              <Badge 
                variant="default" 
                className="bg-white/90 text-foreground" 
                icon={<Star size={14} className="text-amber-500" />}
              >
                {listing.rating} ({listing.reviewCount} reviews)
              </Badge>
              <Badge 
                variant="success" 
                icon={<Tag size={14} />}
              >
                Save ${listing.discount} with referral
              </Badge>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Main info section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Property Overview</h2>
                <p className="text-muted-foreground mb-4">
                  A perfect student apartment located near the university campus. This {listing.isFurnished ? 'furnished' : 'unfurnished'} property offers modern amenities and a convenient location for students.
                </p>
                
                {listing.popularWith && listing.popularWith.length > 0 && (
                  <div className="mb-4 p-3 bg-primary/5 rounded-lg flex items-center">
                    <Users size={18} className="text-primary mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Popular with {listing.popularWith.join(', ')}</p>
                      <p className="text-sm text-muted-foreground">
                        This property has a strong community of students from these backgrounds
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {listing.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Check size={16} className="text-primary mr-2" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Property Managed By</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-lg mr-3">
                      {listing.society.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{listing.society}</p>
                      <p className="text-sm text-muted-foreground">Professional property management</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Lease Application Process</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {leaseSteps.map((step, index) => (
                    <div key={index} className="glass-card p-4 rounded-xl border border-primary/5 flex">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button 
                    variant="primary" 
                    rightIcon={<ArrowRight size={16} />}
                  >
                    Start Application
                  </Button>
                </div>
              </div>
              
              {/* Fee Breakdown Image */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Complete Fee Breakdown</h2>
                
                <div className="relative">
                  <Collapsible 
                    open={isImageExpanded} 
                    onOpenChange={setIsImageExpanded}
                    className="w-full"
                  >
                    <div className="border border-border rounded-lg overflow-hidden mb-4">
                      <CollapsibleTrigger asChild>
                        <div className="cursor-pointer">
                          <img 
                            src="/lovable-uploads/e5213118-b9dc-4047-8899-900af6bf8836.png" 
                            alt="Fee Breakdown Chart" 
                            className={cn(
                              "w-full h-auto transition-all duration-300",
                              isImageExpanded ? "" : "max-h-[200px] object-cover object-top"
                            )}
                          />
                          {!isImageExpanded && (
                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent flex items-end justify-center pb-2">
                              <Badge variant="outline" className="bg-background/80">
                                <Eye size={14} className="mr-1" /> 
                                Click to view complete fee breakdown
                              </Badge>
                            </div>
                          )}
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-4 bg-background">
                          <p className="text-sm text-muted-foreground mb-3">
                            This chart shows all potential fees associated with renting an apartment. Remember that not all properties charge all these fees.
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm"
                            leftIcon={<Download size={14} />}
                          >
                            Download Fee Chart
                          </Button>
                        </div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                </div>
              </div>
            </div>
            
            <div>
              <div className="glass-card p-5 rounded-xl border border-primary/10 mb-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <DollarSign size={18} className="text-primary mr-2" />
                  Fee Breakdown
                </h3>
                
                <div className="space-y-4">
                  <div className="pb-2 border-b border-border">
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Move-in Costs</h4>
                    {costBreakdown.filter(cost => cost.oneTime).map((cost, index) => (
                      <div key={index} className="flex justify-between items-center py-1">
                        <span className="text-sm">{cost.title}</span>
                        <span className="text-sm font-medium">{cost.amount}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Monthly Costs</h4>
                    {costBreakdown.filter(cost => !cost.oneTime).map((cost, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-sm">{cost.title}</span>
                          <span className="text-sm font-medium">{cost.amount}</span>
                        </div>
                        {cost.discount && (
                          <div className="text-xs text-primary ml-5 -mt-1">{cost.discount}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-5 rounded-xl border border-primary/10">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Tag size={18} className="text-primary mr-2" />
                  Student Savings
                </h3>
                
                <div className="space-y-3">
                  {dealsList.map((deal, index) => (
                    <div key={index} className="p-3 bg-accent rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{deal.title}</span>
                        <Badge variant="success">{deal.savings}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{deal.description}</p>
                    </div>
                  ))}
                  
                  <div className="pt-3">
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      leftIcon={<Info size={16} />}
                    >
                      How to claim these offers
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
