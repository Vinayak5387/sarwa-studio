'use client';
import { motion } from 'framer-motion';

export default function PortfolioHeader() {
	return (
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
	);
}
