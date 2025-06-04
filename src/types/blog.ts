export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  readingTime?: string;
  isDraft?: boolean;
}

export interface BlogListResponse {
  blogs: BlogPost[];
  totalCount: number;
}

export interface BlogError {
  error: string;
  details?: string;
}
