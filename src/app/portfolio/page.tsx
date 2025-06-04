'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Portfolio categories with descriptions
const categories = [
	{ id: 'all', name: 'All', description: 'Our complete portfolio of work' },
	{
		id: 'logos',
		name: 'Logo Design',
		description: 'Creative and memorable logo designs that build brand recognition',
	},
	{
		id: 'branding',
		name: 'Branding',
		description: 'Identity design and brand strategy',
	},
	{
		id: 'packaging',
		name: 'Packaging',
		description: 'Product packaging and presentation',
	},
	{
		id: 'product-app',
		name: 'Product & App UI/UX',
		description: 'Digital product and app experiences',
	},
	{ id: 'web-ui', name: 'Web UI/UX', description: 'Website interfaces and experiences' },
	{ id: 'web-dev', name: 'Web Development', description: 'Full-stack web solutions' },
	{ id: 'photography', name: 'Photography', description: 'Professional photography services' },
];

// Enhanced portfolio projects data with full paths
const projects = [
	{
		id: 'vvise-partner',
		title: 'VVise Partner',
		description: 'Your performance. Our stage',
		category: 'branding',
		image: '/images/portfolio/vvise-partner/Logo_Template_Mockup_01.png', // Update with actual image path
		featured: true,
		tags: ['Brand Identity', 'Logo Design', 'Brand Strategy'],
	},
	{
		id: 'aurielle',
		title: 'Aurielle',
		description: 'Your Journey, Your Dreams, No Limits',
		category: 'branding',
		image: '/images/portfolio/vvise-partner/Aurielle/woman-8561067_1920.jpg',
		featured: false,
		tags: ['Visual Identity', 'Brand Guidelines', 'Marketing Collateral'],
	},
	{
		id: 'eco-packaging',
		title: 'Eco Packaging',
		description: 'Sustainable solutions for modern brands',
		category: 'packaging',
		image: '/images/portfolio/eco-packaging.jpg',
		featured: true,
		tags: ['Sustainable Design', 'Packaging', 'Eco-friendly'],
	},
	{
		id: 'finance-app',
		title: 'Finance App',
		description: 'Managing wealth with simplicity',
		category: 'product-app',
		image: '/images/portfolio/finance-app.jpg',
		featured: false,
		tags: ['UI/UX Design', 'Mobile App', 'Fintech'],
	},
	{
		id: 'logo-design-1',
		title: 'Modern Tech Logo',
		description: 'A minimalist, modern logo design for a technology company',
		category: 'logos',
		image: '/images/portfolio/tech-logo.jpg',
		featured: false,
		tags: ['Logo Design', 'Branding', 'Technology'],
	},
	{
		id: 'logo-design-2',
		title: 'Organic Food Brand',
		description: 'Natural and organic-inspired logo design for a food company',
		category: 'logos',
		image: '/images/portfolio/food-logo.jpg',
		featured: false,
		tags: ['Logo Design', 'Food & Beverage', 'Organic'],
	},
];

