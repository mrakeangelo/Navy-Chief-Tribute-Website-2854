import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUnlock, FiClock, FiEdit, FiCalendar, FiGift } = FiIcons;

const TimeCapsule = () => {
  const [newCapsule, setNewCapsule] = useState({
    title: '',
    content: '',
    unlockDate: '',
    type: 'letter'
  });

  const [capsules, setCapsules] = useState([
    {
      id: 1,
      title: 'Retirement Reflections',
      content: 'Dear Future Self, As I write this on the eve of my retirement...',
      unlockDate: '2027-01-01',
      createdDate: '2024-01-15',
      type: 'letter',
      isLocked: true
    },
    {
      id: 2,
      title: 'Leadership Lessons',
      content: 'The most important thing I learned about leadership is...',
      unlockDate: '2025-06-15',
      createdDate: '2024-01-10',
      type: 'wisdom',
      isLocked: true
    },
    {
      id: 3,
      title: 'Navy Memories',
      content: 'Looking back on my naval career, the moments that defined me were...',
      unlockDate: '2024-12-31',
      createdDate: '2024-01-05',
      type: 'memories',
      isLocked: false
    },
    {
      id: 4,
      title: 'Family Message',
      content: 'To my family, thank you for supporting me through every deployment...',
      unlockDate: '2026-01-01',
      createdDate: '2024-01-01',
      type: 'family',
      isLocked: true
    }
  ]);

  const calculateTimeRemaining = (unlockDate) => {
    const now = new Date();
    const unlock = new Date(unlockDate);
    const diff = unlock - now;
    
    if (diff <= 0) return 'Unlocked';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 30;
    
    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''}, ${months} month${months > 1 ? 's' : ''}`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? 's' : ''}, ${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
    } else {
      return `${days} day${days > 1 ? 's' : ''}`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCapsule.title && newCapsule.content && newCapsule.unlockDate) {
      const capsule = {
        id: capsules.length + 1,
        title: newCapsule.title,
        content: newCapsule.content,
        unlockDate: newCapsule.unlockDate,
        createdDate: new Date().toISOString().split('T')[0],
        type: newCapsule.type,
        isLocked: new Date(newCapsule.unlockDate) > new Date()
      };
      setCapsules([capsule, ...capsules]);
      setNewCapsule({ title: '', content: '', unlockDate: '', type: 'letter' });
    }
  };

  const getCapsuleIcon = (type) => {
    switch (type) {
      case 'letter': return FiEdit;
      case 'wisdom': return FiGift;
      case 'memories': return FiClock;
      case 'family': return FiCalendar;
      default: return FiLock;
    }
  };

  const getCapsuleColor = (type) => {
    switch (type) {
      case 'letter': return 'bg-blue-100 text-blue-800';
      case 'wisdom': return 'bg-purple-100 text-purple-800';
      case 'memories': return 'bg-green-100 text-green-800';
      case 'family': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
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
            Time Capsule
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Letters to your future self - reflections, wisdom, and memories to be unlocked at the perfect moment
          </p>
        </motion.div>

        {/* Create New Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-playfair font-bold text-navy-900 mb-6 flex items-center">
            <SafeIcon icon={FiEdit} className="mr-3 h-6 w-6 text-gold-500" />
            Create New Time Capsule
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Capsule Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={newCapsule.title}
                  onChange={(e) => setNewCapsule({...newCapsule, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Give your capsule a meaningful title"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  Capsule Type
                </label>
                <select
                  id="type"
                  value={newCapsule.type}
                  onChange={(e) => setNewCapsule({...newCapsule, type: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                >
                  <option value="letter">Personal Letter</option>
                  <option value="wisdom">Leadership Wisdom</option>
                  <option value="memories">Navy Memories</option>
                  <option value="family">Family Message</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="unlockDate" className="block text-sm font-medium text-gray-700 mb-2">
                Unlock Date
              </label>
              <input
                type="date"
                id="unlockDate"
                value={newCapsule.unlockDate}
                onChange={(e) => setNewCapsule({...newCapsule, unlockDate: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="content"
                rows="6"
                value={newCapsule.content}
                onChange={(e) => setNewCapsule({...newCapsule, content: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Write your message to your future self..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gold-500 text-navy-900 font-semibold py-3 px-6 rounded-lg hover:bg-gold-400 transition-colors flex items-center justify-center"
            >
              <SafeIcon icon={FiLock} className="mr-2 h-5 w-5" />
              Create Time Capsule
            </button>
          </form>
        </motion.div>

        {/* Capsules Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {capsules.map((capsule, index) => (
            <motion.div
              key={capsule.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden card-hover ${
                capsule.isLocked ? 'opacity-75' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${getCapsuleColor(capsule.type)}`}>
                      <SafeIcon icon={getCapsuleIcon(capsule.type)} className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-playfair font-semibold text-navy-900">
                        {capsule.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Created: {new Date(capsule.createdDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <SafeIcon 
                      icon={capsule.isLocked ? FiLock : FiUnlock} 
                      className={`h-5 w-5 ${capsule.isLocked ? 'text-red-500' : 'text-green-500'}`} 
                    />
                  </div>
                </div>
                
                {capsule.isLocked ? (
                  <div className="text-center py-8">
                    <SafeIcon icon={FiClock} className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Unlocks in:</p>
                    <p className="text-2xl font-bold text-gold-500">
                      {calculateTimeRemaining(capsule.unlockDate)}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {new Date(capsule.unlockDate).toLocaleDateString()}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {capsule.content}
                    </p>
                    <button className="w-full bg-green-100 text-green-800 py-2 px-4 rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center">
                      <SafeIcon icon={FiUnlock} className="mr-2 h-4 w-4" />
                      Read Full Message
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-navy-900 rounded-xl p-8 text-center"
        >
          <SafeIcon icon={FiGift} className="h-12 w-12 text-gold-500 mx-auto mb-4" />
          <h3 className="text-2xl font-playfair font-bold text-white mb-4">
            A Gift to Your Future Self
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Time capsules are a powerful way to capture your thoughts, wisdom, and emotions at this pivotal moment in your life. 
            Your future self will thank you for these precious glimpses into your journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold text-gold-500 mb-2">{capsules.length}</div>
              <div className="text-gray-300">Capsules Created</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold-500 mb-2">
                {capsules.filter(c => c.isLocked).length}
              </div>
              <div className="text-gray-300">Still Locked</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold-500 mb-2">
                {capsules.filter(c => !c.isLocked).length}
              </div>
              <div className="text-gray-300">Ready to Read</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimeCapsule;