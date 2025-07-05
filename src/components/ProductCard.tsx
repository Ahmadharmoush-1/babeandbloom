import { Product } from '../store/cartStore';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {product.description}
        </p>
        
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 mb-3 ${
            isAdding
              ? 'bg-green-500 text-white scale-105'
              : 'gradient-gold text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transform hover:scale-105'
          }`}
        >
          {isAdding ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Added!</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
        
        <div className="text-center">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
