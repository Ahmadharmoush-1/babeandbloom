import { useEffect, useState } from 'react';
import { Heart, Baby, Home, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-4">
              About Our Story
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Creating beautiful, functional spaces for families to grow and thrive together.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {[
              {
                icon: Heart,
                title: "Thoughtfully Curated",
                description: "Every product is carefully selected for quality and design"
              },
              {
                icon: Baby,
                title: "Baby Safe",
                description: "All baby essentials meet the highest safety standards"
              },
              {
                icon: Home,
                title: "Home Comfort",
                description: "Beautiful pieces that make your house a home"
              },
              {
                icon: Sparkles,
                title: "Premium Quality",
                description: "Only the finest materials and craftsmanship"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 gradient-gold rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Story Text */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              At Cozy Home + Baby Essentials, we believe that every family deserves beautiful, 
              functional products that enhance their daily lives. From the kitchen where memories 
              are made to the nursery where dreams begin, we're here to help you create spaces 
              filled with love, comfort, and style.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our carefully curated collection brings together the best in home essentials and 
              baby products, ensuring that every item meets our high standards for quality, 
              safety, and design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;