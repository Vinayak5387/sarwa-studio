'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function StudioAbout() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section 
      id="studio-about"
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#a855f7]/5 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-[#22c55e]/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className={`text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              About Our Studio
            </h2>
            <div 
              className={`w-16 h-1 bg-gradient-to-r from-[#a855f7] to-[#22c55e] mb-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 w-16' : 'opacity-0 w-0'
              }`}
            ></div>
            <p 
              className={`text-lg mb-6 text-gray-300 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Sarwa Studio is a creative sanctuary where innovation and design converge. 
              Founded in 2018, our studio has evolved into a collaborative space where 
              talented designers, photographers, and creative thinkers come together to 
              craft meaningful brand experiences.
            </p>
            <p 
              className={`text-lg mb-8 text-gray-300 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Our workspace is designed to inspire creativity, with open areas for 
              collaboration, private spaces for focused work, and state-of-the-art 
              equipment to bring your vision to life.
            </p>
            <div 
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-[#1a1a1a] p-6 rounded-xl">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-[#a855f7] to-[#22c55e] bg-clip-text text-transparent mb-2">5+</h3>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-xl">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-[#22c55e] to-[#a855f7] bg-clip-text text-transparent mb-2">100+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-xl">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-[#a855f7] to-[#22c55e] bg-clip-text text-transparent mb-2">12</h3>
                <p className="text-gray-400">Team Members</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-xl">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-[#22c55e] to-[#a855f7] bg-clip-text text-transparent mb-2">15+</h3>
                <p className="text-gray-400">Industry Awards</p>
              </div>
            </div>
          </div>
          <div 
            className={`relative h-[600px] transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            {/* Main image */}
            <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-full w-full transform transition-transform duration-700 hover:scale-110">
                <Image 
                  src="/images/studio/workspace-1.jpg" 
                  alt="Sarwa Studio workspace" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            {/* Secondary image */}
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0a0a0a]">
              <div className="relative h-full w-full transform transition-transform duration-700 hover:scale-110">
                <Image 
                  src="/images/studio/workspace-2.jpg" 
                  alt="Sarwa Studio team" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}