
import React from 'react';
import { MapPin, Star, DollarSign, Tag } from 'lucide-react';
import { ListingProps } from './ListingCard';
import Button from './ui-components/Button';
import Badge from './ui-components/Badge';
import { cn } from '../lib/utils';
import PropertyOverview from './listing-detail/PropertyOverview';
import RoomTypes from './listing-detail/RoomTypes';
import TransportationOptions from './listing-detail/TransportationOptions';
import NearbyPlaces from './listing-detail/NearbyPlaces';
import LeaseSteps from './listing-detail/LeaseSteps';
import FeesImage from './listing-detail/FeesImage';
import CostBreakdown from './listing-detail/CostBreakdown';
import StudentDeals from './listing-detail/StudentDeals';
import ReviewSection from './ReviewSection';
import { Bus, Car, FootprintsIcon } from 'lucide-react';

interface ListingDetailProps {
  listing: ListingProps;
  onBack: () => void;
  className?: string;
}

const ListingDetail: React.FC<ListingDetailProps> = ({ listing, onBack, className }) => {
  // Data definitions
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
      icon: <FootprintsIcon size={16} />,
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
              <PropertyOverview 
                description="A perfect student apartment located near the university campus."
                isFurnished={listing.isFurnished}
                popularWith={listing.popularWith}
                amenities={listing.amenities}
                society={listing.society}
                className="mb-8"
              />
              
              <RoomTypes 
                roomTypes={roomTypes}
                className="mt-8 mb-8"
              />
              
              <TransportationOptions
                transportationOptions={transportationOptions}
                className="mb-8"
              />
              
              <NearbyPlaces
                nearbyPlaces={nearbyPlaces}
                className="mb-8"
              />
              
              <LeaseSteps
                leaseSteps={leaseSteps}
                className="mb-8"
              />
              
              <FeesImage className="mb-8" />
              
              <ReviewSection reviews={reviews} className="mb-8" />
            </div>
            
            <div>
              <CostBreakdown
                costBreakdown={costBreakdown}
                className="mb-6"
              />
              
              <StudentDeals
                deals={dealsList}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
