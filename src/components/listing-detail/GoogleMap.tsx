
import React from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '../../lib/utils';

interface GoogleMapProps {
  address: string;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address, className }) => {
  // URL encode the address for Google Maps
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBmkUAEPP0r4GXwv9HwVePau4r7YW2Wnl4&q=${encodedAddress}`;
  
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <MapPin size={20} className="text-primary mr-2" />
        Location
      </h2>
      <div className="overflow-hidden rounded-xl border border-primary/10 h-[300px] w-full">
        <iframe
          title="Google Maps Location"
          className="h-full w-full"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapSrc}
        ></iframe>
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        {address}
      </p>
    </div>
  );
};

export default GoogleMap;
