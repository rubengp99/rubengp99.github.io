import React, { useEffect, useState } from "react";

interface ParallaxWrapperProps {
  backgroundVideo?: string; // base path, must have both .webm and .mp4
  fallbackImage?: string; // fallback background
  speed?: number;
  overlayOpacity?: number;
  children: React.ReactNode;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
  backgroundVideo,
  fallbackImage,
  speed = 1,
  overlayOpacity = 0.85,
  children,
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Fallback image (visible until video loads) */}
      {fallbackImage && (
        <div
          className={`absolute inset-0 h-[100vh] bg-cover bg-center transition-opacity duration-1000 ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${fallbackImage})`,
            transform: `translateY(${offsetY * speed}px)`,
          }}
        />
      )}

      {/* Background video (fades in on load) */}
      {backgroundVideo && (
        <video
          className={`absolute inset-0 w-full h-[100vh] object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translateY(${offsetY * speed}px)`,
          }}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={backgroundVideo + ".webm"} type="video/webm" />
          <source src={backgroundVideo + ".mp4"} type="video/mp4" />
        </video>
      )}

      {/* Black overlay */}
      {(backgroundVideo || fallbackImage) && (
        <div
          className="absolute inset-0 bg-black h-[120vh] transition-opacity duration-700"
          style={{
            opacity: overlayOpacity,
            transform: `translateY(${offsetY * speed}px)`,
          }}
        />
      )}

      {/* Foreground content */}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
};

export default ParallaxWrapper;
