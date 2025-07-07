import { Product } from '../store/cartStore';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart } from 'lucide-react';
import { useState, memo } from 'react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

interface ProductCardProps {
  product: Product;
}

const ProductCard = memo(({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const [isAdding, setIsAdding] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver();

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product);
    // Reduced timeout for faster feedback
    setTimeout(() => setIsAdding(false), 150);
  };

  return (
    <div 
      ref={ref}
      className={`bg-card border border-border rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 ${
        isIntersecting ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-3 sm:p-6">
        <h3 className="text-sm sm:text-xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
          {product.description}
        </p>
        
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-2 sm:py-3 px-2 sm:px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-1 sm:space-x-2 mb-2 sm:mb-3 text-xs sm:text-sm ${
            isAdding
              ? 'bg-green-500 text-white scale-105'
              : 'gradient-gold text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transform hover:scale-105'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          {isAdding ? (
            <>
              <div className="w-3 h-3 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Added!</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-3 h-3 sm:w-5 sm:h-5" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
        
        <div className="text-center">
          <span className="text-lg sm:text-2xl font-bold text-primary">${product.price}</span>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
