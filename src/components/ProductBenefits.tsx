const ProductBenefits = () => {
  const benefits = [
    { text: "Non-stick surface", emoji: "🍳" },
    { text: "Easy to clean", emoji: "🧼" },
    { text: "Durable handle", emoji: "🔥" },
    { text: "Heat resistant", emoji: "🔥" },
    { text: "Dishwasher safe", emoji: "✨" },
    { text: "Premium materials", emoji: "⭐" }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 border border-primary/10">
      <h4 className="text-sm font-semibold mb-3 text-center text-foreground">Product Benefits</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-2 text-xs">
            <span className="text-lg">{benefit.emoji}</span>
            <span className="text-foreground">{benefit.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBenefits;
