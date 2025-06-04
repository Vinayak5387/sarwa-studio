'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        onClick={() => router.push('/admin/blogs')}
        className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg hover:shadow-purple-500/10 cursor-pointer transition-all duration-300 hover:-translate-y-1"
      >
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          Manage Blogs
        </h2>
        <p className="text-gray-400">
          Create, edit, and delete blog posts. Manage your content easily.
        </p>
      </div>

      <div 
        onClick={() => router.push('/admin/messages')}
        className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg hover:shadow-purple-500/10 cursor-pointer transition-all duration-300 hover:-translate-y-1"
      >
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          View Messages
        </h2>
        <p className="text-gray-400">
          Check messages from your contact form. Stay in touch with your clients.
        </p>
      </div>
    </div>
  );
}
