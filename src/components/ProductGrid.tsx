import { products } from '../data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  selectedCategory: string | null;
}

const ProductGrid = ({ selectedCategory }: ProductGridProps) => {
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const getCategoryDisplayName = () => {
    if (!selectedCategory) return 'All Products';
    
    switch (selectedCategory) {
      case 'baby-essentials':
        return 'Baby Essentials';
      case 'cookware':
        return 'Cookware';
      case 'bakeware':
        return 'Bakeware';
      case 'appliances':
        return 'Appliances';
      case 'storage':
        return 'Storage';
      case 'dining':
        return 'Dining';
      case 'decor':
        return 'Kitchen Decor';
      default:
        return 'Products';
    }
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          {getCategoryDisplayName()}
        </h2>
        <p className="text-muted-foreground">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
        </p>
      </div>
      
      {/* Updated grid to show 2 products per row on mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-muted-foreground mb-2">No products found</h3>
          <p className="text-muted-foreground">Try selecting a different category</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;