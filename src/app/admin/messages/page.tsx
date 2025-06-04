'use client';
import { useState, useEffect } from 'react';

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/messages');
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Contact Messages
      </h2>

      {messages.length === 0 ? (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 text-center">
          <p className="text-gray-400">No messages yet.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {messages.map((message: any) => (
            <div 
              key={message.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{message.name}</h3>
                  <p className="text-gray-400">{message.email}</p>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(message.timestamp).toLocaleDateString()}
                </span>
              </div>
              
              <div className="border-t border-gray-700 my-4"></div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-400">Subject:</label>
                  <p className="text-white">{message.subject}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Message:</label>
                  <p className="text-white whitespace-pre-wrap">{message.message}</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={async () => {
                    // Handle reply functionality
                    window.location.href = `mailto:${message.email}?subject=Re: ${message.subject}`;
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Reply
                </button>
                <button
                  onClick={async () => {
                    // Handle delete functionality
                    if (confirm('Are you sure you want to delete this message?')) {
                      try {
                        await fetch(`/api/messages/${message.id}`, {
                          method: 'DELETE',
                        });
                        setMessages(messages.filter((m: any) => m.id !== message.id));
                      } catch (error) {
                        console.error('Error deleting message:', error);
                      }
                    }
                  }}
                  className="px-4 py-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
