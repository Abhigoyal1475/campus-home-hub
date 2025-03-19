
import React, { useState } from 'react';
import { Building, MapPin, DollarSign, Dog, Clock } from 'lucide-react';
import RangeSlider from './ui-components/RangeSlider';
import Button from './ui-components/Button';
import { cn } from '../lib/utils';

interface FilterBarProps {
  className?: string;
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  priceRange: [number, number];
  distance: number;
  furnished: boolean;
  petFriendly: boolean;
  leaseType: 'any' | 'short' | 'long';
}

const FilterBar: React.FC<FilterBarProps> = ({ className, onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [500, 2000],
    distance: 10,
    furnished: false,
    petFriendly: false,
    leaseType: 'any'
  });

  const handleFilterChange = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className={cn("glass-card rounded-xl p-4 md:p-6 shadow-soft border border-primary/5 animate-fade-in", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center">
            <DollarSign size={16} className="mr-1 text-primary" />
            Price Range
          </label>
          <RangeSlider
            min={200}
            max={3000}
            step={50}
            value={filters.priceRange}
            onChange={(value) => handleFilterChange('priceRange', value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center">
            <MapPin size={16} className="mr-1 text-primary" />
            Max Distance
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={filters.distance}
              onChange={(e) => handleFilterChange('distance', parseInt(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm text-muted-foreground w-12 text-right">{filters.distance} mi</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center">
            <Building size={16} className="mr-1 text-primary" />
            Furnished
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={filters.furnished}
              onChange={(e) => handleFilterChange('furnished', e.target.checked)}
            />
            <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            <span className="ml-3 text-sm font-medium text-muted-foreground">
              {filters.furnished ? 'Yes' : 'Any'}
            </span>
          </label>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center">
            <Dog size={16} className="mr-1 text-primary" />
            Pet Friendly
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={filters.petFriendly}
              onChange={(e) => handleFilterChange('petFriendly', e.target.checked)}
            />
            <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            <span className="ml-3 text-sm font-medium text-muted-foreground">
              {filters.petFriendly ? 'Yes' : 'Any'}
            </span>
          </label>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center">
            <Clock size={16} className="mr-1 text-primary" />
            Lease Type
          </label>
          <div className="flex space-x-2">
            {[
              { value: 'any', label: 'Any' },
              { value: 'short', label: 'Short' },
              { value: 'long', label: 'Long' }
            ].map((option) => (
              <button
                key={option.value}
                className={cn(
                  "px-3 py-1 text-sm rounded-md transition-colors",
                  filters.leaseType === option.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
                onClick={() => handleFilterChange('leaseType', option.value as any)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
