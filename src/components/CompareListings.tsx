
import React from 'react';
import { ListingProps } from './ListingCard';
import { Check, X, ArrowLeft } from 'lucide-react';
import Button from './ui-components/Button';
import Badge from './ui-components/Badge';
import { cn } from '../lib/utils';

interface CompareListingsProps {
  listings: ListingProps[];
  onBack: () => void;
  className?: string;
}

const CompareListings: React.FC<CompareListingsProps> = ({ listings, onBack, className }) => {
  const compareItems = [
    { category: 'Location', key: 'distance' },
    { category: 'Price', key: 'priceRange' },
    { category: 'Furnishing', key: 'isFurnished', isBoolean: true },
    { category: 'Rating', key: 'rating' },
    { category: 'Society', key: 'society' },
    { category: 'Discount', key: 'discount', prefix: '$' }
  ];

  const getAmenities = (listing: ListingProps) => {
    const allAmenities = ['Gym', 'WiFi', 'Parking', 'Garden', 'Study Room', 'Pool'];
    
    return allAmenities.map(amenity => ({
      name: amenity,
      included: listing.amenities.some(a => a.toLowerCase() === amenity.toLowerCase())
    }));
  };

  return (
    <div className={cn("glass-card rounded-xl p-6 shadow-soft border border-primary/5", className)}>
      <div className="flex items-center mb-8">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onBack}
          leftIcon={<ArrowLeft size={16} />}
          className="mr-4"
        >
          Back to listings
        </Button>
        <h2 className="text-2xl font-bold">Compare Properties</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr>
              <th className="p-2 text-left w-1/4"></th>
              {listings.map((listing) => (
                <th key={listing.id} className="p-2 w-1/4">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-full h-32 bg-cover bg-center rounded-lg mb-3"
                      style={{ backgroundImage: `url(${listing.imageUrl})` }}
                    />
                    <h3 className="font-medium text-lg text-center">{listing.title}</h3>
                    <Badge 
                      variant="success" 
                      className="mt-1" 
                    >
                      Save ${listing.discount}
                    </Badge>
                  </div>
                </th>
              ))}
              {/* Empty column if less than 3 listings */}
              {listings.length < 3 && (
                <th className="p-2 w-1/4 text-center">
                  <div className="border-2 border-dashed border-muted rounded-lg h-32 flex items-center justify-center mb-3">
                    <span className="text-muted-foreground">Add property to compare</span>
                  </div>
                </th>
              )}
            </tr>
          </thead>
          
          <tbody>
            {/* Basic details */}
            {compareItems.map((item) => (
              <tr key={item.key} className="border-t border-border">
                <td className="p-4 font-medium">{item.category}</td>
                {listings.map((listing) => {
                  // Type-safe way to access properties
                  let value: React.ReactNode;
                  if (item.key === 'distance') value = listing.distance;
                  else if (item.key === 'priceRange') value = listing.priceRange;
                  else if (item.key === 'isFurnished') value = listing.isFurnished;
                  else if (item.key === 'rating') value = listing.rating;
                  else if (item.key === 'society') value = listing.society;
                  else if (item.key === 'discount') value = listing.discount;
                  else value = 'N/A';
                  
                  return (
                    <td key={`${listing.id}-${item.key}`} className="p-4 text-center">
                      {item.isBoolean ? (
                        value ? <Check className="mx-auto text-primary" size={20} /> : <X className="mx-auto text-muted-foreground" size={20} />
                      ) : (
                        <span>{item.prefix || ''}{value}</span>
                      )}
                    </td>
                  );
                })}
                {listings.length < 3 && <td className="p-4"></td>}
              </tr>
            ))}
            
            {/* Amenities section */}
            <tr className="border-t border-border">
              <td colSpan={4} className="p-4">
                <h3 className="font-medium text-lg">Amenities</h3>
              </td>
            </tr>
            
            {['Gym', 'WiFi', 'Parking', 'Study Room', 'Pool'].map((amenity) => (
              <tr key={amenity} className="border-t border-border">
                <td className="p-4">{amenity}</td>
                {listings.map((listing) => (
                  <td key={`${listing.id}-${amenity}`} className="p-4 text-center">
                    {listing.amenities.some(a => a.toLowerCase() === amenity.toLowerCase()) ? (
                      <Check className="mx-auto text-primary" size={20} />
                    ) : (
                      <X className="mx-auto text-muted-foreground" size={20} />
                    )}
                  </td>
                ))}
                {listings.length < 3 && <td className="p-4"></td>}
              </tr>
            ))}
            
            {/* Action buttons */}
            <tr className="border-t border-border">
              <td className="p-4"></td>
              {listings.map((listing) => (
                <td key={`${listing.id}-action`} className="p-4 text-center">
                  <Button variant="primary" size="sm">
                    View Details
                  </Button>
                </td>
              ))}
              {listings.length < 3 && <td className="p-4"></td>}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompareListings;
