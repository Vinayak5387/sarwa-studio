import React from 'react';

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const defaultValues: CompanyValue[] = [
  {
    id: "creative",
    title: "Creative Excellence",
    description: "We craft unique and impactful visual solutions that help brands stand out in today's competitive market.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-[#22c55e]" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v6M9 12h6" />
      </svg>
    )
  },
  {
    id: "strategy",
    title: "Strategic Thinking",
    description: "We develop comprehensive brand strategies that align with business objectives and resonate with target audiences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-[#22c55e]" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v10" />
      </svg>
    )
  },
  {
    id: "innovation",
    title: "Digital Innovation",
    description: "We leverage cutting-edge technology and trends to create modern, future-ready brand experiences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-[#22c55e]" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.5 9.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v2" />
        <rect x="7" y="4" width="10" height="16" rx="2" strokeWidth={1.5} />
      </svg>
    )
  },
  {
    id: "results",
    title: "Result Driven",
    description: "We focus on delivering measurable results that contribute to our clients' business growth and success.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-[#22c55e]" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v2m4-2v2m4 2H4" />
        <circle cx="16" cy="16" r="1" fill="currentColor" />
        <circle cx="12" cy="13" r="1" fill="currentColor" />
        <circle cx="8" cy="16" r="1" fill="currentColor" />
      </svg>
    )
  }
];

interface CompanyValuesProps {
  values?: CompanyValue[];
  showTitle?: boolean;
  titleText?: string;
  subtitleText?: string;
  bgColor?: string;
}

export default function CompanyValues({
  values = defaultValues,
  showTitle = true,
  titleText = "Our Core Values",
  subtitleText = "Principles that drive our creative process",
  bgColor = "bg-[#1a1a1a]"
}: CompanyValuesProps) {
  return (
    <section className={`py-20 px-6 md:px-12 lg:px-24 ${bgColor}`}>
      <div className="max-w-6xl mx-auto">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{titleText}</h2>
            <div className="w-16 h-1 bg-[#22c55e] mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {subtitleText}
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.id} className="bg-[#2a2a2a] p-8 rounded-xl hover-lift transition-all">
              <div className="w-16 h-16 rounded-full bg-[#22c55e]/20 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}