import { motion, AnimatePresence } from 'framer-motion';
import { Project, ViewMode } from '../../types/portfolio';
import PortfolioCard from './PortfolioCard';

interface PortfolioCardGridProps {
	projects: Project[];
	viewMode: ViewMode;
}

export default function PortfolioCardGrid({ projects, viewMode }: PortfolioCardGridProps) {
	return (
		<div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8' : 'space-y-6'}>
			<AnimatePresence>
				{projects.map((project, index) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.3, delay: index * 0.1 }}
					>
						<PortfolioCard project={project} viewMode={viewMode} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}
