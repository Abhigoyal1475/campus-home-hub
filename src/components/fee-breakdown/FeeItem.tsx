
import React from 'react';
import { Gift, Info } from 'lucide-react';
import Badge from '../ui-components/Badge';
import { AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';

interface FeeItemProps {
  id: string;
  title: string;
  amount: string;
  description: string;
  discount?: string;
  note?: {
    type: 'info' | 'primary';
    text: string;
  };
}

const FeeItem: React.FC<FeeItemProps> = ({ id, title, amount, description, discount, note }) => {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger className="hover:no-underline">
        <div className="flex justify-between items-center w-full pr-4">
          <span>{title}</span>
          <Badge variant="outline" className="ml-2">{amount}</Badge>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <p className="text-sm text-muted-foreground mb-2">
          {description}
        </p>
        {note && (
          <div className={`text-sm flex items-center ${note.type === 'info' ? 'text-amber-600' : 'text-primary font-medium'} ${discount ? 'mt-2' : ''}`}>
            {note.type === 'info' ? <Info size={14} className="mr-1" /> : <Gift size={14} className="mr-1" />}
            <span>{note.text}</span>
          </div>
        )}
        {discount && (
          <div className="text-sm flex items-center text-primary font-medium mt-2">
            <Gift size={14} className="mr-1" />
            <span>{discount}</span>
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FeeItem;
