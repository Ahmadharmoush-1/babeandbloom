
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

interface VideoSectionProps {
  category?: string;
  title: string;
  description: string;
  videoUrl: string;
  overlayTitle: string;
  overlayDescription: string;
}

const VideoSection = ({ 
  title, 
  description, 
  videoUrl, 
  overlayTitle, 
  overlayDescription 
}: VideoSectionProps) => {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: videoRef, isIntersecting: videoVisible } = useIntersectionObserver();

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div 
          ref={videoRef}
          className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
            videoVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[500px] object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-2xl font-bold mb-2">{overlayTitle}</h3>
            <p className="text-lg opacity-90">
              {overlayDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;