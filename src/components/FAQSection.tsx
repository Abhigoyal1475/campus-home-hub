
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

interface FAQSectionProps {
  className?: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-border">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <ChevronDown 
          className={cn(
            "transition-transform duration-300", 
            isOpen ? "rotate-180" : "rotate-0"
          )} 
          size={20} 
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC<FAQSectionProps> = ({ className }) => {
  const faqs = [
    {
      question: "How early should I start looking for student housing?",
      answer: "We recommend starting your search 3-6 months before your move-in date. The best properties typically get booked early, especially for fall semester starts."
    },
    {
      question: "What documents do I need for a housing application?",
      answer: "Typically, you'll need proof of identity (passport/ID), proof of enrollment at your university, proof of income or a guarantor, and references from previous landlords if available."
    },
    {
      question: "Do I need a guarantor as an international student?",
      answer: "Most properties require either a guarantor (who's typically a resident of the country) or a larger security deposit. Some may accept international guarantors or offer guarantor services for an additional fee."
    },
    {
      question: "How does the referral discount program work?",
      answer: "When you use our referral codes for setting up utilities or applying through our links, the providers pay us a commission. We pass a portion of this back to you as discounts on move-in costs or monthly bills."
    },
    {
      question: "What's typically included in the rent?",
      answer: "This varies by property. Some include utilities like water, trash, and sometimes internet, while others require separate payment for all utilities. Premium properties might include amenities like gym access or study rooms."
    },
    {
      question: "Can I get short-term leases for just one semester?",
      answer: "While most properties prefer annual leases, some offer 6-month or semester-length options. These typically come with a slightly higher monthly rate but provide more flexibility."
    }
  ];

  return (
    <section className={cn("py-16 bg-accent", className)}>
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Everything you need to know about student housing and lease setup
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8 border border-primary/5 shadow-soft">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Still have questions about finding the perfect student housing?
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button className="text-primary hover:text-primary/80 underline-animation">
                Join our WhatsApp group
              </button>
              <span className="text-muted-foreground">•</span>
              <button className="text-primary hover:text-primary/80 underline-animation">
                Contact our housing advisors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
