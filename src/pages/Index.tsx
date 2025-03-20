
import React from 'react';
import StickyBanner from '../components/StickyBanner';
import PageContent from '../components/PageContent';
import { useHomeState } from '../hooks/useHomeState';

const Index = () => {
  const {
    viewState,
    selectedListing,
    compareListings,
    handleViewListing,
    handleCompareListing,
    handleBackToListings,
    handleViewFees,
    listings
  } = useHomeState();

  return (
    <div className="min-h-screen bg-background">
      <PageContent
        viewState={viewState}
        selectedListing={selectedListing}
        compareListings={compareListings}
        onBack={handleBackToListings}
        onViewFees={handleViewFees}
        onViewListing={handleViewListing}
        onCompareListing={handleCompareListing}
        listings={listings}
      />
      <StickyBanner />
    </div>
  );
};

export default Index;
