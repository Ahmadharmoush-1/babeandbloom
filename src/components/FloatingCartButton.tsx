import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useState, useEffect } from 'react';

interface FloatingCartButtonProps {
  onClick: () => void;
}

const FloatingCartButton = ({ onClick }: FloatingCartButtonProps) => {
  const getTotalItems = useCartStore(state => state.getTotalItems);
  const totalItems = getTotalItems();
  const [shimmer, setShimmer] = useState(false);
  const [prevTotalItems, setPrevTotalItems] = useState(totalItems);

  // Faster shimmer animation when item is added
  useEffect(() => {
    if (totalItems > prevTotalItems) {
      setShimmer(true);
      const timer = setTimeout(() => setShimmer(false), 400); // Reduced from 600ms
      return () => clearTimeout(timer);
    }
    setPrevTotalItems(totalItems);
  }, [totalItems, prevTotalItems]);

  if (totalItems === 0) return null;

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-40 gradient-gold text-primary-foreground p-4 rounded-full shadow-2xl hover:shadow-primary/30 transition-all duration-200 transform hover:scale-110 animate-float ${
        shimmer ? 'scale-125 ring-4 ring-primary/50' : ''
      }`}
    >
      <ShoppingCart className={`w-6 h-6 ${shimmer ? 'animate-bounce' : ''}`} />
      <span className={`absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold transition-all duration-200 ${
        shimmer ? 'scale-125 animate-pulse' : 'animate-pulse'
      }`}>
        {totalItems}
      </span>
      
      {/* Enhanced shimmer effect overlay */}
      {shimmer && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
      )}
    </button>
  );
};

export default FloatingCartButton;
