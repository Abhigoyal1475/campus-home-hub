
import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import Badge from '../ui-components/Badge';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../ui/collapsible';

const FeeBreakdownImage = () => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <div className="mb-10">
      <div className="relative">
        <Collapsible 
          open={isImageExpanded} 
          onOpenChange={setIsImageExpanded}
          className="w-full"
        >
          <div className="border border-border rounded-lg overflow-hidden mb-2">
            <CollapsibleTrigger asChild>
              <div className="cursor-pointer">
                <img 
                  src="/lovable-uploads/e5213118-b9dc-4047-8899-900af6bf8836.png" 
                  alt="Fee Breakdown Chart" 
                  className={cn(
                    "w-full h-auto transition-all duration-300",
                    isImageExpanded ? "" : "max-h-[300px] object-cover object-top"
                  )}
                />
                {!isImageExpanded && (
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent flex items-end justify-center pb-2">
                    <Badge variant="outline" className="bg-background">
                      Click to expand full chart
                    </Badge>
                  </div>
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 bg-background">
                <p className="text-sm text-muted-foreground">
                  This chart shows all potential fees associated with renting an apartment. Remember that not all properties charge all these fees.
                </p>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
    </div>
  );
};

export default FeeBreakdownImage;
