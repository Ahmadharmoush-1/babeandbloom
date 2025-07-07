import { Truck, Clock, Banknote, Shield } from 'lucide-react';

const USPHighlights = () => {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-lg p-4 mb-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-center">
        <div className="flex flex-col items-center space-y-1">
          <Truck className="w-6 h-6 text-primary" />
          <div className="text-xs font-medium text-foreground"> Delivery All</div>
          <div className="text-xs text-muted-foreground">Over Lebanon</div>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Clock className="w-6 h-6 text-primary" />
          <div className="text-xs font-medium text-foreground">3-5 Days</div>
          <div className="text-xs text-muted-foreground">Delivery</div>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Banknote className="w-6 h-6 text-primary" />
          <div className="text-xs font-medium text-foreground">Cash on</div>
          <div className="text-xs text-muted-foreground">Delivery</div>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Shield className="w-6 h-6 text-primary" />
          <div className="text-xs font-medium text-foreground">Premium</div>
          <div className="text-xs text-muted-foreground">Quality</div>
        </div>
      </div>
    </div>
  );
};

export default USPHighlights;