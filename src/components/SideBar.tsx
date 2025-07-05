import { ChefHat, Utensils, Coffee, Home, Package, UtensilsCrossed, Sparkles } from 'lucide-react';
import Logo from './Logo';

interface SidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

const categories = [
  { id: null, name: 'All Products', icon: Home },
  { id: 'cookware', name: 'Cookware', icon: ChefHat },
  { id: 'bakeware', name: 'Bakeware', icon: UtensilsCrossed },
  { id: 'appliances', name: 'Appliances', icon: Coffee },
  { id: 'storage', name: 'Storage', icon: Package },
  { id: 'dining', name: 'Dining', icon: Utensils },
  { id: 'decor', name: 'Kitchen Decor', icon: Sparkles },
];

const Sidebar = ({ selectedCategory, onCategorySelect }: SidebarProps) => {
  return (
    <div className="w-full lg:w-80 bg-card border-r border-border lg:h-screen p-4 sm:p-6 overflow-y-auto gradient-black-gold">
      {/* Logo only visible on desktop and when sidebar is open on mobile */}
      <div className="mb-6 sm:mb-8 hidden lg:block">
        <Logo />
      </div>
      
      <nav className="space-y-2">
        <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Categories</h2>
        <div className="grid grid-cols-1 gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`w-full flex items-center justify-start space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-base ${
                  selectedCategory === category.id
                    ? 'gradient-gold text-primary-foreground shadow-lg transform scale-105'
                    : 'text-foreground hover:bg-secondary/50 hover:text-primary'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
