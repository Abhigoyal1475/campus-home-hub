
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Accordion } from '../ui/accordion';

interface FeeCategoryProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const FeeCategory: React.FC<FeeCategoryProps> = ({ title, icon, children }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {children}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FeeCategory;
