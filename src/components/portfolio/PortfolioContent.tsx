import { useState, useMemo } from 'react';
import { Project, ViewMode } from '../../types/portfolio';
import PortfolioCardGrid from './PortfolioCardGrid';

interface PortfolioContentProps {
	projects: Project[];
	selectedCategory: string;
	searchQuery: string;
}

export default function PortfolioContent({ projects, selectedCategory, searchQuery }: PortfolioContentProps) {
	const [viewMode, setViewMode] = useState<ViewMode>('grid');

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
	}, [projects, selectedCategory, searchQuery]);

	return (
		<div className="flex-grow">
			{/* Projects Grid/List */}
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
			) : (
				<PortfolioCardGrid projects={filteredProjects} viewMode={viewMode} />
			)}
		</div>
	);
}
