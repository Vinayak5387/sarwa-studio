'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const processSteps = [
	{
		number: '01',
		title: 'Discovery',
		description:
			'We begin by understanding your brand, goals, and target audience through in-depth consultations and research.',
		icon: '/images/studio/discovery-icon.svg',
		color: '#a855f7',
	},
	{
		number: '02',
		title: 'Strategy',
		description:
			'Based on our findings, we develop a comprehensive strategy that aligns with your business objectives.',
		icon: '/images/studio/strategy-icon.svg',
		color: '#22c55e',
	},
	{
		number: '03',
		title: 'Creation',
		description:
			'Our creative team brings concepts to life through design, photography, and development.',
		icon: '/images/studio/creation-icon.svg',
		color: '#3b82f6',
	},
	{
		number: '04',
		title: 'Refinement',
		description:
			'We iterate based on feedback, perfecting every detail until the final product exceeds expectations.',
		icon: '/images/studio/refinement-icon.svg',
		color: '#f59e0b',
	},
	{
		number: '05',
		title: 'Launch',
		description:
			'We help you introduce your brand or product to the world with impact and precision.',
		icon: '/images/studio/launch-icon.svg',
		color: '#ef4444',
	},
];

export default function StudioProcess() {
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
			ref={sectionRef}
			className="relative py-20 px-6 md:px-12 lg:px-24 bg-[#0c0c0c] overflow-hidden"
		>
			{/* Background effect */}
			<div className="absolute inset-0 opacity-30">
				<div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#a855f7] to-transparent"></div>
			</div>

			<div className="relative z-10 max-w-6xl mx-auto">
				<h2
					className={`text-3xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 transition-all duration-700 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					Our Creative Process
				</h2>
				<div
					className={`w-16 h-1 bg-gradient-to-r from-[#a855f7] to-[#22c55e] mx-auto mb-12 transition-all duration-700 delay-200 ${
						isVisible ? 'opacity-100 w-16' : 'opacity-0 w-0'
					}`}
				></div>

				<div className="relative">
					<div className="space-y-16 md:space-y-24 relative">
						{processSteps.map((step, index) => (
							<div
								key={step.number}
								className={`flex flex-col md:flex-row items-start md:items-center gap-8 transition-all duration-1000 ${
									isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
								}`}
								style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
							>
								<div className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
									<div className="group bg-[#1a1a1a] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] relative overflow-hidden">
										{/* Gradient border effect */}
										<div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#a855f7] to-[#22c55e] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											<div className="h-full w-full bg-[#1a1a1a] rounded-2xl"></div>
										</div>

										<div className="relative">
											<div className="flex items-center mb-4">
												<span className="text-4xl font-bold bg-gradient-to-r from-[#a855f7] to-[#22c55e] bg-clip-text text-transparent mr-4">
													{step.number}
												</span>
												<h3 className="text-2xl font-bold text-white">
													{step.title}
												</h3>
											</div>
											<p className="text-gray-400">{step.description}</p>
										</div>
									</div>
								</div>

								<div
									className={`flex items-center justify-center md:w-24 relative ${
										index % 2 === 1 ? 'md:order-1' : ''
									}`}
								>
									<div
										className="w-14 h-14 rounded-full flex items-center justify-center relative z-10 transition-transform duration-300 hover:scale-110"
										style={{
											background: `linear-gradient(to right, ${step.color}, ${
												index === processSteps.length - 1
													? '#22c55e'
													: processSteps[index + 1].color
											})`,
										}}
									>
										<span className="text-white text-xl font-bold">
											{step.number}
										</span>
									</div>
									{index < processSteps.length - 1 && (
										<div className="absolute top-1/2 left-1/2 w-px h-24 md:w-24 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-[#a855f7] to-[#22c55e] transform -translate-x-1/2 md:translate-y-[-50%] hidden md:block"></div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}