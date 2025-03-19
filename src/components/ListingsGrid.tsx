
import React, { useState } from 'react';
import { ListingProps } from './ListingCard';
import ListingCard from './ListingCard';
import FilterBar, { FilterState } from './FilterBar';
import { cn } from '../lib/utils';
import { Search } from 'lucide-react';

interface ListingsGridProps {
  listings: ListingProps[];
  onViewListing?: (id: string) => void;
  onCompareListing?: (id: string) => void;
  className?: string;
}

const ListingsGrid: React.FC<ListingsGridProps> = ({ 
  listings, 
  onViewListing, 
  onCompareListing, 
  className 
}) => {
  const [filteredListings, setFilteredListings] = useState<ListingProps[]>(listings);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (filters: FilterState) => {
    const filtered = listings.filter(listing => {
      // Extract numeric price from range (e.g. "$500-700" -> [500, 700])
      const priceMatch = listing.priceRange.match(/\$(\d+)(?:-(\d+))?/);
      const minPrice = priceMatch ? parseInt(priceMatch[1]) : 0;
      const maxPrice = priceMatch && priceMatch[2] ? parseInt(priceMatch[2]) : minPrice;
      
      // Extract numeric distance (e.g. "5 min walk" -> 5)
      const distanceMatch = listing.distance.match(/(\d+)/);
      const distance = distanceMatch ? parseInt(distanceMatch[1]) : 0;
      
      // Check if price range overlaps
      const priceOverlaps = (
        (minPrice <= filters.priceRange[1] && maxPrice >= filters.priceRange[0]) ||
        (minPrice >= filters.priceRange[0] && minPrice <= filters.priceRange[1])
      );
      
      // Check distance
      const distanceMatches = distance <= filters.distance;
      
      // Check furnished status
      const furnishedMatches = !filters.furnished || listing.isFurnished === filters.furnished;
      
      // Check pet friendly (simplified - assuming all are pet friendly for demo)
      const petFriendlyMatches = !filters.petFriendly || true;
      
      // Check lease type (simplified - assuming all match for demo)
      const leaseTypeMatches = filters.leaseType === 'any' || true;
      
      return priceOverlaps && distanceMatches && furnishedMatches && petFriendlyMatches && leaseTypeMatches;
    });

    // Apply search filter if there's a search term
    const searchFiltered = searchTerm ? 
      filtered.filter(listing => 
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        listing.society.toLowerCase().includes(searchTerm.toLowerCase())
      ) : 
      filtered;

    setFilteredListings(searchFiltered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // Re-filter with current filters but also apply search
    handleFilterChange({
      priceRange: [500, 2000],
      distance: 10,
      furnished: false,
      petFriendly: false,
      leaseType: 'any'
    });
  };

  return (
    <section className={cn("py-16", className)}>
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Student Housing Options</h2>
              <p className="text-muted-foreground">
                Find your perfect place with exclusive student deals
              </p>
            </div>
            
            <div className="w-full md:w-auto mt-4 md:mt-0 relative">
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
            </div>
          </div>
          
          <FilterBar onFilterChange={handleFilterChange} className="mb-10" />
          
          {filteredListings.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No listings match your criteria. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((listing, index) => (
                <ListingCard
                  key={listing.id}
                  {...listing}
                  onCompare={() => onCompareListing?.(listing.id)}
                  onView={() => onViewListing?.(listing.id)}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ListingsGrid;