export default function Portfolio() {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [isVisible, setIsVisible] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
	const sectionRef = useRef<HTMLDivElement>(null);

	// Filter projects based on category and search query
	const filteredProjects = useMemo(() => {
		return projects.filter((project) => {
			const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
			const matchesSearch =
				searchQuery === '' ||
				project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

			return matchesCategory && matchesSearch;
		});
	}, [selectedCategory, searchQuery]);

	// Get the current category object
	const currentCategory = useMemo(() => {
		return categories.find((cat) => cat.id === selectedCategory) || categories[0];
	}, [selectedCategory]);

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
		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
			{/* Hero Section with Parallax */}
			<section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10"></div>
				<motion.div
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1.5 }}
					className="absolute inset-0 bg-[url('/images/portfolio/hero-bg.jpg')] bg-cover bg-center"
				></motion.div>
				<div className="relative z-20 text-center px-6">
					<motion.h1
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
					>
						Our Portfolio
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
						className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
					>
						Showcasing our creative journey through design, development, and innovation
					</motion.p>
				</div>
			</section>

			{/* Main Portfolio Section */}
			<section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-24">
				<div className="max-w-7xl mx-auto">
					{/* Search and Filter Controls */}
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between"
					>
						<div className="w-full md:w-1/2">
							<div className="relative">
								<input
									type="text"
									placeholder="Search projects..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="w-full bg-[#1a1a1a] border border-[#333] rounded-full py-3 px-6 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 focus:border-[#22c55e]"
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
						</div>

						<div className="flex items-center gap-4">
							{/* View Mode Toggle */}
							<div className="flex bg-[#1a1a1a] rounded-full p-1">
								<button
									onClick={() => setViewMode('grid')}
									className={`p-2 rounded-full ${
										viewMode === 'grid' ? 'bg-[#22c55e] text-black' : 'text-gray-400'
									}`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
										/>
									</svg>
								</button>
								<button
									onClick={() => setViewMode('list')}
									className={`p-2 rounded-full ${
										viewMode === 'list' ? 'bg-[#22c55e] text-black' : 'text-gray-400'
									}`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>

							{/* Mobile Category Menu Toggle */}
							<button
								className="md:hidden bg-[#1a1a1a] p-3 rounded-full"
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</motion.div>

					{/* Category Description */}
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="mb-12"
					>
						<h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
							{currentCategory.name}
						</h2>
						<p className="text-gray-400">{currentCategory.description}</p>
					</motion.div>

					{/* Main Content Grid */}
					<div className="flex flex-col md:flex-row gap-8">
						{/* Desktop Categories - Vertical on left side */}
						<div className="hidden md:block md:w-64 flex-shrink-0">
							<div className="bg-[#1a1a1a] rounded-xl p-6 sticky top-24">
								<h3 className="text-xl font-bold mb-4 border-b border-[#333] pb-2">Categories</h3>
								<div className="flex flex-col gap-3 mt-4">
									{categories.map((category) => (
										<button
											key={category.id}
											onClick={() => setSelectedCategory(category.id)}
											className={`text-left py-2 px-3 rounded-lg transition-all ${
												selectedCategory === category.id
													? 'bg-[#22c55e]/10 text-[#22c55e] font-medium'
													: 'text-gray-400 hover:text-white hover:bg-[#333]/30'
											}`}
										>
											{category.name}
										</button>
									))}
								</div>
							</div>
						</div>

						{/* Projects Grid/List */}
						<div className="flex-grow">
							{filteredProjects.length === 0 ? (
								<div className="text-center py-20">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-16 w-16 mx-auto text-gray-600 mb-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<h3 className="text-2xl font-bold mb-2">No projects found</h3>
									<p className="text-gray-400">Try adjusting your search or filter criteria</p>
								</div>
							) : viewMode === 'grid' ? (
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									<AnimatePresence>
										{filteredProjects.map((project, index) => (
											<motion.div
												key={project.id}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: 20 }}
												transition={{ duration: 0.3, delay: index * 0.1 }}
												className="group"
											>
												<Link
													href={`/portfolio/${project.id}`}
													className="block bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:transform hover:scale-[1.02] transition-all duration-500"
												>
													{project.featured && (
														<div className="absolute top-4 left-4 z-10 bg-[#22c55e] text-black text-xs font-bold py-1 px-3 rounded-full">
															Featured
														</div>
													)}
													<div className="aspect-video relative">
														<Image
															src={project.image}
															alt={project.title}
															fill
															className="object-cover"
															unoptimized={project.image.startsWith('http')}
														/>
														<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
													</div>
													<div className="p-6">
														<h3 className="text-2xl font-bold mb-2">{project.title}</h3>
														<p className="text-gray-400 mb-4">{project.description}</p>
														<div className="flex flex-wrap gap-2">
															{project.tags.map((tag, i) => (
																<span
																	key={i}
																	className="text-xs bg-[#333] text-gray-300 px-2 py-1 rounded-full"
																>
																	{tag}
																</span>
															))}
														</div>
													</div>
													<div className="absolute bottom-0 left-0 w-full h-1 bg-[#22c55e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
												</Link>
											</motion.div>
										))}
									</AnimatePresence>
								</div>
							) : (
								<div className="space-y-6">
									<AnimatePresence>
										{filteredProjects.map((project, index) => (
											<motion.div
												key={project.id}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: 20 }}
												transition={{ duration: 0.3, delay: index * 0.1 }}
												className="group"
											>
												<Link
													href={`/portfolio/${project.id}`}
													className="flex flex-col md:flex-row gap-6 bg-[#1a1a1a] rounded-xl overflow-hidden hover:bg-[#222] transition-all duration-300"
												>
													<div className="md:w-1/3 aspect-video md:aspect-square relative">
														<Image
															src={project.image}
															alt={project.title}
															fill
															className="object-cover"
															unoptimized={project.image.startsWith('http')}
														/>
													</div>
													<div className="p-6 md:w-2/3 flex flex-col justify-between">
														<div>
															<div className="flex justify-between items-start mb-2">
																<h3 className="text-2xl font-bold">{project.title}</h3>
																{project.featured && (
																	<span className="bg-[#22c55e] text-black text-xs font-bold py-1 px-3 rounded-full">
																		Featured
																	</span>
																)}
															</div>
															<p className="text-gray-400 mb-4">{project.description}</p>
															<div className="flex flex-wrap gap-2 mb-4">
																{project.tags.map((tag, i) => (
																	<span
																		key={i}
																		className="text-xs bg-[#333] text-gray-300 px-2 py-1 rounded-full"
																	>
																		{tag}
																	</span>
																))}
															</div>
														</div>
														<div className="flex justify-end">
															<span className="text-[#22c55e] group-hover:underline flex items-center">
																View Project
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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
															</span>
														</div>
													</div>
												</Link>
											</motion.div>
										))}
									</AnimatePresence>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm">
				<div className="max-w-4xl mx-auto text-center">
					<motion.h2
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
					>
						Ready to start your project?
					</motion.h2>
					<motion.p
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl text-gray-300 mb-10"
					>
						Let's create something amazing together. Our team is ready to bring your vision to life.
					</motion.p>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<Link
							href="/contact"
							className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
						>
							Get in Touch
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
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
		</div>
	);
}