'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/studio/gallery-1.jpg',
    alt: 'Studio workspace with creative team',
    width: 'col-span-2',
    height: 'row-span-2'
  },
  {
    src: '/images/studio/gallery-2.jpg',
    alt: 'Design brainstorming session',
    width: 'col-span-1',
    height: 'row-span-1'
  },
  {
    src: '/images/studio/gallery-3.jpg',
    alt: 'Photography equipment setup',
    width: 'col-span-1',
    height: 'row-span-1'
  },
  {
    src: '/images/studio/gallery-4.jpg',
    alt: 'Product photoshoot in progress',
    width: 'col-span-1',
    height: 'row-span-2'
  },
  {
    src: '/images/studio/gallery-5.jpg',
    alt: 'Team collaboration meeting',
    width: 'col-span-1',
    height: 'row-span-1'
  },
  {
    src: '/images/studio/gallery-6.jpg',
    alt: 'Creative workspace details',
    width: 'col-span-1',
    height: 'row-span-1'
  }
];

export default function StudioGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{[key: string]: boolean}>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [selectedImage]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -right-[30%] w-[800px] h-[800px] rounded-full bg-[#a855f7]/5 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[20%] w-[600px] h-[600px] rounded-full bg-[#22c55e]/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 
          className={`text-3xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Studio Gallery
        </h2>
        <div 
          className={`w-16 h-1 bg-gradient-to-r from-[#a855f7] to-[#22c55e] mx-auto mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 w-16' : 'opacity-0 w-0'
          }`}
        ></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.src}
              className={`relative overflow-hidden rounded-2xl cursor-pointer ${image.width} ${image.height} transition-all duration-1000 group ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                aspectRatio: image.width.includes('2') ? '2/1' : '1/1'
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                className={`object-cover transition-all duration-700 ${
                  imageLoaded[image.src] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                } group-hover:scale-110`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, [image.src]: true }))}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm md:text-base font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image 
              src={selectedImage} 
              alt="Gallery image" 
              fill 
              className="object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-white/20 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}