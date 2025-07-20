'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Function to close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <div className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled && !mobileMenuOpen ? 'md:pt-10 pt-0' : 'pt-0'
    }`}>
      <nav className={`bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-lg py-4 px-6 md:px-12 lg:px-24 transition-all duration-300 ease-in-out ${
        isScrolled && !mobileMenuOpen ? 'md:w-[80%] md:mx-auto md:rounded-full md:shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : 'w-full'
      }`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center group" onClick={handleLinkClick}>
            <div className="h-10 w-auto flex items-center justify-center mr-3 transition-transform duration-300 group-hover:scale-105">
              <img src="/logos/sarwa-studio.png" alt="Sarwa Studio Logo" className="h-full w-auto" />
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/portfolio" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300">
              Portfolio
            </Link>
            <div className="relative group">
              <Link href="/services" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 flex items-center">
                Services <span className="ml-1 group-hover:rotate-180 transition-transform duration-300">▼</span>
              </Link>
            </div>
            <Link href="/studio" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300">
              Creative Studio
            </Link>
            <Link href="/blogs" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300">
              Blog
            </Link>
            <Link 
  href="/contact" 
  className="group relative inline-flex items-center gap-2 text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_0_30px_rgba(168,132,251,0.6),0_0_60px_rgba(110,67,245,0.4),0_0_90px_rgba(139,92,246,0.2)]"
  style={{
    background: 'radial-gradient(ellipse at bottom, #A884FB 0%, #8b5cf6 50%, #6E43F5 100%)'
  }}>
        <span className="relative z-10">Contact Us</span>
        <svg 
          className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</Link>
            
          </div>
          
          <button 
            className="md:hidden text-white hover:text-purple-400 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-gradient-to-b from-gray-900/98 to-black/98 backdrop-blur-lg rounded-lg p-4 shadow-xl border border-gray-800/50">
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 py-2" onClick={handleLinkClick}>
                About Us
              </Link>
              <Link href="/portfolio" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 py-2" onClick={handleLinkClick}>
                Portfolio
              </Link>
              <Link href="/services" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 py-2" onClick={handleLinkClick}>
                Services
              </Link>
              <Link href="/studio" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 py-2" onClick={handleLinkClick}>
                Creative Studio
              </Link>
              <Link href="/blogs" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 py-2" onClick={handleLinkClick}>
                Blog
              </Link>
              <Link href="/contact" className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-6 py-2 rounded-full text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
