import { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { X, Plus, Minus, ShoppingBag, MessageCircle, MapPin, Phone, User } from 'lucide-react';

interface CartSummaryProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSummary = ({ isOpen, onClose }: CartSummaryProps) => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = getTotalPrice();
  const deliveryFee = 3;
  const totalPrice = subtotal + deliveryFee;

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('Please fill in all required information');
      return;
    }

    const orderDetails = items.map(item => 
      `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const message = `🛒 *New Order - BabeandBloom*

👤 *Customer Details:*
📝 Name: ${customerInfo.name}
📞 Phone: ${customerInfo.phone}
📍 Address: ${customerInfo.address}

📋 *Order Details:*
${orderDetails}

💰 *Order Summary:*
• Subtotal: $${subtotal.toFixed(2)}
• Delivery Fee: $${deliveryFee.toFixed(2)}
• *Total: $${totalPrice.toFixed(2)}*

✨ Thank you for choosing BabeandBloom! We'll process your order shortly.`;

    const whatsappUrl = `https://wa.me/96178841832?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    clearCart();
    setCustomerInfo({ name: '', phone: '', address: '' });
    setShowCheckout(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[95vh] bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border gradient-black-gold flex-shrink-0">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <h2 className="text-lg sm:text-2xl font-bold text-gradient">Shopping Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary/50 rounded-lg transition-colors duration-200"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-muted-foreground mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground">Add some amazing products!</p>
            </div>
          ) : (
            <div className="p-4 sm:p-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 bg-secondary/30 p-4 rounded-lg border border-border/50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base truncate">{item.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-secondary rounded transition-colors duration-200"
                    >
                      <Minus className="w-4 h-4 text-foreground" />
                    </button>
                    <span className="w-8 text-center font-medium text-foreground">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-secondary rounded transition-colors duration-200"
                    >
                      <Plus className="w-4 h-4 text-foreground" />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary text-sm sm:text-base">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-red-400 hover:text-red-300 transition-colors duration-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-4 sm:p-6 bg-secondary/20 flex-shrink-0">
            {!showCheckout ? (
              <div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Subtotal:</span>
                    <span className="font-semibold text-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Delivery Fee:</span>
                    <span className="font-semibold text-foreground">${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg sm:text-xl font-bold text-foreground">Total:</span>
                      <span className="text-xl sm:text-2xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full gradient-gold text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
                >
                  Proceed to Checkout
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Delivery Information</span>
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                  
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <textarea
                      placeholder="Delivery Address *"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 sm:p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Order Summary</h4>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee:</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-primary/20 pt-1 mt-1">
                      <div className="flex justify-between font-bold text-primary">
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="flex-1 py-3 border border-border text-foreground rounded-lg hover:bg-secondary/50 transition-colors duration-200 text-sm sm:text-base"
                  >
                    Back to Cart
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="flex-1 gradient-gold text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Complete Order via WhatsApp</span>
                    <span className="sm:hidden">Order via WhatsApp</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSummary;
