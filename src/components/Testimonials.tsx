import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "San Francisco, CA",
    rating: 5,
    text: "The quality of craftsmanship is absolutely incredible. I can feel the love and care that went into making my handwoven scarf. It's not just a product, it's a piece of art with a story.",
    product: "Traditional Woven Scarf",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b830?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Miguel Rodriguez",
    location: "Austin, TX",
    rating: 5,
    text: "I've been searching for authentic handcrafted jewelry for years. The silver earrings I bought here are stunning, and knowing they support local artisans makes them even more special.",
    product: "Silver & Turquoise Earrings",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Emily Thompson",
    location: "Portland, OR",
    rating: 5,
    text: "The ceramic bowl set has become the centerpiece of my dining room. Each piece is unique and beautiful. It's amazing to own something that connects me to the artisan who made it.",
    product: "Ceramic Bowl Set",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Stories from Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from customers who have found joy in owning authentic handcrafted treasures
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border shadow-gentle hover:shadow-warm transition-all duration-300 relative"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-artisan-gold text-artisan-gold" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground text-center mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                {/* Product */}
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                    {testimonial.product}
                  </span>
                </div>
                
                {/* Customer Info */}
                <div className="flex items-center justify-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;