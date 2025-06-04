import Image from "next/image";
import Link from "next/link";
import CompanyValues from "@/components/CompanyValues";
import ProcessSteps from "@/components/ProcessSteps";
import StudioTeam from "@/components/StudioTeam";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#0a0a0a] z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/about/team-hero.jpg')] bg-cover bg-center"></div>
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Story</h1>
          <div className="w-20 h-1 bg-[#974bdf] mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Passionate creatives dedicated to elevating your brand
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6">
                At Sarwa Studio, we believe in the power of visual storytelling to transform brands and connect with audiences on a deeper level.
              </p>
              <p className="text-gray-400 mb-6">
                Our mission is to create compelling visual content that not only looks stunning but also drives real business results. We combine creativity with strategic thinking to help brands stand out in today's crowded digital landscape.
              </p>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-[#974bdf]/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#974bdf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#974bdf]/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#974bdf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#974bdf]/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#974bdf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/about/mission.jpg"
                alt="Our mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <CompanyValues />

      {/* Our Team */}
      <StudioTeam />

      {/* Our Process */}
      <ProcessSteps />

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#974bdf] to-[#3b82f6]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary for your brand. Our team is ready to bring your vision to life.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-white text-[#974bdf] font-bold rounded-full hover:bg-opacity-90 transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}