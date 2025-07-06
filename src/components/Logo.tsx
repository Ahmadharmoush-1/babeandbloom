const Logo = () => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
     
 <div className="flex items-center space-x-3">
  <img
    src="\photos\babeandbloomlogo.png"
    alt="KitchenPro Logo"
    className="h-16 w-16 rounded-full object-cover"
  />
  <div className="flex flex-col">
   <h1 className="text-sm font-bold text-gradient">BabeandBloom</h1>


    <p className="text-sm text-muted-foreground">Premium Kitchen Products</p>
  </div>
</div>


    </div>
  );
};

export default Logo;
