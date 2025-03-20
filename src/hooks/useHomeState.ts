
import { useState } from 'react';
import { ListingProps } from '../components/ListingCard';
import { mockListings } from '../data/mockListings';

export type ViewState = 'listings' | 'detail' | 'compare' | 'fees';

export const useHomeState = () => {
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

  const handleViewFees = () => {
    setViewState('fees');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    viewState,
    selectedListing,
    compareListings,
    handleViewListing,
    handleCompareListing,
    handleBackToListings,
    handleViewFees,
    listings: mockListings
  };
};
