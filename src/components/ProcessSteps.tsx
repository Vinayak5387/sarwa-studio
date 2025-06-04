import React from 'react';

export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

const defaultSteps: ProcessStep[] = [
  {
    id: "discovery",
    number: 1,
    title: "Discovery",
    description: "We learn about your brand, goals, and audience to establish a solid foundation."
  },
  {
    id: "strategy",
    number: 2,
    title: "Strategy",
    description: "We develop a tailored approach that aligns with your business objectives."
  },
  {
    id: "creation",
    number: 3,
    title: "Creation",
    description: "Our team brings concepts to life with meticulous attention to detail."
  },
  {
    id: "delivery",
    number: 4,
    title: "Delivery",
    description: "We provide the final assets and support their implementation for maximum impact."
  }
];

interface ProcessStepsProps {
  steps?: ProcessStep[];
  showTitle?: boolean;
  titleText?: string;
  subtitleText?: string;
  bgColor?: string;
}

export default function ProcessSteps({
  steps = defaultSteps,
  showTitle = true,
  titleText = "Our Process",
  subtitleText = "How we bring your vision to life",
  bgColor = "bg-[#1a1a1a]"
}: ProcessStepsProps) {
  return (
    <section className={`py-20 px-6 md:px-12 lg:px-24 ${bgColor}`}>
      <div className="max-w-6xl mx-auto">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{titleText}</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {subtitleText}
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="w-16 h-16 rounded-full bg-[#974bdf] flex items-center justify-center mb-6 z-10 relative">
                <span className="text-2xl font-bold">{step.number}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-8 w-[calc(100%-16px)] h-0.5 bg-[#974bdf]/30 hidden md:block"></div>
              )}
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}