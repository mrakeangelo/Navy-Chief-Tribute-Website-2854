import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageSquare, FiHeart, FiSend, FiUser, FiCalendar } = FiIcons;

const Messages = () => {
  const [newMessage, setNewMessage] = useState({
    name: '',
    message: '',
    photo: null
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Admiral Sarah Johnson',
      message: 'Chief Thompson, your dedication to excellence and unwavering commitment to our sailors has been truly inspiring. Congratulations on your promotion and thank you for your outstanding service.',
      date: '2024-01-15',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Petty Officer Martinez',
      message: 'Chief, you changed my life when you took me under your wing. Your leadership and mentorship made me the sailor I am today. Thank you for believing in me when I didn\'t believe in myself.',
      date: '2024-01-14',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Commander Roberts',
      message: 'Working alongside you has been one of the greatest privileges of my career. Your integrity, professionalism, and dedication to our mission are unmatched. Fair winds and following seas, Chief.',
      date: '2024-01-13',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'Mary Thompson',
      message: 'Dad, I\'m so proud of everything you\'ve accomplished. You\'ve always been my hero, and watching you serve our country with such honor and dedication has been incredible. Love you!',
      date: '2024-01-12',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 5,
      name: 'Senior Chief Wilson',
      message: 'Chief Thompson, your leadership in the recruiting command has been exceptional. You\'ve helped shape the future of our Navy by bringing in outstanding young men and women. Thank you for your service.',
      date: '2024-01-11',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        name: newMessage.name,
        message: newMessage.message,
        date: new Date().toISOString().split('T')[0],
        avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '', photo: null });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-navy-900 mb-6">
            Messages of Congratulations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your thoughts, memories, and congratulations for Chief Thompson's remarkable career and upcoming retirement
          </p>
        </motion.div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-playfair font-bold text-navy-900 mb-6 flex items-center">
            <SafeIcon icon={FiMessageSquare} className="mr-3 h-6 w-6 text-gold-500" />
            Leave a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={newMessage.name}
                onChange={(e) => setNewMessage({...newMessage, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={newMessage.message}
                onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Share your congratulations, memories, or thoughts..."
                required
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
                Optional Photo
              </label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={(e) => setNewMessage({...newMessage, photo: e.target.files[0]})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gold-500 text-navy-900 font-semibold py-3 px-6 rounded-lg hover:bg-gold-400 transition-colors flex items-center justify-center"
            >
              <SafeIcon icon={FiSend} className="mr-2 h-5 w-5" />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Messages Wall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-playfair font-bold text-navy-900 mb-8 flex items-center">
            <SafeIcon icon={FiHeart} className="mr-3 h-6 w-6 text-gold-500" />
            Wall of Thanks ({messages.length} messages)
          </h2>
          
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 card-hover"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={message.avatar}
                    alt={message.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-navy-900">{message.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <SafeIcon icon={FiCalendar} className="mr-1 h-4 w-4" />
                      {new Date(message.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{message.message}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-navy-900 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-playfair font-bold text-white mb-6">
            Community Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-gold-500 mb-2">{messages.length}</div>
              <div className="text-gray-300">Messages Received</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-500 mb-2">15</div>
              <div className="text-gray-300">Photos Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-500 mb-2">2.5K</div>
              <div className="text-gray-300">Page Views</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Messages;