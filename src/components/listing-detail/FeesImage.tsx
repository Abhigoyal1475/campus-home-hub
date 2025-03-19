
import React, { useState } from 'react';
import { Download, Eye } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../ui/collapsible';
import Button from '../ui-components/Button';
import Badge from '../ui-components/Badge';
import { cn } from '../../lib/utils';

interface FeesImageProps {
  className?: string;
}

const FeesImage: React.FC<FeesImageProps> = ({ className }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4">Complete Fee Breakdown</h2>
      
      <div className="relative">
        <Collapsible 
          open={isImageExpanded} 
          onOpenChange={setIsImageExpanded}
          className="w-full"
        >
          <div className="border border-border rounded-lg overflow-hidden mb-4">
            <CollapsibleTrigger asChild>
              <div className="cursor-pointer">
                <img 
                  src="/lovable-uploads/e5213118-b9dc-4047-8899-900af6bf8836.png" 
                  alt="Fee Breakdown Chart" 
                  className={cn(
                    "w-full h-auto transition-all duration-300",
                    isImageExpanded ? "" : "max-h-[200px] object-cover object-top"
                  )}
                />
                {!isImageExpanded && (
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent flex items-end justify-center pb-2">
                    <Badge variant="outline" className="bg-background/80">
                      <Eye size={14} className="mr-1" /> 
                      Click to view complete fee breakdown
                    </Badge>
                  </div>
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 bg-background">
                <p className="text-sm text-muted-foreground mb-3">
                  This chart shows all potential fees associated with renting an apartment. Remember that not all properties charge all these fees.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  leftIcon={<Download size={14} />}
                >
                  Download Fee Chart
                </Button>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
    </div>
  );
};

export default FeesImage;
