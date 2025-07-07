import { Shield, MapPin, Banknote, Lock, CreditCard } from 'lucide-react';

const TrustBadges = () => {
  return (
    <div className="bg-secondary/20 rounded-lg p-4 border border-border/30">
      <h4 className="text-sm font-semibold text-center mb-3 text-foreground">Why Choose Us?</h4>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center space-x-2 text-xs">
          <Shield className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span className="text-foreground">100% Satisfaction</span>
        </div>
        <div className="flex items-center space-x-2 text-xs">
          <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
          <span className="text-foreground">Lebanese Business</span>
        </div>
        <div className="flex items-center space-x-2 text-xs">
          <Banknote className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <span className="text-foreground">COD - WHISH CARD</span>
        </div>
        <div className="flex items-center space-x-2 text-xs">
          <Lock className="w-4 h-4 text-purple-500 flex-shrink-0" />
          <span className="text-foreground">Secure Checkout</span>
        </div>
      </div>
      
      <div className="border-t border-border/30 pt-3">
        <h5 className="text-xs font-medium text-center mb-2 text-foreground">We Accept</h5>
        <div className="flex items-center justify-center space-x-3">
          <div className="flex items-center space-x-1">
            <Banknote className="w-4 h-4 text-green-600" />
            <span className="text-xs text-foreground">Cash On Delivery </span>
          </div>
          <div className="flex items-center space-x-1">
            <CreditCard className="w-4 h-4 text-blue-600" />
            <span className="text-xs text-foreground">Wish Card</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
