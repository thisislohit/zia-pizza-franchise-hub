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
  socialMedia?: {
    facebook?: string;
    instagram?: string;
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
    id: "salisbury",
    name: "Zia Pizza – Salisbury",
    address: "46 Silver St, Salisbury, SP1 2NE, United Kingdom",
    phone: "01722433829",
    email: "salisbury@ziapizza.com",
    openingHours: {
      monday: "12:30 PM – 10:30 PM",
      tuesday: "12:30 PM – 10:30 PM",
      wednesday: "12:30 PM – 10:30 PM",
      thursday: "12:30 PM – 10:30 PM",
      friday: "12:30 PM – 10:30 PM",
      saturday: "12:30 PM – 10:30 PM",
      sunday: "12:30 PM – 10:30 PM"
    },
    orderUrl: "/order/salisbury",
    bookingUrl: "/book/salisbury",
    deliveryPartners: {
      uberEats: "https://www.ubereats.com/gb/store/zia-pizza-salisbury/ZKw0-eTvTOuXhb6bwZkLyg?srsltid=AfmBOoptJayJ3W-g7f48y5Hbr2-FtXHNVJT7PA4pcfGAM_2rmHzRlojt",
      justEat: "https://www.just-eat.co.uk/restaurants-zia-pizza-salisbury/menu",
      deliveroo: "https://deliveroo.co.uk/menu/Salisbury/salisbury/zia-pizza-salisbury-46-silver-street?day=today"
    },
    socialMedia: {
      facebook: "https://www.facebook.com/share/19tVr2C1Gy/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/ziapizza.salisbury?igsh=dGdzcnh3Mm96M2c="
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
    id: "westbury",
    name: "Zia Pizza Express Westbury",
    address: "15 Palomino Pl, Westbury BA13 3SD, United Kingdom",
    phone: "+44 1373 865271",
    email: "westbury@ziapizza.com",
    openingHours: {
      monday: "11:30 AM – 11:00 PM",
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
      uberEats: "https://www.ubereats.com/gb/store/zia-pizza-15-palomino-pl/LTFu_grXQcW0Qb7VSyYmQw?srsltid=AfmBOorXGXPm4FmWldz1ZbiUFdFLbwSR-VmcbpuA9ibAcd7h5utaPRcX",
      justEat: "https://www.just-eat.co.uk/restaurants-ziapizza-ba13/menu",
      deliveroo: "https://deliveroo.co.uk/menu/Bath/westbury-leigh/zia-pizza-westbury-15-palomino-pl?srsltid=AfmBOooePO6aKZE5BW4WWFq7fYZ-gneAw5l2cJoualOgxmayCsEFsigc"
    },
    socialMedia: {
      facebook: "https://www.facebook.com/share/16K5gAssg7/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/ziapizza_westbury?igsh=dTdrbjM4MjVqNThi"
    },
    coordinates: {
      lat: 51.2604,
      lng: -2.1875
    },
    features: ["Dine-In", "Takeaway", "Collection"],
    iframes: {
      order: "https://www.food-order.net/index.php/web_orders/home/SUdQS1lF?uid=67b70649c7141",
      booking: "https://www.eposhybrid.uk/index.php/online-table-booking/SUdQS1lF",
      feedback: "https://www.eposhybrid.uk/customer_feedback/reviews/SUdQS1lF",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.147041088998!2d-2.203340523395101!3d51.253201971756575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873d410217ac42b%3A0xb7fde4acaed8017c!2sZia%20Pizza%20Westbury!5e0!3m2!1sen!2sin!4v1758469944227!5m2!1sen!2sin"
    }
  },
  {
    id: "trowbridge",
    name: "The Lamb on the Strand by Zia Pizza.",
    address: "99 The Strand, Trowbridge, BA14 6LL, United Kingdom",
    phone: "+44 13805 03525",
    email: "semington@ziapizza.com",
    openingHours: {
      monday: "Closed",
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
      uberEats: "https://www.ubereats.com/gb/store/zia-pizza-the-lamb-on-the-strand/fiPax3kyUwyzKU9OFob5YA?srsltid=AfmBOopQKON2wD12Y3_ABugD4TGIUbZj1zQlteEx5uPQVNf7KnTCJApD",
      justEat: "https://www.just-eat.co.uk/restaurants-zia-pizza---trowbridge-trowbridge/menu"
    },
    socialMedia: {
      facebook: "https://www.facebook.com/share/1CkvTGuMtM/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/ziapizza_lambonthestrand?igsh=azY5d3NhMG5ma2pq"
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
  // Semington (The Lamb on the Strand) - Sunday
  {
    id: "semington-sunday-roast",
    title: "Sunday Roast",
    description: "Traditional Sunday roast starting from £14.95. Served until sold out, family & group friendly.",
    validDays: ["Sunday"],
    locations: ["trowbridge"],
    isActive: true,
    priority: 1
  },
  // Semington - Monday
  {
    id: "semington-monday-funday",
    title: "Monday Funday",
    description: "Carlsberg & Thatchers Gold £2.95/pint, best way to start the week.",
    validDays: ["Monday"],
    locations: ["trowbridge"],
    isActive: false,
    priority: 2
  },
  // Semington - Tuesday
  {
    id: "semington-tuesday-burger",
    title: "Tuesday Burger & Drink",
    description: "Any burger from the menu with one drink for £14.95. Optional drink upgrade available.",
    validDays: ["Tuesday"],
    locations: ["trowbridge"],
    isActive: true,
    priority: 3
  },
  // Semington - Wednesday
  {
    id: "semington-wednesday-buffet",
    title: "Wednesday Italian Buffet",
    description: "Unlimited pizza & pasta buffet, £16.90 per person. Family friendly, dine in only.",
    validDays: ["Wednesday"],
    validTimes: "6:00 PM - 9:00 PM",
    locations: ["trowbridge"],
    isActive: true,
    priority: 4
  },
  // Semington - Thursday
  {
    id: "semington-thursday-steak",
    title: "Thursday Steak Night",
    description: "Sirloin steak served with chips & fresh mixed salad for £19.95. One sauce included, drink upgrade available £3.50.",
    validDays: ["Thursday"],
    validTimes: "5:30 PM - 9:30 PM",
    locations: ["trowbridge"],
    isActive: true,
    priority: 5
  },
  // Westbury - Tuesday
  {
    id: "westbury-tuesday-bogo",
    title: "BOGO Pizza",
    description: "Buy 1, Get 1 Free (equal/lesser value). Dine-in, takeaway, delivery (web & phone).",
    validDays: ["Tuesday"],
    locations: ["westbury"],
    isActive: true,
    priority: 8
  },
  // Salisbury - Tuesday
  {
    id: "salisbury-tuesday-bogo",
    title: "Half Price Pizza",
    description: "Buy one pizza and get the second pizza at half price 🍕.",
    validDays: ["Tuesday"],
    locations: ["salisbury"],
    isActive: true,
    priority: 12
  },
  // Salisbury - Thursday
  {
    id: "salisbury-thursday-pasta",
    title: "Half Price Pasta",
    description: "Buy one pasta and get the second pasta at half price 🍝.",
    validDays: ["Thursday"],
    locations: ["salisbury"],
    isActive: true,
    priority: 13
  },
  // Salisbury - Friday
  {
    id: "salisbury-friday-kids",
    title: "Kids Eat for £1",
    description: "Kids dine for just £1, family-friendly Fridays every week.",
    validDays: ["Friday"],
    locations: ["salisbury"],
    isActive: true,
    priority: 14
  },
  // Salisbury - Daily
  {
    id: "salisbury-daily-drinks",
    title: "Double the Drinks",
    description: "2 cocktails £13.95, every evening from 5 PM 🍹.",
    validTimes: "5:00 PM - Close",
    locations: ["salisbury"],
    isActive: true,
    priority: 15
  }
];