export interface ReviewItem {
  id: string;
  author: string;
  rating: number; // 1-5
  text: string;
  relativeTime?: string;
}

export interface LocationReviews {
  locationId: string; // matches locations.id
  averageRating: number;
  totalReviews: number;
  reviews: ReviewItem[];
}

// Placeholder data. Replace with live Google Places API results when available.
export const locationReviews: LocationReviews[] = [
  {
    locationId: "trowbridge", // The Lamb On the Strand
    averageRating: 4.6,
    totalReviews: 218,
    reviews: [
      {
        id: "t1",
        author: "Emily R",
        rating: 5,
        text: "Amazing pizza and lovely pub setting. Service was quick and friendly.",
        relativeTime: "2 weeks ago",
      },
      {
        id: "t2",
        author: "James P",
        rating: 4,
        text: "Great crust and toppings. Will be back again soon!",
        relativeTime: "1 month ago",
      },
    ],
  },
  {
    locationId: "salisbury",
    averageRating: 4.5,
    totalReviews: 156,
    reviews: [
      {
        id: "s1",
        author: "Laura K",
        rating: 5,
        text: "Best pizza in Salisbury. Cozy atmosphere and excellent staff.",
        relativeTime: "3 weeks ago",
      },
      {
        id: "s2",
        author: "Ahmed Z",
        rating: 4,
        text: "Tasty and fresh. The margherita was perfect.",
        relativeTime: "1 month ago",
      },
    ],
  },
  {
    locationId: "westbury",
    averageRating: 4.4,
    totalReviews: 98,
    reviews: [
      {
        id: "w1",
        author: "Sophie M",
        rating: 5,
        text: "Lovely team and great value. Highly recommend the truffle special!",
        relativeTime: "2 months ago",
      },
      {
        id: "w2",
        author: "Ben H",
        rating: 4,
        text: "Delicious pizzas and fast service.",
        relativeTime: "3 weeks ago",
      },
    ],
  },
];


