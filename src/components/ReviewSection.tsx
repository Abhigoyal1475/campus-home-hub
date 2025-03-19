
import React from 'react';
import { Star, User, ThumbsUp, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  helpful: number;
  isVerified?: boolean;
}

interface ReviewSectionProps {
  reviews: Review[];
  className?: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews, className }) => {
  return (
    <div className={cn("space-y-6", className)}>
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Star size={20} className="text-amber-500 mr-2" />
        Student Reviews
      </h2>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                  <User size={18} />
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="font-medium">{review.name}</span>
                    {review.isVerified && (
                      <span className="ml-2 text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                        Verified Resident
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar size={12} className="mr-1" />
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < review.rating ? "text-amber-500" : "text-gray-300"}
                    fill={i < review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
            
            <p className="text-sm mb-3">{review.comment}</p>
            
            <div className="flex items-center text-xs text-muted-foreground">
              <ThumbsUp size={12} className="mr-1" />
              <span>{review.helpful} found this helpful</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
