
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

interface RoomType {
  type: string;
  price: string;
  size: string;
  description: string;
  shared: boolean;
  perPerson?: string;
}

interface RoomTypesProps {
  roomTypes: RoomType[];
  className?: string;
}

const RoomTypes: React.FC<RoomTypesProps> = ({ roomTypes, className }) => {
  return (
    <div className={className}>
      <h3 className="text-xl font-bold mb-4">Available Room Types</h3>
      
      <div className="space-y-3">
        {roomTypes.map((room, index) => (
          <Card key={index} className="border border-primary/10">
            <CardHeader className="pb-2 p-3 md:p-4">
              <CardTitle className="flex justify-between items-center text-base md:text-lg">
                <span>{room.type}</span>
                <span className="text-primary">{room.price}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 md:p-4">
              <p className="text-xs md:text-sm text-muted-foreground mb-1">{room.size}</p>
              <p className="text-xs md:text-sm mb-2">{room.description}</p>
              {room.shared && room.perPerson && (
                <div className="text-xs md:text-sm text-primary font-medium">
                  Shared option: {room.perPerson}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoomTypes;
