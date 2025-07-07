import { useState, lazy, Suspense } from 'react';
import { Menu, X, Search, ShoppingCart, Instagram, MessageCircle } from 'lucide-react';
import Sidebar from '../components/SideBar';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import FloatingCartButton from '../components/FloatingCartButton';
import VideoSection from '../components/VideoSection';
import AboutSection from '../components/AboutSection';
import SearchDialog from '../components/SearchDialog';
import Logo from '../components/Logo';
import ProductBenefits from '../components/ProductBenefits';
import { useCartStore } from '../store/cartStore';
import { videoConfigs } from '../data/videoData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Lazy load CartSummary for better performance
const CartSummary = lazy(() => import('../components/CartSummary'));

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showHero, setShowHero] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const getTotalItems = useCartStore(state => state.getTotalItems);
  const isScrolled = useScrollAnimation(50);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setShowHero(category === null);
    setSidebarOpen(false);
  };

  const getVideoConfig = () => {
    if (!selectedCategory) return videoConfigs.default;
    return videoConfigs[selectedCategory] || videoConfigs.default;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header Bar with better mobile responsiveness */}
      <div className={`bg-card border-b border-border p-2 sm:p-4 flex items-center justify-between relative z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg backdrop-blur-sm bg-card/95' : ''
      }`}>
        {/* Left - Menu and Logo */}
        <div className="flex items-center gap-1 sm:gap-4 flex-1 min-w-0">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-1 sm:p-2 rounded-lg hover:bg-secondary/50 transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {sidebarOpen ? <X className="w-4 h-4 sm:w-6 sm:h-6" /> : <Menu className="w-4 h-4 sm:w-6 sm:h-6" />}
          </button>
          <div className="min-w-0 flex-1">
            <Logo />
          </div>
        </div>

        {/* Center - Navigation (Desktop only) */}
        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => handleCategorySelect(null)}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              selectedCategory === null ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
            }`}
          >
            Shop All
          </button>
          <button
            onClick={() => handleCategorySelect('cookware')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              selectedCategory === 'cookware' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
            }`}
          >
            Cookware
          </button>
          <button
            onClick={() => handleCategorySelect('bakeware')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              selectedCategory === 'bakeware' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
            }`}
          >
            Bakeware
          </button>
          <button
            onClick={() => handleCategorySelect('appliances')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              selectedCategory === 'appliances' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
            }`}
          >
            Appliances
          </button>
          <button
            onClick={() => handleCategorySelect('storage')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              selectedCategory === 'storage' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
            }`}
          >
            Storage
          </button>
          <button
            onClick={() => handleCategorySelect('dining')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              selectedCategory === 'dining' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
            }`}
          >
            Dining
          </button>
          <button
            onClick={() => handleCategorySelect('decor')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              selectedCategory === 'decor' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
            }`}
          >
            Kitchen Decor
          </button>
          <button
            onClick={() => handleCategorySelect('baby-essentials')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              selectedCategory === 'baby-essentials' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
            }`}
          >
            Baby Essentials
          </button>
        </div>

        {/* Right - Search, WhatsApp, Instagram and Cart with better mobile spacing */}
        <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
          <button 
            onClick={() => setShowSearch(true)}
            className="p-1 sm:p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            aria-label="Search products"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <a
            href="https://wa.me/96178841832"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 sm:p-2 rounded-lg hover:bg-secondary/50 transition-colors text-green-500 hover:text-green-400"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://www.instagram.com/babeandbloom.lb/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 sm:p-2 rounded-lg hover:bg-secondary/50 transition-colors text-primary hover:text-primary/80"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <button 
            onClick={() => setShowCart(true)}
            className="p-1 sm:p-2 rounded-lg hover:bg-secondary/50 transition-colors relative"
            aria-label="View cart"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold min-w-[16px] sm:min-w-[20px]">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Mobile Sidebar - Left Side Overlay */}
        <div className={`
          lg:hidden fixed inset-y-0 left-0 z-40 w-80 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          {/* Mobile overlay backdrop */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-30"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          
          <div className="relative z-40 h-full">
            <Sidebar 
              selectedCategory={selectedCategory} 
              onCategorySelect={handleCategorySelect}
            />
          </div>
        </div>

        {/* Desktop Sidebar - Fixed Position */}
        <div className="hidden lg:block lg:w-80 lg:fixed lg:h-screen lg:z-40 lg:top-[73px]">
          <Sidebar 
            selectedCategory={selectedCategory} 
            onCategorySelect={handleCategorySelect}
          />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-80">
          {/* Hero Section */}
          {showHero && (
            <div className="relative">
              <HeroSection />
            </div>
          )}
          
          {/* About Section - Only show on home page */}
         
          
          {/* Product Benefits - Show on home page */}
          {showHero && (
            <div className="container mx-auto px-4 py-8">
              <ProductBenefits />
            </div>
          )}
          
          {/* Video Section - Show appropriate video based on category */}
          <VideoSection {...getVideoConfig()} />
          
          {/* Product Grid */}
          <div className="relative">
            <ProductGrid selectedCategory={selectedCategory} />
          </div>
        </main>
      </div>
       {showHero && <AboutSection />}
      
      <FloatingCartButton onClick={() => setShowCart(true)} />
      
      <Suspense fallback={<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"><div className="text-white">Loading...</div></div>}>
        <CartSummary isOpen={showCart} onClose={() => setShowCart(false)} />
      </Suspense>
      
      <SearchDialog isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </div>
  );
};

export default Index;
