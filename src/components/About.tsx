import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "150+",
    label: "Skilled Artisans",
    description: "From 12 different communities"
  },
  {
    icon: Award,
    number: "500+",
    label: "Unique Products",
    description: "Each one handcrafted with care"
  },
  {
    icon: Heart,
    number: "98%",
    label: "Customer Satisfaction",
    description: "Love what they purchase"
  },
  {
    icon: Globe,
    number: "25+",
    label: "Countries Served",
    description: "Spreading artisan culture worldwide"
  }
];

const About = () => {
  return (
    <section className="py-16 bg-warm-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              Preserving Traditions,
              <span className="block text-primary">Empowering Communities</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For generations, skilled artisans have passed down their craft through family lines, 
              creating beautiful, functional art that tells the story of their heritage. We partner 
              directly with these talented creators to bring their work to the world while ensuring 
              they receive fair compensation for their incredible skills.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every purchase supports not just an individual artist, but entire communities that 
              depend on traditional crafts for their livelihood. When you choose handcrafted, 
              you're choosing to preserve ancient techniques and support sustainable practices.
            </p>
            <div className="bg-card p-6 rounded-lg border border-border shadow-gentle">
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                Our Promise
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Fair trade practices ensuring artisans receive 70% of profits</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Authentic materials sourced locally and sustainably</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Quality guarantee on every handcrafted piece</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-card border-border shadow-gentle">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-display font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;