'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function StudioHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src="/images/studio/hero-bg.jpg"
            alt="Sarwa Studio workspace"
            fill
            className="object-cover transform scale-110 transition-transform duration-[2s]"
            style={{
              transform: isLoaded ? 'scale(1)' : 'scale(1.1)'
            }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Where Creativity Takes Form
        </h1>
        <div 
          className={`w-24 h-1 bg-gradient-to-r from-[#a855f7] to-[#22c55e] mx-auto mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 w-24' : 'opacity-0 w-0'
          }`}
        ></div>
        <p 
          className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-300 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Step into our creative sanctuary where innovation meets artistry. Explore the space where we transform visions into unforgettable brand experiences.
        </p>
        <button 
          className={`group bg-gradient-to-r from-[#a855f7] to-[#22c55e] text-white px-10 py-4 rounded-full font-medium 
          relative overflow-hidden transition-all duration-300
          hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:translate-y-[-3px]
          ${isLoaded ? 'opacity-100 translate-y-0 delay-700' : 'opacity-0 translate-y-10'}`}
          onClick={() => {
            const aboutSection = document.getElementById('studio-about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="relative z-10">Discover Our Space</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Animated scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-[#a855f7] to-[#22c55e] rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
}