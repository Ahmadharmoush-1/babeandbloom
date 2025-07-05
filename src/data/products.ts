import { Product } from '../store/cartStore';

export const products: Product[] = [
  // Cookware (7 products)
  {
    id: 1,
    name: "Professional Chef's Pan",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    category: "cookware",
    description: "Premium non-stick pan perfect for professional cooking"
  },
  {
    id: 2,
    name: "Stainless Steel Pot Set",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1584990347498-7199c831e059?w=500&h=500&fit=crop",
    category: "cookware",
    description: "Complete set of durable stainless steel pots"
  },
  {
    id: 3,
    name: "Cast Iron Skillet",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1578643463654-7f3c8d86498c?w=500&h=500&fit=crop",
    category: "cookware",
    description: "Traditional cast iron skillet for perfect searing"
  },
  {
    id: 4,
    name: "Ceramic Dutch Oven",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1585516173217-593d7c901b5d?w=500&h=500&fit=crop",
    category: "cookware",
    description: "Beautiful ceramic dutch oven for slow cooking"
  },
  {
    id: 5,
    name: "Non-Stick Wok",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    category: "cookware",
    description: "Large wok perfect for stir-frying and Asian cuisine"
  },
  {
    id: 6,
    name: "Copper Sauce Pan",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1584990347498-7199c831e059?w=500&h=500&fit=crop",
    category: "cookware",
    description: "Professional copper sauce pan with even heat distribution"
  },
  {
    id: 7,
    name: "Grill Pan",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1578643463654-7f3c8d86498c?w=500&h=500&fit=crop",
    category: "cookware",
    description: "Ridged grill pan for indoor grilling perfection"
  },

  // Bakeware (7 products)
  {
    id: 8,
    name: "Silicone Baking Mat Set",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1571118230857-4b6de737aeb5?w=500&h=500&fit=crop",
    category: "bakeware",
    description: "Reusable silicone mats for perfect baking results"
  },
  {
    id: 9,
    name: "Professional Cake Pans",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
    category: "bakeware",
    description: "Set of round cake pans for professional results"
  },
  {
    id: 10,
    name: "Cookie Sheet Set",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    category: "bakeware",
    description: "Heavy-duty cookie sheets with even heat distribution"
  },
  {
    id: 11,
    name: "Muffin Tin",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1584990347498-7199c831e059?w=500&h=500&fit=crop",
    category: "bakeware",
    description: "12-cup non-stick muffin tin for perfect muffins"
  },
  {
    id: 12,
    name: "Loaf Pan",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1578643463654-7f3c8d86498c?w=500&h=500&fit=crop",
    category: "bakeware",
    description: "Professional loaf pan for bread and pound cakes"
  },
  {
    id: 13,
    name: "Pie Dish",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1585516173217-593d7c901b5d?w=500&h=500&fit=crop",
    category: "bakeware",
    description: "Ceramic pie dish with fluted edges"
  },
  {
    id: 14,
    name: "Baking Stone",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1571118230857-4b6de737aeb5?w=500&h=500&fit=crop",
    category: "bakeware",
    description: "Pizza stone for crispy crusts and artisan breads"
  },

  // Appliances (7 products)
  {
    id: 15,
    name: "Stand Mixer",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1578643463654-7f3c8d86498c?w=500&h=500&fit=crop",
    category: "appliances",
    description: "Powerful stand mixer for all your baking needs"
  },
  {
    id: 16,
    name: "Food Processor",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    category: "appliances",
    description: "Multi-function food processor with various attachments"
  },
  {
    id: 17,
    name: "Espresso Machine",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1571118230857-4b6de737aeb5?w=500&h=500&fit=crop",
    category: "appliances",
    description: "Professional espresso machine for café-quality coffee"
  },
  {
    id: 18,
    name: "Air Fryer",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
    category: "appliances",
    description: "Healthy cooking with hot air circulation technology"
  },
  {
    id: 19,
    name: "Blender",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1584990347498-7199c831e059?w=500&h=500&fit=crop",
    category: "appliances",
    description: "High-speed blender for smoothies and soups"
  },
  {
    id: 20,
    name: "Slow Cooker",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1578643463654-7f3c8d86498c?w=500&h=500&fit=crop",
    category: "appliances",
    description: "6-quart slow cooker for convenient meal preparation"
  },
  {
    id: 21,
    name: "Electric Kettle",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1585516173217-593d7c901b5d?w=500&h=500&fit=crop",
    category: "appliances",
    description: "Fast-boiling electric kettle with temperature control"
  },

  // Storage (7 products)
  {
    id: 22,
    name: "Glass Container Set",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1571118230857-4b6de737aeb5?w=500&h=500&fit=crop",
    category: "storage",
    description: "Airtight glass containers for food storage"
  },
  {
    id: 23,
    name: "Spice Rack",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
    category: "storage",
    description: "Rotating spice rack with 20 jars included"
  },
  {
    id: 24,
    name: "Pantry Organizer",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    category: "storage",
    description: "Modular pantry organization system"
  },
  {
    id: 25,
    name: "Vacuum Storage Bags",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1584990347498-7199c831e059?w=500&h=500&fit=crop",
    category: "storage",
    description: "Space-saving vacuum storage bags for bulk items"
  },
  {
    id: 26,
    name: "Cereal Dispensers",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1578643463654-7f3c8d86498c?w=500&h=500&fit=crop",
    category: "storage",
    description: "Set of 3 cereal dispensers for dry goods"
  },
  {
    id: 27,
    name: "Wine Rack",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1585516173217-593d7c901b5d?w=500&h=500&fit=crop",
    category: "storage",
    description: "Elegant wooden wine rack for 12 bottles"
  },
  {
    id: 28,
    name: "Kitchen Canisters",
    price: 55.99,
    image: "https://images.unsplash.com/photo-1571118230857-4b6de737aeb5?w=500&h=500&fit=crop",
    category: "storage",
    description: "Set of 4 airtight kitchen canisters"
  },

  // Dining (7 products)
  {
    id: 29,
    name: "Fine China Dinner Set",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
    category: "dining",
    description: "12-piece fine china dinner set for elegant dining"
  },
  {
    id: 30,
    name: "Crystal Wine Glasses",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    category: "dining",
    description: "Set of 6 crystal wine glasses"
  },
  {
    id: 31,
    name: "Silverware Set",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1584990347498-7199c831e059?w=500&h=500&fit=crop",
    category: "dining",
    description: "20-piece stainless steel silverware set"
  },
  {
    id: 32,
    name: "Serving Platters",
    price: 65.99,
    image: "https://images.unsplash.com/photo-1578643463654-7f3c8d86498c?w=500&h=500&fit=crop",
    category: "dining",
    description: "Set of 3 ceramic serving platters"
  },
  {
    id: 33,
    name: "Table Runner",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1585516173217-593d7c901b5d?w=500&h=500&fit=crop",
    category: "dining",
    description: "Elegant linen table runner for special occasions"
  },
  {
    id: 34,
    name: "Candle Holders",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1571118230857-4b6de737aeb5?w=500&h=500&fit=crop",
    category: "dining",
    description: "Set of 4 brass candle holders"
  },
  {
    id: 35,
    name: "Napkin Rings",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
    category: "dining",
    description: "Set of 8 decorative napkin rings"
  },

  // Kitchen Decor (7 products)
  {
    id: 36,
    name: "Herb Garden Kit",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    category: "decor",
    description: "Indoor herb garden kit for fresh cooking herbs"
  },
  {
    id: 37,
    name: "Kitchen Wall Art",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1584990347498-7199c831e059?w=500&h=500&fit=crop",
    category: "decor",
    description: "Set of 3 framed kitchen-themed prints"
  },
  {
    id: 38,
    name: "Decorative Bowls",
    price: 52.99,
    image: "https://images.unsplash.com/photo-1578643463654-7f3c8d86498c?w=500&h=500&fit=crop",
    category: "decor",
    description: "Set of decorative ceramic bowls"
  },
  {
    id: 39,
    name: "Kitchen Clock",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1585516173217-593d7c901b5d?w=500&h=500&fit=crop",
    category: "decor",
    description: "Vintage-style kitchen wall clock"
  },
  {
    id: 40,
    name: "Cutting Board Display",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1571118230857-4b6de737aeb5?w=500&h=500&fit=crop",
    category: "decor",
    description: "Decorative wooden cutting boards for display"
  },
  {
    id: 41,
    name: "Kitchen Plants",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
    category: "decor",
    description: "Set of 3 kitchen-friendly potted plants"
  },
  {
    id: 42,
    name: "Vintage Mason Jars",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    category: "decor",
    description: "Set of 6 vintage-style mason jars for decoration"
  }
];

export const categories = [
  { id: 'cookware', name: 'Cookware', icon: '🍳' },
  { id: 'bakeware', name: 'Bakeware', icon: '🧁' },
  { id: 'appliances', name: 'Appliances', icon: '⚡' },
  { id: 'storage', name: 'Storage', icon: '📦' },
  { id: 'dining', name: 'Dining', icon: '🍽️' },
  { id: 'decor', name: 'Kitchen Decor', icon: '✨' }
];
