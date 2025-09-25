export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  openingHours: {
    monday?: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  orderUrl?: string;
  bookingUrl?: string;
  deliveryPartners: {
    uberEats?: string;
    justEat?: string;
    deliveroo?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  features: string[];
  iframes: {
    order: string;
    booking: string;
    feedback: string;
    map: string;
  };
}

export const locations: Location[] = [
  {
    id: "westbury",
    name: "Zia Pizza – Westbury",
    address: "15 Palomino Pl, Westbury BA13 3SD, United Kingdom",
    phone: "+44 1373 865271",
    email: "westbury@ziapizza.com",
    openingHours: {
      monday: "Closed",
      tuesday: "11:30 AM – 11:00 PM",
      wednesday: "11:30 AM – 11:00 PM",
      thursday: "11:30 AM – 11:00 PM",
      friday: "11:30 AM – 11:00 PM",
      saturday: "11:30 AM – 11:00 PM",
      sunday: "11:30 AM – 11:00 PM"
    },
    orderUrl: "/order/westbury",
    bookingUrl: "/book/westbury",
    deliveryPartners: {
      uberEats: "https://ubereats.com/gb/westbury/zia-pizza",
      justEat: "https://justeat.co.uk/restaurants-zia-pizza-westbury",
      deliveroo: "https://deliveroo.co.uk/menu/westbury/zia-pizza"
    },
    coordinates: {
      lat: 51.2604,
      lng: -2.1875
    },
    features: ["Dine-In", "Takeaway", "Delivery", "Collection"],
    iframes: {
      order: "https://www.food-order.net/index.php/web_orders/home/SUdQS1lF?uid=67b70649c7141",
      booking: "https://www.eposhybrid.uk/index.php/online-table-booking/SUdQS1lF",
      feedback: "https://www.eposhybrid.uk/customer_feedback/reviews/SUdQS1lF",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.147041088998!2d-2.203340523395101!3d51.253201971756575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873d410217ac42b%3A0xb7fde4acaed8017c!2sZia%20Pizza%20Westbury!5e0!3m2!1sen!2sin!4v1758469944227!5m2!1sen!2sin"
    }
  },
  {
    id: "salisbury",
    name: "Zia Pizza – Salisbury",
    address: "46 Silver St, Salisbury, SP1 2NE, United Kingdom",
    phone: "01722433829",
    email: "salisbury@ziapizza.com",
    openingHours: {
      monday: "Closed",
      tuesday: "11:30 AM – 11:00 PM",
      wednesday: "11:30 AM – 11:00 PM",
      thursday: "11:30 AM – 11:00 PM",
      friday: "11:30 AM – 11:00 PM",
      saturday: "11:30 AM – 11:00 PM",
      sunday: "11:30 AM – 11:00 PM"
    },
    orderUrl: "/order/salisbury",
    bookingUrl: "/book/salisbury",
    deliveryPartners: {
      uberEats: "https://ubereats.com/gb/salisbury/zia-pizza",
      justEat: "https://justeat.co.uk/restaurants-zia-pizza-salisbury",
      deliveroo: "https://deliveroo.co.uk/menu/salisbury/zia-pizza"
    },
    coordinates: {
      lat: 51.0693,
      lng: -1.7944
    },
    features: ["Dine-In", "Takeaway", "Delivery", "Collection"],
    iframes: {
      order: "https://www.food-order.net/index.php/web_orders/home/RENMV0lX?uid=6050d89f55911",
      booking: "https://www.eposhybrid.uk/index.php/online-table-booking/RENMV0lX",
      feedback: "https://www.eposhybrid.uk/customer_feedback/reviews/RENMV0lX",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.1573861280317!2d-1.7994527233688205!3d51.06864467171685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873eb56784b412d%3A0x973dfebeef9e490b!2sZia%20Pizza!5e0!3m2!1sen!2sin!4v1758470013827!5m2!1sen!2sin"
    }
  },
  {
    id: "trowbridge",
    name: "Zia Pizza – The Lamb On the Strand",
    address: "99 The Strand, Trowbridge, BA14 6LL, United Kingdom",
    phone: "+44 13805 03525",
    email: "semington@ziapizza.com",
    openingHours: {
      monday: "11:30 AM – 11:00 PM",
      tuesday: "11:30 AM – 11:00 PM",
      wednesday: "11:30 AM – 11:00 PM",
      thursday: "11:30 AM – 11:00 PM",
      friday: "11:30 AM – 11:00 PM",
      saturday: "11:30 AM – 11:00 PM",
      sunday: "11:30 AM – 11:00 PM"
    },
    orderUrl: "/order/trowbridge",
    bookingUrl: "/book/trowbridge",
    deliveryPartners: {
      uberEats: "https://ubereats.com/gb/trowbridge/zia-pizza",
      justEat: "https://justeat.co.uk/restaurants-zia-pizza-trowbridge",
      deliveroo: "https://deliveroo.co.uk/menu/trowbridge/zia-pizza"
    },
    coordinates: {
      lat: 51.3188,
      lng: -2.2081
    },
    features: ["Dine-In", "Takeaway", "Delivery", "Collection"],
    iframes: {
      order: "https://www.food-order.net/index.php/web_orders/home/SUhBQkJW?uid=67f960915bee4",
      booking: "https://www.eposhybrid.uk/index.php/online-table-booking/SUhBQkJW",
      feedback: "https://www.food-order.net/index.php/web_orders/home/SUhBQkJW?uid=67f960915bee4",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.6148827602515!2d-2.123463809839446!3d51.33660299899893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48717d627f7396ad%3A0x7511c76a5d338103!2sThe%20Lamb%20on%20the%20Strand%20by%20Zia%20Pizza!5e0!3m2!1sen!2sin!4v1758469977694!5m2!1sen!2sin"
    }
  }
];

export interface Offer {
  id: string;
  title: string;
  description: string;
  validDays?: string[];
  validTimes?: string;
  locations?: string[];
  isActive: boolean;
  priority: number;
}

export const offers: Offer[] = [
  // Monday - Meat Lovers Monday
  {
    id: "monday-meat-lovers",
    title: "Meat Lovers Monday",
    description: "50% off all meat pizzas - Pepperoni, BBQ Chicken, Supreme & more!",
    validDays: ["Monday"],
    locations: ["westbury", "salisbury", "trowbridge"],
    isActive: true,
    priority: 1
  },
  // Tuesday - Two for Tuesday
  {
    id: "tuesday-bogo",
    title: "Two for Tuesday",
    description: "Buy one pizza, get one 50% off every Tuesday",
    validDays: ["Tuesday"],
    locations: ["westbury", "salisbury", "trowbridge"],
    isActive: true,
    priority: 2
  },
  // Wednesday - Wine & Dine Wednesday
  {
    id: "wednesday-buffet",
    title: "Wine & Dine Wednesday",
    description: "All-you-can-eat pizza buffet with salad bar - £15 per person",
    validDays: ["Wednesday"],
    validTimes: "12:00 PM - 3:00 PM",
    locations: ["westbury", "salisbury"],
    isActive: true,
    priority: 3
  },
  // Thursday - Thirsty Thursday
  {
    id: "thursday-drinks",
    title: "Thirsty Thursday",
    description: "Free soft drinks with any large pizza order",
    validDays: ["Thursday"],
    locations: ["westbury", "salisbury", "trowbridge"],
    isActive: true,
    priority: 4
  },
  // Friday - Fish Friday
  {
    id: "friday-fish",
    title: "Fish Friday",
    description: "Special seafood pizzas - Tuna & Sweetcorn, Anchovy & Olive - 30% off",
    validDays: ["Friday"],
    locations: ["westbury", "salisbury", "trowbridge"],
    isActive: true,
    priority: 5
  },
  // Saturday - Student Saturday
  {
    id: "saturday-student",
    title: "Student Saturday",
    description: "20% off for students with valid ID - Show your student card!",
    validDays: ["Saturday"],
    locations: ["westbury", "salisbury", "trowbridge"],
    isActive: true,
    priority: 6
  },
  // Sunday - Family Sunday
  {
    id: "sunday-family",
    title: "Family Sunday",
    description: "2 large pizzas, garlic bread, side salad & 1.5L drink - £29.99",
    validDays: ["Sunday"],
    locations: ["westbury", "salisbury", "trowbridge"],
    isActive: true,
    priority: 7
  },
  // Daily offers (available every day)
  {
    id: "lunch-special",
    title: "Lunch Special",
    description: "Personal pizza + side + drink - £8.99 (11:30 AM - 3:00 PM)",
    validTimes: "11:30 AM - 3:00 PM",
    locations: ["westbury", "salisbury", "trowbridge"],
    isActive: true,
    priority: 8
  },
  {
    id: "late-night-deal",
    title: "Late Night Deal",
    description: "Any medium pizza for £12.99 (9:00 PM - 11:00 PM)",
    validTimes: "9:00 PM - 11:00 PM",
    locations: ["westbury", "salisbury", "trowbridge"],
    isActive: true,
    priority: 9
  }
];