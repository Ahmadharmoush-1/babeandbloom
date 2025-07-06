const Logo = () => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <div className="relative">
        {/* <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center shadow-lg">
          <div className="text-primary-foreground font-bold text-xl">🍴</div> */}
       <div className="w-8 h-8 sm:w-10 sm:h-10 gradient-gold rounded-lg flex items-center justify-center shadow-lg">
          <div className="text-primary-foreground font-bold text-lg sm:text-xl"></div>
        </div>
       
        {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div> */}
       <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full animate-pulse"></div>
      </div>
 <div className="flex items-center space-x-3">
  <img
    src="\photos\babeandbloomlogo.png"
    alt="KitchenPro Logo"
    className="h-16 w-16 rounded-full object-cover"
  />
  <div className="flex flex-col">
   <h1 className="text-base font-bold text-gradient">BabeandBloom</h1>


    <p className="text-sm text-muted-foreground">Premium Kitchen Products</p>
  </div>
</div>


    </div>
  );
};

export default Logo;
