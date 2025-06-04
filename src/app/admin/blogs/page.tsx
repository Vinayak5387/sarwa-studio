'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchingBlogs, setFetchingBlogs] = useState(true);
  const router = useRouter();

  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    image: '',
    excerpt: ''
  });

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setFetchingBlogs(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        setNewBlog({ title: '', content: '', image: '', excerpt: '' });
        await fetchBlogs(); // Refresh the blogs list
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) {
      return;
    }

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchBlogs(); // Refresh the blogs list
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
          Create New Blog Post
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Title</label>
            <input
              type="text"
              value={newBlog.title}
              onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Image URL</label>
            <input
              type="text"
              value={newBlog.image}
              onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Excerpt</label>
            <textarea
              value={newBlog.excerpt}
              onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Content</label>
            <textarea
              value={newBlog.content}
              onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
              rows={10}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating...' : 'Create Blog Post'}
          </button>
        </form>
      </div>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
          Published Blog Posts
        </h2>
        
        {fetchingBlogs ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No blog posts yet.</p>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog: any) => (
              <div 
                key={blog.id} 
                className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400">{blog.excerpt}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  {blog.image && (
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-24 h-24 object-cover rounded-lg ml-4"
                    />
                  )}
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => router.push(`/admin/blogs/edit/${blog.id}`)}
                    className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
