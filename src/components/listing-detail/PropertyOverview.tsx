
import React from 'react';
import { Check, Users } from 'lucide-react';
import { cn } from '../../lib/utils';

interface PropertyOverviewProps {
  description: string;
  isFurnished: boolean;
  popularWith?: string[];
  amenities: string[];
  society: string;
  className?: string;
}

const PropertyOverview: React.FC<PropertyOverviewProps> = ({
  description,
  isFurnished,
  popularWith,
  amenities,
  society,
  className
}) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4">Property Overview</h2>
      <p className="text-muted-foreground mb-4">
        {description} This {isFurnished ? 'furnished' : 'unfurnished'} property offers modern amenities and a convenient location for students.
      </p>
      
      {popularWith && popularWith.length > 0 && (
        <div className="mb-4 p-3 bg-primary/5 rounded-lg flex items-center">
          <Users size={18} className="text-primary mr-2 flex-shrink-0" />
          <div>
            <p className="font-medium">Popular with {popularWith.join(', ')}</p>
            <p className="text-sm text-muted-foreground">
              This property has a strong community of students from these backgrounds
            </p>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {amenities.map((amenity, index) => (
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
            {society.charAt(0)}
          </div>
          <div>
            <p className="font-medium">{society}</p>
            <p className="text-sm text-muted-foreground">Professional property management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyOverview;
