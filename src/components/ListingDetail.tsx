
import React, { useState } from 'react';
import { 
  MapPin, Star, DollarSign, Building, Wifi, Dumbbell, Trees, Car, Tag, Clock, 
  Check, X, Info, Zap, ArrowRight, Download, Users, Eye, ShoppingBag, Bus, Walking
} from 'lucide-react';
import { ListingProps } from './ListingCard';
import Button from './ui-components/Button';
import Badge from './ui-components/Badge';
import { cn } from '../lib/utils';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './ui/collapsible';
import { Separator } from './ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import ReviewSection from './ReviewSection';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

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

  // Room types with pricing
  const roomTypes = [
    { 
      type: '1 Bedroom, 1 Bath', 
      price: '$1100/month',
      size: '600-700 sq ft',
      description: 'Ideal for single student or couple',
      shared: false
    },
    { 
      type: '2 Bedroom, 2 Bath', 
      price: '$1400/month',
      size: '900-1000 sq ft',
      description: 'Perfect for sharing',
      shared: true,
      perPerson: '$350/person (4 people)'
    },
    { 
      type: '3 Bedroom, 2 Bath', 
      price: '$1750/month',
      size: '1200-1300 sq ft',
      description: 'Largest unit available',
      shared: true,
      perPerson: '$300/person (6 people)'
    }
  ];

  // Transportation options
  const transportationOptions = [
    { 
      mode: 'Walking', 
      icon: <Walking size={16} />,
      time: '50 minutes to campus',
      details: 'Not recommended for regular commuting',
      highlight: false
    },
    { 
      mode: 'Driving', 
      icon: <Car size={16} />,
      time: '15 minutes to campus',
      details: 'Parking available at university for $5/day',
      highlight: true
    },
    { 
      mode: 'Bus', 
      icon: <Bus size={16} />,
      time: '32 minutes total (Bus 60 → Bus 54)',
      details: 'Bus stop: 2 minutes walk',
      additionalInfo: [
        'Bus frequency: Every 10-15 minutes during peak hours',
        'Bus fare: $1.25 per ride or $40 monthly pass'
      ],
      highlight: true
    }
  ];

  // Nearby essentials
  const nearbyPlaces = [
    { name: 'Walmart', distance: '5 minutes walk', type: 'shopping' },
    { name: 'Indian Grocery Store', distance: '10 minutes walk', type: 'grocery' },
    { name: 'CVS Pharmacy', distance: '4 minutes walk', type: 'health' },
    { name: 'Domino\'s Pizza', distance: '2 minutes walk', type: 'food' },
    { name: 'Indian Restaurant', distance: '5 minutes walk', type: 'food' },
    { name: 'Metro Bus Stop', distance: '2 minutes walk', type: 'transportation' }
  ];

  // Mock reviews
  const reviews = [
    {
      id: '1',
      name: 'Ananya Sharma',
      date: 'August 2023',
      rating: 5,
      comment: 'I love living at this apartment! The Indian grocery store nearby is so convenient for me. The management is very responsive and the maintenance requests are handled promptly.',
      helpful: 18,
      isVerified: true
    },
    {
      id: '2',
      name: 'Raj Patel',
      date: 'May 2023',
      rating: 4,
      comment: 'Great place for Indian students. We formed a good community here with weekend gatherings. The apartments are well-maintained and the bus route to university is reliable.',
      helpful: 12,
      isVerified: true
    },
    {
      id: '3',
      name: 'Deepika M.',
      date: 'December 2022',
      rating: 4,
      comment: 'I\'ve been living here for 2 years and it\'s been a good experience. The location is convenient for Indian students - close to grocery stores, restaurants, and quick bus ride to campus.',
      helpful: 7,
      isVerified: false
    }
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
                
                {/* Available Room Types */}
                <div className="mt-8 mb-8">
                  <h3 className="text-xl font-bold mb-4">Available Room Types</h3>
                  
                  <div className="space-y-4">
                    {roomTypes.map((room, index) => (
                      <Card key={index} className="border border-primary/10">
                        <CardHeader className="pb-2">
                          <CardTitle className="flex justify-between items-center">
                            <span>{room.type}</span>
                            <span className="text-primary">{room.price}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-1">{room.size}</p>
                          <p className="text-sm mb-2">{room.description}</p>
                          {room.shared && (
                            <div className="text-sm text-primary font-medium">
                              Shared option: {room.perPerson}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
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
              
              {/* Transportation Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Clock size={20} className="text-primary mr-2" />
                  Transportation
                </h2>
                
                <div className="space-y-4">
                  {transportationOptions.map((option, index) => (
                    <div 
                      key={index} 
                      className={cn(
                        "p-4 border rounded-lg",
                        option.highlight ? "border-primary/20 bg-primary/5" : "border-border"
                      )}
                    >
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-3">
                          {option.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{option.mode}</h4>
                          <p className={cn(
                            "text-sm",
                            option.highlight ? "text-primary font-medium" : "text-muted-foreground"
                          )}>
                            {option.time}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{option.details}</p>
                      
                      {option.additionalInfo && (
                        <ul className="mt-2 space-y-1">
                          {option.additionalInfo.map((info, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span> {info}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Nearby Essentials */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <ShoppingBag size={20} className="text-primary mr-2" />
                  Nearby Essentials
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {nearbyPlaces.map((place, index) => (
                    <div key={index} className="flex items-center p-3 border border-border rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-3">
                        {place.type === 'food' && <Users size={18} />}
                        {place.type === 'shopping' && <ShoppingBag size={18} />}
                        {place.type === 'grocery' && <ShoppingBag size={18} />}
                        {place.type === 'health' && <Info size={18} />}
                        {place.type === 'transportation' && <Bus size={18} />}
                      </div>
                      <div>
                        <h4 className="font-medium">{place.name}</h4>
                        <p className="text-sm text-muted-foreground">{place.distance}</p>
                      </div>
                    </div>
                  ))}
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
              
              {/* Reviews Section */}
              <ReviewSection reviews={reviews} className="mb-8" />
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
