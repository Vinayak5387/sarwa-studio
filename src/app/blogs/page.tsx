'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconBase } from 'react-icons';
import { 
  FaSearch as SearchIcon, 
  FaClock as ClockIcon, 
  FaTag as TagIcon, 
  FaShare as ShareIcon,
  FaTwitter as TwitterIcon, 
  FaLinkedin as LinkedInIcon, 
  FaFacebook as FacebookIcon 
} from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  createdAt: string;
  tags: string[];
  readingTime?: string;
}

const Icon = ({ icon: IconComponent, className }: { icon: typeof IconBase; className?: string }) => {
  return <span className={className}><IconComponent size={16} /></span>;
};

const POSTS_PER_PAGE = 6;

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [allTags, setAllTags] = useState<string[]>([]);

  // Calculate reading time based on content
  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (response.ok) {
          const data = await response.json();
          // Add reading time and collect all tags
          const processedBlogs = data.map((blog: BlogPost) => ({
            ...blog,
            readingTime: calculateReadingTime(blog.content)
          }));
          setBlogs(processedBlogs);

          // Extract all unique tags
          const tags = new Set(processedBlogs.flatMap((blog: BlogPost) => blog.tags || []));
          setAllTags(Array.from(tags) as string[]);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Animation variants for Framer Motion
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 0.95, y: 0 }
  };

  // Filter blogs based on search and tags
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? blog.tags?.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleShare = (blog: BlogPost, platform: string) => {
    const url = `${window.location.origin}/blogs/${blog.id}`;
    const text = `Check out this article: ${blog.title}`;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Our Blog
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights, updates, and stories from the Sarwa Studio team
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Icon icon={SearchIcon} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500 text-gray-100"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedTag('')}
              className={`px-4 py-2 rounded-full text-sm ${
                !selectedTag
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedTag === tag
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {paginatedBlogs.length === 0 ? (
          <div className="text-center text-gray-400">No matching blog posts found.</div>
        ) : (
          <>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {paginatedBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  variants={item}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
                >
                  <Link href={`/blogs/${blog.id}`}>
                    {blog.image && (
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {blog.title}
                      </h2>
                      <p className="text-gray-400 mb-4 line-clamp-2">{blog.excerpt}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Icon icon={ClockIcon} className="text-purple-400" />
                          <span>{blog.readingTime}</span>
                        </div>
                        {blog.tags && blog.tags.length > 0 && (
                          <div className="flex items-center gap-1">
                            <Icon icon={TagIcon} className="text-purple-400" />
                            <span>{blog.tags[0]}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-700 mt-4 pt-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleShare(blog, 'twitter')}
                          className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                          aria-label="Share on Twitter"
                        >
                          <Icon icon={TwitterIcon} className="text-gray-400 hover:text-purple-400" />
                        </button>
                        <button
                          onClick={() => handleShare(blog, 'linkedin')}
                          className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                          aria-label="Share on LinkedIn"
                        >
                          <Icon icon={LinkedInIcon} className="text-gray-400 hover:text-purple-400" />
                        </button>
                        <button
                          onClick={() => handleShare(blog, 'facebook')}
                          className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                          aria-label="Share on Facebook"
                        >
                          <Icon icon={FacebookIcon} className="text-gray-400 hover:text-purple-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12 gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded ${
                      currentPage === page
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
