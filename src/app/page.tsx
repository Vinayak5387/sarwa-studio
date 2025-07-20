import Image from "next/image";
import Link from "next/link";
import ServicesSection from "../components/ServicesSection";
import TeamMembers from "@/components/TeamMembers";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center">
        <div className="max-w-6xl w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-slide-up opacity-0" 
              style={{ animationDelay: "0s", animationFillMode: "forwards" }}>
              ELEVATING
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-slide-up opacity-0" 
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              BRANDS
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-slide-up opacity-0" 
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              VISUALLY
            </span>
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-xl max-w-md mb-8 md:mb-0 text-gray-300 animate-slide-up opacity-0" 
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              We craft stunning visuals and engaging video content for brands that want to stand out.
            </p>
            <Link href="/contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 animate-slide-up opacity-0" 
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              Let's collaborate →
            </Link>
          </div>
        </div>
      </section>

      {/* Scrolling text banner */}
      <div className="py-8 overflow-hidden bg-gray-800/50 backdrop-blur-sm relative">
        <div className="whitespace-nowrap animate-scroll">
          <span className="text-4xl font-bold mx-4 text-gray-300">GRAPHIC DESIGN</span>
          <span className="text-4xl font-bold mx-4 text-blue-400">•</span>
          <span className="text-4xl font-bold mx-4 text-gray-300">VIDEO EDITING</span>
          <span className="text-4xl font-bold mx-4 text-blue-400">•</span>
          <span className="text-4xl font-bold mx-4 text-gray-300">BRAND IDENTITY</span>
          <span className="text-4xl font-bold mx-4 text-blue-400">•</span>
          <span className="text-4xl font-bold mx-4 text-gray-300">MOTION GRAPHICS</span>
          <span className="text-4xl font-bold mx-4 text-blue-400">•</span>
        </div>
      </div>
      
      {/* Brands Section */}
      <div className="py-12 px-6 md:px-12 lg:px-24 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-xl text-gray-400 mb-10">  </h3>
          {/* ...existing brands code... */}
        </div>
      </div>

      {/* Featured Projects */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-100">SELECTED WORK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Project cards with updated styling */}
            <div className="group">
              <div className="aspect-square bg-gray-800/50 backdrop-blur-sm relative overflow-hidden rounded-lg">
                <Image 
                  src="/images/SELECTED-WORK/brand-identity.png"
                  alt="Brand Identity Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-0"></div>
                <div className="absolute bottom-4 right-4 text-4xl font-bold text-blue-400 opacity-80">01</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-100">Brand Identity</h3>
                <p className="text-gray-400 mb-4">Complete visual identity for a modern lifestyle brand.</p>
              </div>
            </div>
            {/* Project¬ 2 */}
            <div className="stack-carddd card hover-lift">
              <div className="stack-card-internal aspect-square bg-[#1f1f1f] relative overflow-hidden">
                <Image 
                  src="/images/SELECTED-WORK/Video Campaign.jpg"
                  alt="Video Campaign Project"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-0"></div>
                <div className="absolute bottom-4 right-4 text-4xl font-bold text-white opacity-80">02</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Video Campaign</h3>
                <p className="text-gray-400 mb-4">
                  Series of promotional videos with custom motion graphics.
                </p>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="stack-carddd card hover-lift">
              <div className="stack-card-internal aspect-square bg-[#1f1f1f] relative overflow-hidden">
                <Image 
                  src="/images/SELECTED-WORK/social media.png"
                  alt="Social Media Project"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-0"></div>
                <div className="absolute bottom-4 right-4 text-4xl font-bold text-white opacity-80">03</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Social Media</h3>
                <p className="text-gray-400 mb-4">
                  Creating and scheduling content to grow and engage on social platforms.
                </p>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="stack-carddd card hover-lift">
              <div className="stack-card-internal aspect-square bg-[#1f1f1f] relative overflow-hidden">
                <Image 
                  src="/images/SELECTED-WORK/uui-ux.png"
                  alt="UI/UX Design Project"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-0"></div>
                <div className="absolute bottom-4 right-4 text-4xl font-bold text-white opacity-80">04</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">UI/UX Design</h3>
                <p className="text-gray-400 mb-4">
                  User interface design for web and mobile applications.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
    

      {/* Stats Section */}
      
      {/* Blog Posts Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* ...existing blog posts code with updated colors... */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Brand?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Let's create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" 
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all">
              Start a Project
            </Link>
            <Link href="/portfolio" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}