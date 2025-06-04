'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function VVisePartnerProject() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Full-width Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/portfolio/vvise-partner/Logo_Template_Mockup_01.png"
          alt="VVise Partner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a] flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">VVise Partner</h1>
            <p className="text-2xl text-gray-300 mb-8">Your performance. Our stage</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-[#1a1a1a] rounded-full text-sm">Branding</span>
              <span className="px-4 py-2 bg-[#1a1a1a] rounded-full text-sm">Visual Identity</span>
              <span className="px-4 py-2 bg-[#1a1a1a] rounded-full text-sm">Strategy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-8">Project Overview</h2>
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  VVise Partner approached us with a vision to create a brand that would stand out in the competitive business consulting landscape. They needed a visual identity that conveyed professionalism, innovation, and trustworthiness.
                </p>
                <p>
                  Our team developed a comprehensive branding strategy that included logo design, color palette selection, typography, and brand guidelines. The result was a cohesive visual identity that perfectly captured the essence of VVise Partner's mission and values.
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#22c55e]">Client</h3>
                <p className="text-gray-300">VVise Partner</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#22c55e]">Services</h3>
                <p className="text-gray-300">Branding, Visual Identity, Strategy</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#22c55e]">Year</h3>
                <p className="text-gray-300">2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="relative h-[80vh]">
        <Image 
          src="/images/portfolio/vvise-partner/wmremove-transformed.jpg" 
          alt="VVise Partner Brand Identity" 
          fill 
          className="object-cover"
        />
      </section>

      {/* Challenge and Solution */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div 
              className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The main challenge was to create a brand identity that would differentiate VVise Partner from competitors while still appealing to their target audience of corporate clients and entrepreneurs.
                </p>
                <p>
                  The brand needed to convey expertise and reliability without appearing outdated or conventional. It had to be versatile enough to work across various platforms while maintaining its distinctive character.
                </p>
              </div>
            </div>
            <div 
              className={`transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-8">The Solution</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We developed a modern and sophisticated brand identity that incorporated sleek typography, a distinctive color palette dominated by deep blues and vibrant accents, and a memorable logo that symbolized growth and partnership.
                </p>
                <p>
                  The visual elements were designed to work harmoniously across all touchpoints, from digital platforms to print materials, ensuring a consistent brand experience for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="aspect-square relative">
            <Image 
              src="/images/portfolio/vvise-partner/vvise-partner.jpg" 
              alt="VVise Partner Logo Design" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="aspect-square relative">
            <Image 
              src="/images/portfolio/vvise-partner/Rubber_Stamp_Mockup_01.jpg" 
              alt="VVise Partner Brand Application" 
              fill 
              className="object-cover"
            />
          </div>
          
        </div>
      </section>

      {/* Results */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold mb-8">The Results</h2>
            <div className="space-y-6 text-gray-300 text-lg max-w-3xl mx-auto">
              <p>
                The new brand identity was met with enthusiasm from both the client and their target audience. VVise Partner reported increased engagement across their platforms and a stronger market presence following the rebrand.
              </p>
              <p>
                The cohesive visual language we created has helped VVise Partner establish a distinctive presence in their industry and build stronger connections with their clients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div 
              className={`bg-[#1a1a1a] p-8 rounded-lg transition-all duration-700 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-4xl font-bold text-[#22c55e] mb-2">45%</h3>
              <p className="text-gray-300">Increase in brand recognition</p>
            </div>
            <div 
              className={`bg-[#1a1a1a] p-8 rounded-lg transition-all duration-700 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-4xl font-bold text-[#22c55e] mb-2">60%</h3>
              <p className="text-gray-300">Growth in client acquisition</p>
            </div>
            <div 
              className={`bg-[#1a1a1a] p-8 rounded-lg transition-all duration-700 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-4xl font-bold text-[#22c55e] mb-2">3X</h3>
              <p className="text-gray-300">Increase in social media engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project / CTA */}
      
    </div>
  );
}