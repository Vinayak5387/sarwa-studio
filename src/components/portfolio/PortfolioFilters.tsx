import { motion } from 'framer-motion';
import { Category, ViewMode } from '../../types/portfolio';

interface PortfolioFiltersProps {
	categories: Category[];
	selectedCategory: string;
	onCategoryChange: (category: string) => void;
	searchQuery: string;
	onSearchChange: (query: string) => void;
	viewMode: ViewMode;
	onViewModeChange: (mode: ViewMode) => void;
	resultCount: number;
}

export default function PortfolioFilters({
	categories,
	selectedCategory,
	onCategoryChange,
	searchQuery,
	onSearchChange,
	viewMode,
	onViewModeChange,
	resultCount,
}: PortfolioFiltersProps) {
	const currentCategory = categories.find((cat) => cat.id === selectedCategory) || categories[0];

	return (
		<div className="space-y-6">
			{/* Search and View Controls */}
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="flex flex-col md:flex-row gap-4 items-center justify-between"
			>
				<div className="w-full md:w-1/2">
					<div className="relative">
						<input
							type="text"
							placeholder="Search projects..."
							value={searchQuery}
							onChange={(e) => onSearchChange(e.target.value)}
							className="w-full bg-[#1a1a1a] border border-[#333] rounded-full py-3 px-6 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 focus:border-[#22c55e] transition-all duration-300"
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
					{/* Results Count */}
					<div className="text-sm text-gray-400">
						{resultCount} result{resultCount !== 1 ? 's' : ''}
					</div>

					{/* View Mode Toggle */}
					<div className="flex bg-[#1a1a1a] rounded-full p-1">
						<button
							onClick={() => onViewModeChange('grid')}
							className={`p-2 rounded-full transition-all duration-200 ${
								viewMode === 'grid' ? 'bg-[#22c55e] text-black' : 'text-gray-400 hover:text-white'
							}`}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
								/>
							</svg>
						</button>
						<button
							onClick={() => onViewModeChange('list')}
							className={`p-2 rounded-full transition-all duration-200 ${
								viewMode === 'list' ? 'bg-[#22c55e] text-black' : 'text-gray-400 hover:text-white'
							}`}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</motion.div>

			{/* Category Description */}
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className="text-center"
			>
				<h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
					{currentCategory.name}
				</h2>
				<p className="text-gray-400">{currentCategory.description}</p>
			</motion.div>

			{/* Category Pills - Mobile and Desktop */}
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				className="flex flex-wrap gap-2 justify-center"
			>
				{categories.map((category) => (
					<button
						key={category.id}
						onClick={() => onCategoryChange(category.id)}
						className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
							selectedCategory === category.id
								? 'bg-[#22c55e] text-black shadow-lg shadow-[#22c55e]/25'
								: 'bg-[#1a1a1a] text-gray-400 hover:text-white hover:bg-[#333]/50'
						}`}
					>
						{category.name}
						{category.count && (
							<span className="ml-2 text-xs opacity-75">({category.count})</span>
						)}
					</button>
				))}
			</motion.div>
		</div>
	);
}
