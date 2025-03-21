
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '../ui/dialog';
import { MessageCircle, Star } from 'lucide-react';
import Button from '../ui-components/Button';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { cn } from '../../lib/utils';
import { useToast } from '../../hooks/use-toast';

interface WriteReviewFormProps {
  onSubmitReview: (review: {
    name: string;
    rating: number;
    comment: string;
    date: string;
  }) => void;
  className?: string;
}

const WriteReviewForm: React.FC<WriteReviewFormProps> = ({ onSubmitReview, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      name: '',
      comment: '',
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    if (selectedRating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a rating between 1 and 5 stars",
        variant: "destructive",
      });
      return;
    }

    // Format the current date
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;

    onSubmitReview({
      name: data.name,
      rating: selectedRating,
      comment: data.comment,
      date: formattedDate,
    });

    // Reset form and close dialog
    form.reset();
    setSelectedRating(0);
    setIsOpen(false);

    toast({
      title: "Review submitted",
      description: "Thank you for sharing your experience!",
    });
  });

  return (
    <div className={className}>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="primary" 
            leftIcon={<MessageCircle size={16} />}
            className="mb-6"
          >
            Write a Review
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Share Your Experience</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="space-y-2">
                <FormLabel>Rating</FormLabel>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      className="p-1 focus:outline-none"
                      onClick={() => setSelectedRating(rating)}
                    >
                      <Star
                        size={24}
                        className={cn(
                          rating <= selectedRating ? "text-amber-500 fill-amber-500" : "text-gray-300"
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Review</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share your experience living here..."
                        className="min-h-[120px]"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button type="submit" variant="primary">
                  Submit Review
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WriteReviewForm;
