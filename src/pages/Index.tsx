
import React, { useState } from 'react';
import Hero from '../components/Hero';
import LeaseGuide from '../components/LeaseGuide';
import ListingsGrid from '../components/ListingsGrid';
import StickyBanner from '../components/StickyBanner';
import FAQSection from '../components/FAQSection';
import ListingDetail from '../components/ListingDetail';
import CompareListings from '../components/CompareListings';
import { ListingProps } from '../components/ListingCard';

// Mock data for listings
const mockListings: ListingProps[] = [
  {
    id: '1',
    title: 'Modern Studio Apartment',
    society: 'University Heights',
    distance: '5 min walk',
    priceRange: '$800-950',
    isFurnished: true,
    amenities: ['Gym', 'WiFi', 'Study Room'],
    rating: 4.5,
    reviewCount: 42,
    promoTag: 'Save $100 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 100
  },
  {
    id: '2',
    title: 'Spacious 2 Bedroom',
    society: 'Campus Gardens',
    distance: '10 min bus',
    priceRange: '$1200-1400',
    isFurnished: true,
    amenities: ['Parking', 'Gym', 'Pool', 'WiFi'],
    rating: 4.2,
    reviewCount: 28,
    promoTag: 'Save $150 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 150
  },
  {
    id: '3',
    title: 'Cozy Student Loft',
    society: 'Collegiate Living',
    distance: '15 min walk',
    priceRange: '$750-850',
    isFurnished: false,
    amenities: ['WiFi', 'Study Room'],
    rating: 4.0,
    reviewCount: 19,
    promoTag: 'Save $75 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 75
  },
  {
    id: '4',
    title: 'Luxury Student Apartment',
    society: 'The Academia',
    distance: '3 min walk',
    priceRange: '$1100-1300',
    isFurnished: true,
    amenities: ['Gym', 'Pool', 'Parking', 'WiFi', 'Garden'],
    rating: 4.8,
    reviewCount: 56,
    promoTag: 'Save $200 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 200
  },
  {
    id: '5',
    title: 'Urban Student Lofts',
    society: 'Metro Student Living',
    distance: '12 min bus',
    priceRange: '$900-1050',
    isFurnished: false,
    amenities: ['WiFi', 'Parking', 'Study Room'],
    rating: 4.1,
    reviewCount: 32,
    promoTag: 'Save $125 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 125
  },
  {
    id: '6',
    title: 'Sunshine Terrace',
    society: 'University Village',
    distance: '8 min walk',
    priceRange: '$850-950',
    isFurnished: true,
    amenities: ['WiFi', 'Garden', 'Study Room'],
    rating: 4.3,
    reviewCount: 38,
    promoTag: 'Save $100 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1551361415-69c87624334f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 100
  }
];

type ViewState = 'listings' | 'detail' | 'compare';

const Index = () => {
  const [viewState, setViewState] = useState<ViewState>('listings');
  const [selectedListing, setSelectedListing] = useState<ListingProps | null>(null);
  const [compareListings, setCompareListings] = useState<ListingProps[]>([]);

  const handleViewListing = (id: string) => {
    const listing = mockListings.find(l => l.id === id);
    if (listing) {
      setSelectedListing(listing);
      setViewState('detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCompareListing = (id: string) => {
    const listing = mockListings.find(l => l.id === id);
    if (listing) {
      if (compareListings.some(l => l.id === id)) {
        // Remove if already in compare list
        setCompareListings(compareListings.filter(l => l.id !== id));
      } else if (compareListings.length < 3) {
        // Add if less than 3 listings
        setCompareListings([...compareListings, listing]);
      }
      
      if (compareListings.length > 0) {
        setViewState('compare');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleBackToListings = () => {
    setViewState('listings');
  };

  const renderContent = () => {
    switch (viewState) {
      case 'detail':
        return selectedListing ? (
          <ListingDetail listing={selectedListing} onBack={handleBackToListings} />
        ) : (
          <div>Loading...</div>
        );
      case 'compare':
        return (
          <CompareListings 
            listings={compareListings} 
            onBack={handleBackToListings} 
          />
        );
      default:
        return (
          <>
            <Hero />
            <LeaseGuide />
            <ListingsGrid 
              listings={mockListings} 
              onViewListing={handleViewListing}
              onCompareListing={handleCompareListing}
            />
            <FAQSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderContent()}
      <StickyBanner />
    </div>
  );
};

export default Index;
