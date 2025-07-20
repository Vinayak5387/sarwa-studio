export interface Project {
	id: string;
	title: string;
	description: string;
	category: string;
	image: string;
	featured: boolean;
	tags: string[];
	year?: string;
	client?: string;
	link?: string;
	images?: string[];
}

export interface Category {
	id: string;
	name: string;
	description: string;
	icon?: string;
	count?: number;
}

export type ViewMode = 'grid' | 'list';

export interface FilterOptions {
	category: string;
	search: string;
	sortBy: 'title' | 'date' | 'featured';
	sortOrder: 'asc' | 'desc';
}
