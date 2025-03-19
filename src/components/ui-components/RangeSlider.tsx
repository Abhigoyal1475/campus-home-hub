
import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  formatValue?: (value: number) => string;
  className?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  formatValue = (value) => `$${value}`,
  className
}) => {
  const [localValues, setLocalValues] = useState<[number, number]>(value);
  
  useEffect(() => {
    setLocalValues(value);
  }, [value]);
  
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), localValues[1] - step);
    const newValues: [number, number] = [newMin, localValues[1]];
    setLocalValues(newValues);
    onChange(newValues);
  };
  
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), localValues[0] + step);
    const newValues: [number, number] = [localValues[0], newMax];
    setLocalValues(newValues);
    onChange(newValues);
  };
  
  // Calculate percentage for range track styling
  const minPercent = ((localValues[0] - min) / (max - min)) * 100;
  const maxPercent = ((localValues[1] - min) / (max - min)) * 100;
  
  const trackStyle = {
    background: `linear-gradient(to right, 
      var(--tw-gradient-from) 0%, 
      var(--tw-gradient-from) ${minPercent}%, 
      var(--tw-gradient-to) ${minPercent}%, 
      var(--tw-gradient-to) ${maxPercent}%, 
      var(--tw-gradient-from) ${maxPercent}%, 
      var(--tw-gradient-from) 100%)`
  };

  return (
    <div className={cn("w-full px-2", className)}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          {formatValue(localValues[0])}
        </span>
        <span className="text-sm font-medium text-muted-foreground">
          {formatValue(localValues[1])}
        </span>
      </div>
      
      <div className="relative h-6">
        <div 
          className="absolute w-full top-1/2 h-1 -translate-y-1/2 rounded-full from-muted to-primary" 
          style={trackStyle}
        />
        
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValues[0]}
          onChange={handleMinChange}
          className="absolute w-full h-6 appearance-none bg-transparent pointer-events-none"
        />
        
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValues[1]}
          onChange={handleMaxChange}
          className="absolute w-full h-6 appearance-none bg-transparent pointer-events-none"
        />
      </div>
    </div>
  );
};

export default RangeSlider;
