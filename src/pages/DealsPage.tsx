import { useState } from "react";
import { Calendar, Clock, MapPin, Star, Gift, Users, Utensils, Coffee, Beer, X, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const DealsPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dealsData = [
    {
      id: 1,
      name: "The Lamb on the Strand by Zia Pizza",
      location: "Semington",
      address: "Semington, Wiltshire",
      offers: [
        {
          day: "Sunday",
          title: "The Great Zia Sunday Roast",
          description: "All day. Includes chipolata, roast potatoes, seasonal veg, Yorkshire, unlimited gravy.",
          price: "From £14.95",
          icon: <Utensils className="w-5 h-5" />,
          highlight: true
        },
        {
          day: "Monday",
          title: "Monday Funday",
          description: "Carlsberg & Thatchers Gold £2.95/pint (excl. bank holidays)",
          price: "£2.95/pint",
          icon: <Beer className="w-5 h-5" />
        },
        {
          day: "Tuesday",
          title: "BOGO Pizza",
          description: "Buy 1, Get 1 Free (equal/lesser value). Dine-in, takeaway, delivery (web & phone).",
          price: "50% OFF",
          icon: <Gift className="w-5 h-5" />,
          highlight: true
        },
        {
          day: "Wednesday",
          title: "Buffet",
          description: "6:00–9:00 PM | Adults £16.45 | Kids (under 12) £9.00. \"Come hungry, leave happy.\"",
          price: "Adults £16.45 | Kids £9.00",
          icon: <Users className="w-5 h-5" />
        },
        {
          day: "Thursday",
          title: "2 for 1 Pasta",
          description: "Buy one pasta, get one free.",
          price: "50% OFF",
          icon: <Utensils className="w-5 h-5" />
        },
        {
          day: "Friday",
          title: "Kids Eat for £1",
          description: "With a full-price adult main (under 12).",
          price: "£1.00",
          icon: <Users className="w-5 h-5" />
        },
        {
          day: "Saturday",
          title: "No branch-specific promo",
          description: "Enjoy our regular menu",
          price: "Regular prices",
          icon: <Star className="w-5 h-5" />
        }
      ],
      dailyOffer: {
        title: "Double the Drinks",
        description: "2 cocktails £13.95, 5 PM–Close. Everyday",
        price: "£13.95",
        icon: <Beer className="w-5 h-5" />
      }
    },
    {
      id: 2,
      name: "Zia Pizza Westbury",
      location: "Westbury",
      address: "Westbury, Wiltshire",
      offers: [
        {
          day: "Tuesday",
          title: "BOGO Pizza",
          description: "Buy 1, Get 1 Free (equal/lesser value). Dine-in, takeaway, delivery (web & phone).",
          price: "50% OFF",
          icon: <Gift className="w-5 h-5" />,
          highlight: true
        },
        {
          day: "Thursday",
          title: "2 for 1 Pasta",
          description: "Buy one pasta, get one free.",
          price: "50% OFF",
          icon: <Utensils className="w-5 h-5" />
        },
        {
          day: "Friday",
          title: "Kids Eat for £1",
          description: "With a full-price adult main (under 12).",
          price: "£1.00",
          icon: <Users className="w-5 h-5" />
        }
      ],
      dailyOffer: {
        title: "Double the Drinks",
        description: "2 cocktails £13.95, 5 PM–Close. Daily",
        price: "£13.95",
        icon: <Beer className="w-5 h-5" />
      }
    },
    {
      id: 3,
      name: "Zia Pizza Salisbury",
      location: "Salisbury",
      address: "Salisbury, Wiltshire",
      offers: [
        {
          day: "Tuesday",
          title: "BOGO Pizza",
          description: "Buy 1, Get 1 Free (equal/lesser value). Dine-in, takeaway, delivery (web & phone).",
          price: "50% OFF",
          icon: <Gift className="w-5 h-5" />,
          highlight: true
        },
        {
          day: "Thursday",
          title: "2 for 1 Pasta",
          description: "Buy one pasta, get one free.",
          price: "50% OFF",
          icon: <Utensils className="w-5 h-5" />
        },
        {
          day: "Friday",
          title: "Kids Eat for £1",
          description: "With a full-price adult main (under 12).",
          price: "£1.00",
          icon: <Users className="w-5 h-5" />
        }
      ],
      dailyOffer: {
        title: "Double the Drinks",
        description: "2 cocktails £13.95, 5 PM–Close. Daily",
        price: "£13.95",
        icon: <Beer className="w-5 h-5" />
      }
    }
  ];

  const locationDetails = {
    1: {
      metaTitle: "Pubs in Trowbridge | Best Pubs in Trowbridge – Zia Pizza",
      metaDescription: "Discover the best pubs in Trowbridge at Zia Pizza! Enjoy great food, refreshing drinks, and a lively atmosphere perfect for friends and family.",
      content: {
        title: "Pubs in Trowbridge – Enjoy the Best Pub Experience at Zia Pizza – The Lamb on the Strand",
        intro: "Looking for the best pubs in Trowbridge? Welcome to Zia Pizza – The Lamb on the Strand, where great food, refreshing drinks, and a friendly atmosphere come together for the perfect evening out. We're not just known for our delicious pizzas — our Trowbridge location offers a lively pub-style dining experience that locals love, complete with cozy seating, tasty meals, and drinks to match every occasion.",
        sections: [
          {
            title: "A Pub in Trowbridge with a Difference",
            content: "At Zia Pizza – The Lamb on the Strand, we bring something unique to the pubs in Trowbridge scene. Whether you're stopping by after work, meeting friends for a weekend get-together, or planning a casual family meal, our welcoming space is perfect for relaxing and enjoying the moment.\n\nFrom hand-stretched pizzas baked to perfection to crisp salads and delicious sides, every dish is made with fresh, high-quality ingredients. Pair your meal with a refreshing beverage and unwind in a warm, inviting atmosphere."
          },
          {
            title: "Why We're One of the Best Pubs in Trowbridge",
            content: "• Authentic Italian flavors with freshly made pizzas using premium ingredients\n• A great selection of drinks to complement every meal\n• Cozy, family-friendly atmosphere perfect for everyone\n• Friendly service that makes every visit enjoyable\n• Ideal for casual dining, celebrations, and relaxed evenings\n\nWe combine the comfort of a local pub with the passion of Italian cooking — making Zia Pizza – The Lamb on the Strand a go-to spot for food, fun, and connection in Trowbridge."
          },
          {
            title: "Visit Zia Pizza – The Lamb on the Strand in Trowbridge",
            content: "Come and see why locals call Zia Pizza – The Lamb on the Strand one of the best pubs in Trowbridge. Whether you're craving a stone-baked pizza, sharing a drink with friends, or enjoying a cozy meal with family, we promise a relaxed experience full of flavor and good vibes."
          }
        ],
        faq: [
          {
            question: "What makes Zia Pizza – The Lamb on the Strand one of the best pubs in Trowbridge?",
            answer: "Zia Pizza – The Lamb on the Strand stands out for its authentic Italian food, welcoming ambiance, friendly staff, and great selection of drinks — offering a unique twist on the traditional pub experience."
          },
          {
            question: "Do you serve drinks along with food?",
            answer: "Yes. We offer a variety of refreshing drinks to pair perfectly with our handcrafted pizzas and delicious sides."
          },
          {
            question: "Is Zia Pizza – The Lamb on the Strand suitable for families?",
            answer: "Absolutely. We're a family-friendly restaurant and pub, perfect for casual meals, family gatherings, and celebrations."
          },
          {
            question: "Can I order takeaway or book a table online?",
            answer: "Yes. You can easily order online or reserve a table at our Trowbridge location for dine-in or takeaway convenience."
          }
        ]
      }
    },
    2: {
      metaTitle: "Best Pizza in Westbury | Pizza Delivery in Westbury",
      metaDescription: "Enjoy the best pizza in Westbury with Zia Pizza! Fast pizza delivery in Westbury, fresh ingredients, and authentic Italian flavors at your doorstep.",
      content: {
        title: "Best Pizza in Westbury | Pizza Delivery in Westbury – Zia Pizza",
        intro: "Welcome to Zia Pizza Westbury, where authentic Italian flavor meets local charm. We're proud to serve the best pizza in Westbury, crafted from fresh ingredients, hand-stretched dough, and time-honored Italian recipes. Whether you dine in with friends or order from home, every bite delivers true Italian satisfaction.",
        sections: [
          {
            title: "Enjoy the Best Pizza in Westbury",
            content: "When it comes to pizza, quality makes all the difference. Our chefs create each pizza using the freshest toppings, homemade sauce, and perfectly baked crusts. That's why locals call us the best pizza in Westbury.\n\nChoose from our classic Margherita, spicy Pepperoni, or gourmet options like Truffle Mushroom and BBQ Chicken. Pair it with a crisp salad or Italian dessert for the full Zia Pizza experience. Each dish reflects our passion for authentic, flavorful food made with care."
          },
          {
            title: "Fast & Fresh Pizza Delivery in Westbury",
            content: "Can't make it to the restaurant? No problem! Zia Pizza offers pizza delivery in Westbury, so you can enjoy your favorite Italian dishes from the comfort of your home.\n\nOur delivery team ensures your pizza arrives fresh, hot, and perfectly baked — ready to enjoy. Whether it's a family meal, movie night, or office lunch, our pizza delivery in Westbury brings restaurant-quality flavor right to your door."
          },
          {
            title: "Why Choose Zia Pizza Westbury",
            content: "• The best pizza in Westbury, handcrafted daily\n• Fast and reliable pizza delivery in Westbury\n• Fresh, locally sourced ingredients\n• Cozy dine-in atmosphere with friendly staff\n• Vegetarian and vegan pizza options available"
          }
        ],
        faq: [
          {
            question: "What makes Zia Pizza the best pizza in Westbury?",
            answer: "Our pizzas are handmade with authentic Italian techniques, fresh ingredients, and baked in a stone oven for that perfect flavor and texture."
          },
          {
            question: "Do you offer pizza delivery in Westbury?",
            answer: "Yes, we provide fast and reliable pizza delivery in Westbury every day from 12 PM to 10 PM, ensuring you get hot, fresh pizza whenever you crave it."
          },
          {
            question: "How do I place an order for delivery?",
            answer: "You can easily order online through our website or call our Westbury branch directly for quick service."
          },
          {
            question: "Can I customize my pizza?",
            answer: "Absolutely! We offer customizable pizzas with a wide range of toppings so you can create your perfect combination."
          },
          {
            question: "Do you have vegetarian or vegan options?",
            answer: "Yes, we offer delicious vegetarian and vegan pizzas made with the same care and authentic flavors as our traditional options."
          },
          {
            question: "Can I dine in at Zia Pizza Westbury?",
            answer: "Of course! Our Westbury restaurant offers a warm, friendly environment perfect for family meals, date nights, and group gatherings."
          },
          {
            question: "Where is Zia Pizza Westbury located?",
            answer: "We're conveniently located in the heart of Westbury, making it easy for locals to stop by for dine-in or order takeaway and delivery."
          }
        ]
      }
    },
    3: {
      metaTitle: "Sunday Roast in Salisbury | Pizza Delivery in Salisbury",
      metaDescription: "Enjoy a delicious Sunday Roast in Salisbury or fast Pizza Delivery in Salisbury with Zia Pizza – fresh, flavorful, and made with authentic Italian care",
      content: {
        title: "Sunday Roast in Salisbury & Pizza Delivery in Salisbury – Zia Pizza",
        intro: "Welcome to Zia Pizza Salisbury, your local destination for authentic Italian flavors and comforting British classics. Whether you're joining us for a hearty Sunday Roast in Salisbury or craving a fresh, hot pizza delivered right to your door, we bring the taste of Italy closer to home.",
        sections: [
          {
            title: "The Perfect Sunday Roast in Salisbury",
            content: "There's nothing better than a relaxed Sunday lunch with family and friends. Our Sunday Roast in Salisbury combines classic British comfort with a touch of Italian finesse. Each roast features tender meats, golden potatoes, fresh seasonal vegetables, and rich homemade gravy — all crafted to perfection."
          },
          {
            title: "Fast, Fresh Pizza Delivery in Salisbury",
            content: "Prefer to enjoy your meal at home? Zia Pizza offers pizza delivery in Salisbury, bringing freshly baked Italian pizzas straight to your doorstep. Our pizzas are hand-stretched, topped with locally sourced ingredients, and baked in our signature stone oven for the perfect crisp crust."
          },
          {
            title: "Why Locals Love Zia Pizza Salisbury",
            content: "• Authentic Italian pizzas and hearty Sunday roasts\n• Fresh, high-quality ingredients\n• Cozy, family-friendly restaurant atmosphere\n• Fast and reliable local delivery service\n• Vegetarian and vegan options available"
          }
        ],
        faq: [
          {
            question: "Do you serve Sunday Roast in Salisbury every week?",
            answer: "Yes! Our Sunday Roast in Salisbury is served every Sunday, freshly prepared with quality ingredients and a touch of Italian flair."
          },
          {
            question: "What time is the Sunday Roast available?",
            answer: "Our Sunday roast is available from 12 PM to 4 PM every Sunday. We recommend booking early to secure your table."
          },
          {
            question: "Do you offer pizza delivery in Salisbury?",
            answer: "Absolutely! We provide fast, fresh, and reliable pizza delivery in Salisbury daily from 12 PM to 10 PM."
          },
          {
            question: "Can I order both pizza and Sunday roast for delivery?",
            answer: "Currently, our Sunday roast is available for dine-in only, while all pizzas and sides can be delivered hot and fresh to your home."
          },
          {
            question: "Do you offer vegetarian or vegan options?",
            answer: "Yes, Zia Pizza Salisbury offers a variety of vegetarian and vegan pizzas, along with plant-based roast options available upon request."
          }
        ]
      }
    }
  };

  const handleLocationClick = (locationId) => {
    setSelectedLocation(locationId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLocation(null);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Weekly <span className="text-white">Deals</span> <span className="text-red-600">&</span> <span style={{ color: '#D4C29C' }}>Offers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover amazing deals and special offers at all our locations. From BOGO pizzas to Sunday roasts, we've got something special for every day of the week!
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Offers by Branch */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Weekly Offers by Branch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each location has its own unique weekly specials. Find your favorite deals below!
            </p>
          </div>
          
          <div className="space-y-12">
            {dealsData.map((location) => (
              <div key={location.id} className="card-premium">
                {/* Location Header */}
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-6 rounded-t-2xl border-b border-border/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-secondary" />
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                        {location.name.includes('Zia Pizza') ? (
                          <>
                            <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>
                            {location.name.replace('Zia Pizza', '').trim() && (
                              <span className="text-white"> – {location.name.replace('Zia Pizza', '').trim()}</span>
                            )}
                          </>
                        ) : (
                          location.name
                        )}
                      </h3>
                    </div>
                    {locationDetails[location.id] && (
                      <button
                        onClick={() => handleLocationClick(location.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-secondary/20 hover:bg-secondary/30 text-secondary rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Info className="w-4 h-4" />
                        <span className="text-sm font-medium">Learn More</span>
                      </button>
                    )}
                  </div>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {location.address}
                  </p>
                </div>

                {/* Weekly Offers */}
                <div className="p-6">
                  <h4 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-secondary" />
                    Weekly Specials
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {location.offers.map((offer, index) => (
                      <Card key={index} className={`${offer.highlight ? 'ring-2 ring-secondary/20 bg-secondary/5 border-secondary/30' : 'border-border/20'} hover:shadow-card transition-all duration-300 hover:border-secondary/50`}>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="text-xs font-medium border-secondary/50 text-secondary">
                              {offer.day}
                            </Badge>
                            {offer.highlight && (
                              <Badge className="bg-secondary text-secondary-foreground text-xs">
                                <Star className="w-3 h-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-lg font-bold text-foreground">
                            {offer.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed font-raleway">
                            {offer.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-secondary">
                              {offer.icon}
                              <span className="font-semibold text-sm">{offer.price}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Daily Offer */}
                  <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg p-6 border border-secondary/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-5 h-5 text-secondary" />
                      <h4 className="font-display text-lg font-bold text-foreground">Daily Special</h4>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">{location.dailyOffer.title}</h5>
                        <p className="text-sm text-muted-foreground font-raleway">{location.dailyOffer.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-secondary">
                        {location.dailyOffer.icon}
                        <span className="font-bold text-lg">{location.dailyOffer.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Save? Visit Us Today!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-raleway">
              Don't miss out on these amazing deals! Visit any of our three locations to enjoy fresh, authentic Italian cuisine at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/locations" 
                className="btn-hero inline-flex items-center justify-center px-8 py-3"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Find Your Nearest Location
              </a>
              <a 
                href="/contact" 
                className="btn-gold-outline inline-flex items-center justify-center px-8 py-3"
              >
                <Coffee className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-bold text-foreground">
              {selectedLocation && locationDetails[selectedLocation]?.content?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedLocation && locationDetails[selectedLocation] && (
            <div className="space-y-6">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-secondary/5 to-accent/5 p-6 rounded-lg">
                <p className="text-muted-foreground leading-relaxed font-raleway">
                  {locationDetails[selectedLocation].content.intro}
                </p>
              </div>

              {/* Content Sections */}
              {locationDetails[selectedLocation].content.sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {section.title}
                  </h3>
                  <div className="text-muted-foreground leading-relaxed font-raleway whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}

              {/* FAQ Section */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {locationDetails[selectedLocation].content.faq.map((item, index) => (
                    <div key={index} className="border border-border/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">
                        {item.question}
                      </h4>
                      <p className="text-muted-foreground font-raleway">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DealsPage;