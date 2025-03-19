
import React, { useState } from 'react';
import { MapPin, Star, DollarSign, Building, Wifi, Dumbbell, Trees, Car, Tag } from 'lucide-react';
import Badge from './ui-components/Badge';
import Button from './ui-components/Button';
import { cn } from '../lib/utils';

export interface ListingProps {
  id: string;
  title: string;
  society: string;
  distance: string;
  priceRange: string;
  isFurnished: boolean;
  amenities: string[];
  rating: number;
  reviewCount: number;
  promoTag: string;
  imageUrl: string;
  discount: number;
  className?: string;
  onCompare?: (id: string) => void;
  onView?: (id: string) => void;
}

const ListingCard: React.FC<ListingProps> = ({
  id,
  title,
  society,
  distance,
  priceRange,
  isFurnished,
  amenities,
  rating,
  reviewCount,
  promoTag,
  imageUrl,
  discount,
  className,
  onCompare,
  onView
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'gym': return <Dumbbell size={14} />;
      case 'wifi': return <Wifi size={14} />;
      case 'parking': return <Car size={14} />;
      case 'garden': return <Trees size={14} />;
      default: return <Building size={14} />;
    }
  };

  return (
    <div 
      className={cn(
        "group bg-white rounded-xl overflow-hidden shadow-soft border border-primary/5 transition-all duration-300 hover:shadow-glass",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with zoom effect */}
      <div className="relative overflow-hidden h-56">
        <div className={cn(
          "absolute inset-0 bg-cover bg-center transition-transform duration-700",
          isHovered ? "scale-105" : "scale-100"
        )}
        style={{ backgroundImage: `url(${imageUrl})` }} />
        
        {/* Promo tag */}
        <div className="absolute top-4 left-4 z-10">
          <Badge 
            variant="success" 
            className="px-3 py-1 font-medium" 
            icon={<Tag size={14} />}
          >
            Save ${discount} with referral
          </Badge>
        </div>
        
        {/* Rating badge */}
        <div className="absolute top-4 right-4 z-10">
          <Badge 
            variant="default" 
            className="px-3 py-1 bg-white text-foreground font-medium" 
            icon={<Star size={14} className="text-amber-500" />}
          >
            {rating} ({reviewCount})
          </Badge>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-muted-foreground text-sm">{society}</p>
          </div>
          <div className="flex items-center text-primary font-medium">
            <DollarSign size={16} className="flex-shrink-0" />
            <span>{priceRange}</span>
          </div>
        </div>
        
        {/* Details */}
        <div className="flex items-center mb-4">
          <div className="flex items-center text-muted-foreground text-sm mr-4">
            <MapPin size={14} className="mr-1 flex-shrink-0" />
            <span>{distance}</span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <Building size={14} className="mr-1 flex-shrink-0" />
            <span>{isFurnished ? 'Furnished' : 'Unfurnished'}</span>
          </div>
        </div>
        
        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {amenities.map((amenity, index) => (
            <Badge key={index} variant="outline" icon={getAmenityIcon(amenity)}>
              {amenity}
            </Badge>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onCompare?.(id)}
          >
            Compare
          </Button>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => onView?.(id)}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
