import Link from 'next/link';
import Image from 'next/image';
import { Project, ViewMode } from '../../types/portfolio';

interface PortfolioCardProps {
	project: Project;
	viewMode: ViewMode;
}

export default function PortfolioCard({ project, viewMode }: PortfolioCardProps) {
	if (viewMode === 'list') {
		return (
			<div className="group">
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
							{project.year && (
								<p className="text-sm text-gray-500 mb-2">Year: {project.year}</p>
							)}
							{project.client && (
								<p className="text-sm text-gray-500 mb-2">Client: {project.client}</p>
							)}
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
			</div>
		);
	}

	return (
		<div className="group">
			<Link
				href={`/portfolio/${project.id}`}
				className="block bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:transform hover:scale-[1.02] transition-all duration-500 relative"
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
					<div className="flex justify-between items-start mb-2">
						<h3 className="text-xl font-bold">{project.title}</h3>
						{project.year && (
							<span className="text-sm text-gray-500">{project.year}</span>
						)}
					</div>
					<p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
					{project.client && (
						<p className="text-sm text-gray-500 mb-3">Client: {project.client}</p>
					)}
					<div className="flex flex-wrap gap-2">
						{project.tags.slice(0, 3).map((tag, i) => (
							<span
								key={i}
								className="text-xs bg-[#333] text-gray-300 px-2 py-1 rounded-full"
							>
								{tag}
							</span>
						))}
						{project.tags.length > 3 && (
							<span className="text-xs bg-[#333] text-gray-300 px-2 py-1 rounded-full">
								+{project.tags.length - 3} more
							</span>
						)}
					</div>
				</div>
				<div className="absolute bottom-0 left-0 w-full h-1 bg-[#22c55e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
			</Link>
		</div>
	);
}
