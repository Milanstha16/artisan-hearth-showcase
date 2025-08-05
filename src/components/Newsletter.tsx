import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to our community!",
        description: "You'll receive updates about new artisan collections and exclusive offers.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto bg-card/95 backdrop-blur border-border shadow-warm">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Join Our Artisan Community
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Be the first to discover new collections, meet featured artisans, and get exclusive access to limited-edition pieces.
                </p>
                <div className="flex items-start gap-3 text-left">
                  <Gift className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Welcome Gift: 15% Off Your First Order
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Plus free shipping on orders over $75
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 text-base bg-background border-border"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base shadow-gentle transition-all duration-300 transform hover:scale-105"
                  >
                    Subscribe & Get 15% Off
                  </Button>
                </form>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;