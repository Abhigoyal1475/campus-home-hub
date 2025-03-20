
import React from 'react';
import { ListingProps } from './ListingCard';
import Hero from './Hero';
import LeaseGuide from './LeaseGuide';
import ListingsGrid from './ListingsGrid';
import FAQSection from './FAQSection';
import ListingDetail from './ListingDetail';
import CompareListings from './CompareListings';
import FeeBreakdown from './FeeBreakdown';

type ViewState = 'listings' | 'detail' | 'compare' | 'fees';

interface PageContentProps {
  viewState: ViewState;
  selectedListing: ListingProps | null;
  compareListings: ListingProps[];
  onBack: () => void;
  onViewFees: () => void;
  onViewListing: (id: string) => void;
  onCompareListing: (id: string) => void;
  listings: ListingProps[];
}

const PageContent: React.FC<PageContentProps> = ({
  viewState,
  selectedListing,
  compareListings,
  onBack,
  onViewFees,
  onViewListing,
  onCompareListing,
  listings
}) => {
  switch (viewState) {
    case 'detail':
      return selectedListing ? (
        <ListingDetail listing={selectedListing} onBack={onBack} />
      ) : (
        <div>Loading...</div>
      );
    case 'compare':
      return (
        <CompareListings 
          listings={compareListings} 
          onBack={onBack} 
        />
      );
    case 'fees':
      return (
        <FeeBreakdown onBack={onBack} />
      );
    default:
      return (
        <>
          <Hero onViewFees={onViewFees} />
          <LeaseGuide onViewFees={onViewFees} />
          <ListingsGrid 
            listings={listings} 
            onViewListing={onViewListing}
            onCompareListing={onCompareListing}
          />
          <FAQSection />
        </>
      );
  }
};

export default PageContent;
