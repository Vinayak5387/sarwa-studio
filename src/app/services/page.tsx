'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaintBrush, FaLaptopCode, FaMobileAlt, FaBox, FaCamera } from 'react-icons/fa';

interface Service {
	id: string;
	title: string;
	description: string;
	icon: React.ReactNode;
	color: string;
	imagePath: string;
	features: string[];
	buttonText: string;
}

// Update services data with new colors and gradients
const services: Service[] = [
	{
		id: 'branding',
		title: 'Branding & Identity',
		description:
			'We create distinctive brand identities that resonate with your audience and stand out in the market.',
		icon: <FaPaintBrush size={24} />,
		color: 'from-blue-400 to-purple-600',
		imagePath: '/images/services/branding.jpg',
		features: [
			'Brand Strategy',
			'Logo Design',
			'Visual Identity Systems',
			'Brand Guidelines',
			'Brand Messaging',
			'Brand Positioning',
		],
		buttonText: 'Explore Now',
	},
	{
		id: 'web-design',
		title: 'Web Design & Development',
		description:
			'We build beautiful, functional websites that deliver exceptional user experiences and drive results.',
		icon: <FaLaptopCode size={24} />,
		imagePath: '/images/services/webdev.jpg',
		color: 'from-purple-600 to-blue-500',
		features: [
			'UI/UX Design',
			'Responsive Websites',
			'E-commerce Solutions',
			'Content Management Systems',
			'Web Applications',
			'Performance Optimization',
		],
		buttonText: 'Explore Now',
	},
	{
		id: 'product-design',
		title: 'Product & App Design',
		description:
			'We design intuitive digital products and applications that solve real problems for users.',
		icon: <FaMobileAlt size={24} />,
		imagePath: '/images/services/product-app.jpg',
		color: 'from-green-400 to-blue-500',
		features: [
			'User Research',
			'User Interface Design',
			'User Experience Design',
			'Prototyping',
			'Usability Testing',
			'Design Systems',
		],
		buttonText: 'Explore Now',
	},
	{
		id: 'packaging',
		title: 'Packaging Design',
		description:
			'We create packaging solutions that protect your product, tell your story, and catch the consumer\'s eye.',
		icon: <FaBox size={24} />,
		imagePath: '/images/services/Packaging-Design.jpg',
		color: 'from-yellow-400 to-red-500',
		features: [
			'Packaging Strategy',
			'Structural Design',
			'Label Design',
			'Retail Packaging',
			'Sustainable Solutions',
			'Packaging Production',
		],
		buttonText: 'Explore Now',
	},
	{
		id: 'photography',
		title: 'Photography & Video',
		description:
			'We capture compelling visual content that showcases your brand, products, and services.',
		icon: <FaCamera size={24} />,
		color: 'from-red-400 to-pink-500',
		imagePath: '/images/services/photography.jpg',
		features: [
			'Product Photography',
			'Brand Photography',
			'Lifestyle Photography',
			'Video Production',
			'Motion Graphics',
			'Content Creation',
			
		],
		buttonText: 'Explore Now',
	},
] as const;

export default function ServicesPage() {
	const [mounted, setMounted] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [heroVisible, setHeroVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setMounted(true);
	}, []);

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

	useEffect(() => {
		setHeroVisible(true);
	}, []);

	// Don't render anything until mounted
	if (!mounted) return null;

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
			>
				{/* Hero Section */}
				<section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10"></div>
					
					<div className="relative z-20 text-center px-6">
						<motion.h1
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8 }}
							className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
						>
							Our Services
						</motion.h1>
						<motion.div
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="w-20 h-1 bg-blue-600 mx-auto mb-6"
						></motion.div>
						<motion.p
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-xl text-gray-300 max-w-3xl mx-auto"
						>
							We offer a comprehensive range of creative services to help your
							brand stand out and connect with your audience.
						</motion.p>
					</div>
				</section>

				{/* Services Section */}
				<section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-24">
					<div className="max-w-7xl mx-auto">
						<div className="space-y-24">
							{services.map((service, index) => (
								<motion.div
									key={service.id}
									initial={{ y: 50, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: index * 0.2 }}
									className="group"
								>
									<div className="flex flex-col md:flex-row gap-12">
										{index % 2 === 0 ? (
											<>
												<div className="flex-1">
													<div className="flex items-center mb-6">
														<div
															className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-r ${service.color}`}
														>
															{service.icon}
														</div>
														<h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
															{service.title}
														</h2>
													</div>
													<p className="text-gray-300 mb-8">
														{service.description}
													</p>
													<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
														{service.features.map((feature) => (
															<li
																key={feature}
																className="flex items-center bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg"
															>
																<svg
																	className="w-5 h-5 mr-2 text-blue-400"
																	fill="none"
																	stroke="currentColor"
																	viewBox="0 0 24 24"
																>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth={2}
																		d="M5 13l4 4L19 7"
																	/>
																</svg>
																<span className="text-gray-300">
																	{feature}
																</span>
															</li>
														))}
													</ul>
												</div>
												<div className="flex-1">
													<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
														<div className="aspect-[4/3] relative">
															<Image
																src={
																	service.imagePath ||
																	`/images/services/${service.id}.jpg`
																}
																alt={service.title}
																fill
																className="object-cover"
																sizes="(max-width: 768px) 100vw, 50vw"
																priority={index < 2} // Only prioritize first two images
																loading={index < 2 ? 'eager' : 'lazy'}
																onError={(e) => {
																	const target = e.target as HTMLImageElement;
																	target.src = '/images/services/default.jpg'; // Fallback image
																}}
															/>
														</div>
													</div>
												</div>
											</>
										) : (
											<>
												<div className="flex-1">
													<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
														<div className="aspect-[4/3] relative">
															<Image
																src={
																	service.imagePath ||
																	`/images/services/${service.id}.jpg`
																}
																alt={service.title}
																fill
																className="object-cover"
																sizes="(max-width: 768px) 100vw, 50vw"
																priority={index < 2} // Only prioritize first two images
																loading={index < 2 ? 'eager' : 'lazy'}
																onError={(e) => {
																	const target = e.target as HTMLImageElement;
																	target.src = '/images/services/default.jpg'; // Fallback image
																}}
															/>
														</div>
													</div>
												</div>
												<div className="flex-1">
													<div className="flex items-center mb-6">
														<div
															className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-r ${service.color}`}
														>
															{service.icon}
														</div>
														<h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
															{service.title}
														</h2>
													</div>
													<p className="text-gray-300 mb-8">
														{service.description}
													</p>
													<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
														{service.features.map((feature) => (
															<li
																key={feature}
																className="flex items-center bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg"
															>
																<svg
																	className="w-5 h-5 mr-2 text-blue-400"
																	fill="none"
																	stroke="currentColor"
																	viewBox="0 0 24 24"
																>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth={2}
																		d="M5 13l4 4L19 7"
																	/>
																</svg>
																<span className="text-gray-300">
																	{feature}
																</span>
															</li>
														))}
													</ul>
												</div>
											</>
										)}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm">
					<div className="max-w-4xl mx-auto text-center">
						<motion.h2
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
						>
							Ready to Transform Your Brand?
						</motion.h2>
						<motion.p
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className="text-xl text-gray-300 mb-10"
						>
							Let's create something amazing together. Our team is ready to bring
							your vision to life.
						</motion.p>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
						>
							<Link
								href="/contact"
								className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
							>
								Get Started
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 ml-2"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									/>
								</svg>
							</Link>
						</motion.div>
					</div>
				</section>
			</motion.div>
		</AnimatePresence>
	);
}