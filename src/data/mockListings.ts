
import { ListingProps } from '../components/ListingCard';

// Mock data for listings with focus on 8 specific societies
export const mockListings: ListingProps[] = [
  {
    id: '1',
    title: 'Stratford House',
    society: 'Stratford Community',
    distance: '5 min walk',
    priceRange: '$750-900',
    isFurnished: true,
    amenities: ['Gym', 'WiFi', 'Study Room'],
    rating: 4.5,
    reviewCount: 42,
    promoTag: 'Save $100 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 100,
    popularWith: ['Indian Students', 'Grad Students']
  },
  {
    id: '2',
    title: 'Scotland Yard',
    society: 'Premium Student Living',
    distance: '10 min bus',
    priceRange: '$800-950',
    isFurnished: true,
    amenities: ['Parking', 'Gym', 'Pool', 'WiFi'],
    rating: 4.2,
    reviewCount: 38,
    promoTag: 'Save $150 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 150,
    popularWith: ['Indian Students', 'International Students']
  },
  {
    id: '3',
    title: 'Holly Hall',
    society: 'Campus Living',
    distance: '7 min walk',
    priceRange: '$700-850',
    isFurnished: false,
    amenities: ['WiFi', 'Study Room', 'Garden'],
    rating: 4.0,
    reviewCount: 29,
    promoTag: 'Save $75 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 75,
    popularWith: ['Indian Students', 'Undergrads']
  },
  {
    id: '4',
    title: 'Med Center Apartments',
    society: 'University Health',
    distance: '3 min walk',
    priceRange: '$850-1000',
    isFurnished: true,
    amenities: ['Gym', 'Pool', 'Parking', 'WiFi', 'Garden'],
    rating: 4.7,
    reviewCount: 56,
    promoTag: 'Save $200 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 200,
    popularWith: ['Indian Students', 'Medical Students']
  },
  {
    id: '5',
    title: 'The Pavilion at the Medical Center',
    society: 'Metro Student Living',
    distance: '8 min bus',
    priceRange: '$750-900',
    isFurnished: false,
    amenities: ['WiFi', 'Parking', 'Study Room'],
    rating: 4.1,
    reviewCount: 32,
    promoTag: 'Save $125 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 125,
    popularWith: ['Indian Students', 'Healthcare Professionals']
  },
  {
    id: '6',
    title: 'Domain at Kirby',
    society: 'University Village',
    distance: '12 min walk',
    priceRange: '$800-950',
    isFurnished: true,
    amenities: ['WiFi', 'Garden', 'Study Room', 'Gym'],
    rating: 4.3,
    reviewCount: 38,
    promoTag: 'Save $100 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1551361415-69c87624334f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 100,
    popularWith: ['Indian Students', 'Working Professionals']
  },
  {
    id: '7',
    title: 'The Lanesborough Apartments',
    society: 'Luxury Student Housing',
    distance: '15 min bus',
    priceRange: '$900-1100',
    isFurnished: true,
    amenities: ['Pool', 'Gym', 'WiFi', 'Parking', 'Study Room'],
    rating: 4.6,
    reviewCount: 45,
    promoTag: 'Save $175 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 175,
    popularWith: ['Indian Students', 'Grad Students', 'Families']
  },
  {
    id: '8',
    title: 'Broadstone Toscano',
    society: 'Premium Housing',
    distance: '10 min bus',
    priceRange: '$850-1050',
    isFurnished: true,
    amenities: ['Pool', 'Gym', 'WiFi', 'Garden', 'Parking'],
    rating: 4.4,
    reviewCount: 51,
    promoTag: 'Save $150 on this lease with our referral!',
    imageUrl: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    discount: 150,
    popularWith: ['Indian Students', 'Tech Professionals']
  }
];
