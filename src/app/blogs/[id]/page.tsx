'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconBase } from 'react-icons';
import { 
  FaClock as ClockIcon, 
  FaCalendar as CalendarIcon,
  FaUser as UserIcon,
  FaTag as TagIcon,
  FaTwitter as TwitterIcon,
  FaLinkedin as LinkedInIcon,
  FaFacebook as FacebookIcon,
  FaArrowLeft as ArrowLeftIcon
} from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  tags: string[];
  createdAt: string;
  readingTime?: string;
}

const Icon = ({ icon: IconComponent, className }: { icon: typeof IconBase; className?: string }) => {
  return <span className={className}><IconComponent size={16} /></span>;
};

const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
};

export default function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        const data = await response.json();
        setBlog({
          ...data,
          readingTime: calculateReadingTime(data.content)
        });
      } catch (err) {
        setError('Failed to load blog post. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  const handleShare = (platform: string) => {
    if (!blog) return;

    const url = window.location.href;
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
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Error</h1>
          <p className="text-gray-400">{error || 'Blog post not found'}</p>
          <Link href="/blogs" className="mt-8 inline-flex items-center text-purple-400 hover:text-purple-300">
            <Icon icon={ArrowLeftIcon} className="mr-2" />
            Back to all blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <article className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/blogs" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
            <Icon icon={ArrowLeftIcon} className="mr-2" />
            Back to all blogs
          </Link>

          {blog.image && (
            <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{blog.title}</h1>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <Icon icon={UserIcon} className="text-purple-400" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon={CalendarIcon} className="text-purple-400" />
              <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon={ClockIcon} className="text-purple-400" />
              <span>{blog.readingTime}</span>
            </div>
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <Icon icon={TagIcon} className="text-purple-400" />
                {blog.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="bg-gray-800 px-3 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Social Share Buttons */}
          <div className="flex gap-4 mb-12">
            <button
              onClick={() => handleShare('twitter')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label="Share on Twitter"
            >
              <Icon icon={TwitterIcon} className="text-purple-400" />
              <span>Tweet</span>
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Icon icon={LinkedInIcon} className="text-purple-400" />
              <span>Share</span>
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label="Share on Facebook"
            >
              <Icon icon={FacebookIcon} className="text-purple-400" />
              <span>Share</span>
            </button>
          </div>

          {/* Blog Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {blog.tags && blog.tags.map(tag => (
                <Link
                  key={tag}
                  href={`/blogs?tag=${encodeURIComponent(tag)}`}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
