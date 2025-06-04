'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AurielleProject() {
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
          src="/images/portfolio/vvise-partner/Aurielle/Untitled-2.jpg"
          alt="Aurielle Jewelry"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a] flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Aurielle</h1>
            <p className="text-2xl text-gray-300 mb-8">Your Journey, Your Dreams, No Limits</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-[#1a1a1a] rounded-full text-sm">Branding</span>
              <span className="px-4 py-2 bg-[#1a1a1a] rounded-full text-sm">Jewelry Design</span>
              <span className="px-4 py-2 bg-[#1a1a1a] rounded-full text-sm">Luxury Marketing</span>
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
                  Aurielle came to us with a vision to create a luxury jewelry brand that would resonate with modern, independent women. They needed a sophisticated visual identity that would convey elegance, craftsmanship, and emotional connection.
                </p>
                <p>
                  Our team developed a comprehensive branding strategy that included logo design, packaging, typography, and brand storytelling. The result was a timeless yet contemporary brand identity that perfectly captured Aurielle's commitment to beauty and personal expression.
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#22c55e]">Client</h3>
                <p className="text-gray-300">Aurielle Jewelry</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#22c55e]">Services</h3>
                <p className="text-gray-300">Branding, Packaging Design, Visual Identity</p>
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
          src="/images/portfolio/vvise-partner/Aurielle/Untitled-2.jpg" 
          alt="Aurielle Jewelry Collection" 
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
                  The main challenge was to create a luxury jewelry brand that would stand out in a saturated market while appealing to discerning customers who value both aesthetics and meaning in their jewelry.
                </p>
                <p>
                  The brand needed to convey exclusivity and craftsmanship while remaining approachable and emotionally resonant. It had to work across various touchpoints from packaging to digital presence while maintaining its luxurious character.
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
                  We developed an elegant and timeless brand identity that incorporated refined typography, a sophisticated color palette of soft golds and deep blues, and a distinctive emblem that symbolized personal journey and transformation.
                </p>
                <p>
                  The packaging was designed to create a memorable unboxing experience, with attention to tactile elements and sustainable materials. Every touchpoint was crafted to reinforce the brand's commitment to beauty, quality, and personal meaning.
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
              src="/images/portfolio/vvise-partner/Aurielle/Untitled-2.jpg" 
              alt="Aurielle Jewelry Collection" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="aspect-square relative">
            <Image 
              src="/images/portfolio/vvise-partner/Aurielle/Untitled-2.jpg" 
              alt="Aurielle Packaging Design" 
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
                The new brand identity was enthusiastically received by both Aurielle and their target customers. The brand launched successfully with strong initial sales and positive feedback on the brand experience.
              </p>
              <p>
                The cohesive visual language and storytelling we created has helped Aurielle establish a distinctive presence in the competitive jewelry market and build emotional connections with their customers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div 
              className={`bg-[#1a1a1a] p-8 rounded-lg transition-all duration-700 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-4xl font-bold text-[#22c55e] mb-2">85%</h3>
              <p className="text-gray-300">Positive customer feedback</p>
            </div>
            <div 
              className={`bg-[#1a1a1a] p-8 rounded-lg transition-all duration-700 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-4xl font-bold text-[#22c55e] mb-2">40%</h3>
              <p className="text-gray-300">Higher than projected sales</p>
            </div>
            <div 
              className={`bg-[#1a1a1a] p-8 rounded-lg transition-all duration-700 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-4xl font-bold text-[#22c55e] mb-2">5X</h3>
              <p className="text-gray-300">Increase in social media following</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project / CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to create your own success story?</h2>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-[#22c55e] text-white font-bold rounded-full hover:bg-[#1ea34b] transition-colors"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  );
}