import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { locationReviews } from "@/data/reviews";

const ReviewsSection = () => {
  const highRated = locationReviews.map((loc) => ({
    ...loc,
    reviews: loc.reviews.filter((r) => r.rating >= 4),
  }));

  const renderStars = (count: number) => {
    return (
      <div className="flex items-center gap-1 text-secondary">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} className={`w-4 h-4 ${idx < count ? 'fill-current' : 'opacity-30'}`} />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Guest <span className="text-gradient-red">Reviews</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What our guests love about Zia Pizza across our locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highRated.map((loc) => (
            <Card key={loc.locationId} className="card-premium">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-display text-xl text-primary">{loc.locationId === 'trowbridge' ? 'The Lamb On the Strand' : loc.locationId === 'salisbury' ? 'Salisbury' : 'Westbury'}</CardTitle>
                  <Badge className="bg-secondary text-white">{loc.averageRating.toFixed(1)} ★</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{loc.totalReviews}+ Google reviews</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {loc.reviews.slice(0, 2).map((r) => (
                  <div key={r.id} className="p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-primary">{r.author}</span>
                      {renderStars(r.rating)}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                    {r.relativeTime && (
                      <p className="text-xs text-muted-foreground mt-2">{r.relativeTime}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;


