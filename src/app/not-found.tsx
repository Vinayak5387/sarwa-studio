'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4 py-12">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-white">Page Not Found</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center space-y-4"
        >
          <Link 
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full 
              hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Return Home
          </Link>
          
          <Link
            href="/contact"
            className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r 
              from-purple-400 to-pink-600 transition-colors duration-300"
          >
            Contact Support
          </Link>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 2px, transparent 2px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
      </div>
    </div>
  );
}
