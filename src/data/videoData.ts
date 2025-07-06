export interface VideoData {
  title: string;
  description: string;
  videoUrl: string;
  overlayTitle: string;
  overlayDescription: string;
}

export const videoConfigs: Record<string, VideoData> = {
  default: {
    title: "Elevate Your Culinary Experience",
    description: "Watch our premium kitchen essentials transform ordinary cooking into extraordinary culinary adventures",
    videoUrl: "/videos/videoplayback.mp4",
    overlayTitle: "Premium Quality in Every Detail",
    overlayDescription: "From professional cookware to elegant dining essentials"
  },
  cookware: {
    title: "Master Your Culinary Craft",
    description: "Professional-grade cookware designed for culinary excellence and lasting performance",
    videoUrl: "https://cdn.pixabay.com/video/2021/08/10/84537-588264530_large.mp4",
    overlayTitle: "Premium Cookware Collection",
    overlayDescription: "From cast iron to stainless steel - tools that transform cooking"
  },
  bakeware: {
    title: "Baking Perfection Awaits",
    description: "Professional bakeware that delivers consistent results for every recipe",
    videoUrl: "https://cdn.pixabay.com/video/2022/04/05/113563-698676014_large.mp4",
    overlayTitle: "Artisan Baking Tools",
    overlayDescription: "Create bakery-quality results in your own kitchen"
  },
  appliances: {
    title: "Smart Kitchen Innovation",
    description: "Modern appliances that bring efficiency and elegance to your culinary space",
    videoUrl: "https://cdn.pixabay.com/video/2021/11/23/96260-651856190_large.mp4",
    overlayTitle: "Modern Kitchen Technology",
    overlayDescription: "Appliances that make cooking effortless and enjoyable"
  },
  storage: {
    title: "Organize with Style",
    description: "Beautiful storage solutions that keep your kitchen organized and accessible",
    videoUrl: "https://cdn.pixabay.com/video/2023/02/14/150391-797070302_large.mp4",
    overlayTitle: "Smart Storage Solutions",
    overlayDescription: "Keep your kitchen organized and ingredients fresh"
  },
  dining: {
    title: "Elevate Every Meal",
    description: "Elegant dining essentials that transform every meal into a special occasion",
    videoUrl: "https://cdn.pixabay.com/video/2021/08/31/86816-598854145_large.mp4",
    overlayTitle: "Fine Dining at Home",
    overlayDescription: "Sophisticated tableware for memorable dining experiences"
  },
  decor: {
    title: "Style Your Space",
    description: "Beautiful decor pieces that add personality and warmth to your kitchen",
    videoUrl: "https://cdn.pixabay.com/video/2023/05/12/162719-828346579_large.mp4",
    overlayTitle: "Kitchen Style & Decor",
    overlayDescription: "Transform your kitchen into a space that inspires creativity"
  },
  "baby-essentials": {
    title: "Nurture with Love & Care",
    description: "Safe, thoughtfully designed baby essentials that make feeding time a joy for both you and your little one",
    videoUrl: "https://cdn.pixabay.com/video/2021/05/05/74583-547533610_large.mp4",
    overlayTitle: "Baby's First Adventures",
    overlayDescription: "Creating precious moments with every meal and playtime"
  }
};
