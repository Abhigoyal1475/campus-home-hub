
import React from 'react';
import { ShoppingBag, Users, Info, Bus } from 'lucide-react';
import { cn } from '../../lib/utils';

interface NearbyPlace {
  name: string;
  distance: string;
  type: string;
}

interface NearbyPlacesProps {
  nearbyPlaces: NearbyPlace[];
  className?: string;
}

const NearbyPlaces: React.FC<NearbyPlacesProps> = ({ nearbyPlaces, className }) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <ShoppingBag size={20} className="text-primary mr-2" />
        Nearby Essentials
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {nearbyPlaces.map((place, index) => (
          <div key={index} className="flex items-center p-3 border border-border rounded-lg">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-3">
              {place.type === 'food' && <Users size={18} />}
              {place.type === 'shopping' && <ShoppingBag size={18} />}
              {place.type === 'grocery' && <ShoppingBag size={18} />}
              {place.type === 'health' && <Info size={18} />}
              {place.type === 'transportation' && <Bus size={18} />}
            </div>
            <div>
              <h4 className="font-medium">{place.name}</h4>
              <p className="text-sm text-muted-foreground">{place.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyPlaces;
