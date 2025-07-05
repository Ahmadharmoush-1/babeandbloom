import { Instagram } from 'lucide-react';
import Logo from '../components/Logo';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-4 flex items-center justify-between">
        <Logo />
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <Instagram className="w-6 h-6" />
          <span className="hidden sm:inline">Follow Us</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
                alt="Luxury Kitchen"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-foreground mb-6">
                  About Our Story
                </h1>
                <div className="w-20 h-1 bg-primary mb-8"></div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that exceptional cooking begins with exceptional tools. 
                  Our curated collection represents the pinnacle of craftsmanship, 
                  where premium materials meet timeless design.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each piece in our collection is carefully selected for its superior 
                  quality, durability, and ability to inspire culinary creativity. 
                  From professional-grade cookware to elegant dining essentials, 
                  we provide the tools that transform kitchens into culinary sanctuaries.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-muted-foreground">Premium Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                    <div className="text-muted-foreground">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Quality First</h3>
              <p className="text-muted-foreground">
                Every product undergoes rigorous quality testing to ensure it meets our premium standards.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Craftsmanship</h3>
              <p className="text-muted-foreground">
                We partner with artisans and manufacturers who share our passion for exceptional craftsmanship.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Customer Care</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We're here to help you find the perfect tools for your kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Follow Our Journey</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our community of culinary enthusiasts on Instagram
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="w-6 h-6" />
            Follow Us on Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
