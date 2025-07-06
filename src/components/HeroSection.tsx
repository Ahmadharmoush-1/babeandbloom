import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://cdn.pixabay.com/video/2022/02/07/107624-676894059_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Flowing Gold Particles Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Flowing Metal Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-32 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer blur-sm"></div>
        <div className="absolute bottom-1/3 right-0 w-full h-24 bg-gradient-to-l from-transparent via-accent/10 to-transparent animate-shimmer blur-md" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {/* Luxury Serif Gold Headline */}
         <div className="flex items-center space-x-4">
  <img src="\photos\babeandbloomlogo.png" alt="Logo" className="h-16 w-16 rounded-full object-cover" />
  <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 text-gradient leading-tight tracking-wide">
   BABE AND BLOOM 
  </h1>
</div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-12 text-primary leading-tight">
             Elegent Cratfted for You
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 font-light">
            Discover our exquisite collection of premium kitchen essentials, 
            where luxury meets functionality in perfect harmony.
          </p>
          
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              {/* Shop Now Button */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <button className="relative bg-background px-8 py-4 rounded-full text-primary font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 border border-primary/30">
                  Shop Now
                </button>
              </div>
              
              {/* Explore Collections Button */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <button className="relative border-2 border-primary px-8 py-4 rounded-full text-primary font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105">
                  Explore Collections
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Liquid Gold Transition Element */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary animate-shimmer overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-liquidGold"></div>
      </div>
    </section>
  );
};

export default HeroSection;
