'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Service card data
const services = [
  {
    id: 'branding',
    title: 'Branding',
    description: 'Craft a brand that speaks your unique truth.',
    bulletPoints: [
      'Brand Identity',
      'Brand Strategy',
      'Brand Messaging',
      'Visual Identity'
    ],
    color: '#a855f7',
    image: '/images/services/branding.jpg'
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Create seamless experiences that keep users engaged.',
    bulletPoints: [
      'User-Centered Design',
      'Wireframing & Prototyping',
      'Responsive Design',
      'User Research & Testing'
    ],
    color: '#22c55e',
    image: '/images/services/ui-ux.jpg'
  },
  {
    id: 'product-photography',
    title: 'Product Photography',
    description: 'Capture your products beautifully to inspire instant desire.',
    bulletPoints: [
      'Stunning Visuals',
      'Brand Storytelling',
      'Attention to Detail',
      'Versatile Formats'
    ],
    color: '#3b82f6',
    image: '/images/services/photography.jpg'
  },
  {
    id: 'packaging',
    title: 'Packaging Design',
    description: 'Create packaging that tells your story and entices buyers.',
    bulletPoints: [
      'Creative Concepts',
      'Functional Design',
      'Sustainability Focus',
      'Market Appeal'
    ],
    color: '#f59e0b',
    image: '/images/services/package.jpg'
  }
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Set loaded state after component mounts for entrance animations
    setIsLoaded(true);
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    // Create intersection observer to detect when cards are in view
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = services.findIndex(service => service.id === id);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, options);

    // Observe each card
    const cardElements = document.querySelectorAll('.service-card');
    cardElements.forEach(card => {
      if (observerRef.current) {
        observerRef.current.observe(card);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 
          className={`text-3xl md:text-5xl font-bold mb-16 text-white transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          OUR SERVICES
        </h2>
        
        <div ref={containerRef} className="relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`service-card relative bg-[#1f1f1f] rounded-lg p-8 mb-16 md:mb-24 transition-all duration-700 ease-out cursor-pointer`}
              style={{
                transform: `translateY(${index < activeIndex ? '-100px' : '0'}) 
                           scale(${index === activeIndex ? '1' : (index < activeIndex ? '0.95' : '0.98')})
                           ${hoverIndex === index ? 'translateX(10px)' : ''}`,
                opacity: index === activeIndex ? 1 : (index < activeIndex ? 0.5 : 0.85),
                zIndex: services.length - index,
                boxShadow: index === activeIndex 
                  ? '0 15px 40px rgba(0, 0, 0, 0.4)' 
                  : (hoverIndex === index ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none'),
                transitionDelay: isLoaded ? `${index * 100}ms` : '0ms',
                transformOrigin: 'center',
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="transition-all duration-500 ease-out" 
                     style={{ 
                       transform: index === activeIndex ? 'translateY(0)' : 'translateY(10px)',
                       opacity: index === activeIndex ? 1 : 0.8,
                     }}>
                  <h3 className="text-4xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">
                    <span className="inline-block relative">
                      {service.title}
                      <span 
                        className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-500 ease-in-out"
                        style={{ 
                          backgroundColor: service.color,
                          width: hoverIndex === index || index === activeIndex ? '100%' : '0%'
                        }}
                      ></span>
                    </span>
                  </h3>
                  <div 
                    className="w-16 h-1 mb-6 transition-all duration-500"
                    style={{ 
                      backgroundColor: service.color,
                      width: index === activeIndex || hoverIndex === index ? '4rem' : '2rem',
                    }}
                  ></div>
                  <p className="text-xl mb-8 text-gray-300">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-center text-gray-300 transition-all duration-300"
                          style={{ 
                            transform: (index === activeIndex || hoverIndex === index) ? 'translateX(0)' : 'translateX(-10px)',
                            opacity: (index === activeIndex || hoverIndex === index) ? 1 : 0.7,
                            transitionDelay: `${i * 50}ms`
                          }}>
                        <span
                          className="w-2 h-2 rounded-full mr-3 transition-all duration-300"
                          style={{ 
                            backgroundColor: service.color,
                            transform: hoverIndex === index ? 'scale(1.5)' : 'scale(1)'
                          }}
                        ></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/services/${service.id}`}
                    className="group inline-flex items-center text-white px-6 py-3 rounded-full transition-all duration-300 hover:translate-y-[-3px] hover:shadow-md overflow-hidden relative"
                    style={{ 
                      backgroundColor: service.color,
                      transform: index === activeIndex ? 'translateY(0)' : 'translateY(5px)',
                      opacity: index === activeIndex ? 1 : 0.8,
                    }}
                  >
                    <span className="relative z-10">Learn more</span> 
                    <span className="ml-2 transition-all duration-300 group-hover:translate-x-1 relative z-10">→</span>
                    <span 
                      className="absolute inset-0 w-0 bg-black bg-opacity-20 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </Link>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div 
                    className={`w-full h-64 bg-[#2a2a2a] rounded-lg overflow-hidden relative transition-all duration-700 ${
                      index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
                    }`}
                    style={{
                      transform: hoverIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                    }}
                  >
                    {service.image ? (
                      <Image 
                        src={service.image}
                        alt={`${service.title} service`}
                        fill
                        className={`object-cover transition-all duration-1000`}
                        style={{
                          transform: `scale(${index === activeIndex || hoverIndex === index ? '1.1' : '1'}) 
                                     translateY(${hoverIndex === index ? '-5px' : '0'})`,
                        }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-6xl text-gray-700 font-bold">0{index + 1}</span>
                      </div>
                    )}
                    <div 
                      className={`absolute inset-0 transition-opacity duration-500`}
                      style={{
                        background: `linear-gradient(to top, ${service.color}33, transparent)`,
                        opacity: index === activeIndex || hoverIndex === index ? 0.8 : 0.4,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Animated number in background */}
              <div className="absolute -bottom-10 -right-5 text-9xl font-bold opacity-5 transition-all duration-500"
                   style={{ 
                     color: service.color,
                     opacity: index === activeIndex || hoverIndex === index ? 0.1 : 0.05,
                     transform: hoverIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                   }}>
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}