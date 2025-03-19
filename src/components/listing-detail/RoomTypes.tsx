
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
      
      <div className="space-y-4">
        {roomTypes.map((room, index) => (
          <Card key={index} className="border border-primary/10">
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center">
                <span>{room.type}</span>
                <span className="text-primary">{room.price}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-1">{room.size}</p>
              <p className="text-sm mb-2">{room.description}</p>
              {room.shared && room.perPerson && (
                <div className="text-sm text-primary font-medium">
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
