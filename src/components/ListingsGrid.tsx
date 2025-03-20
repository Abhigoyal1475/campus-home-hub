
import React from 'react';
import { ListingProps } from './ListingCard';
import ListingCard from './ListingCard';
import { cn } from '../lib/utils';

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
  // Generate random image URLs for each listing
  const listingsWithImages = listings.map(listing => {
    // Create 3-5 images for each listing
    const numImages = Math.floor(Math.random() * 3) + 3; // 3 to 5 images
    const images = [listing.imageUrl];
    
    // Add additional stock images
    const imageUrls = [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1551361415-69c87624334f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ];
    
    for (let i = 1; i < numImages; i++) {
      // Get a random image that's not already in our array
      let randomImage;
      do {
        randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
      } while (images.includes(randomImage));
      
      images.push(randomImage);
    }
    
    return {
      ...listing,
      images
    };
  });

  return (
    <section className={cn("py-16", className)}>
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Student Housing Options</h2>
            <p className="text-muted-foreground">
              Find your perfect place with exclusive student deals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listingsWithImages.map((listing, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default ListingsGrid;
