import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFilter, FiX, FiPlay, FiMaximize2 } = FiIcons;

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'deployment', label: 'Deployment' },
    { id: 'training', label: 'Training' },
    { id: 'ceremonies', label: 'Ceremonies' },
    { id: 'family', label: 'Family' },
    { id: 'videos', label: 'Videos' }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'deployment',
      title: 'USS Enterprise Deployment',
      description: 'Aboard the legendary USS Enterprise during Pacific deployment'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'training',
      title: 'Communications Training',
      description: 'Leading communications training at Naval Station Norfolk'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559050520-67de3c37dfc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'ceremonies',
      title: 'Chief Promotion Ceremony',
      description: 'The moment of promotion to Chief Petty Officer'
    },
    {
      id: 4,
      type: 'video',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'videos',
      title: 'Leadership Message',
      description: 'Inspiring words for new recruits'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'family',
      title: 'Family Day',
      description: 'Celebrating with family at the base'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1574631708501-cf0be4e5e20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'deployment',
      title: 'At Sea Operations',
      description: 'Coordinating operations during deployment'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'training',
      title: 'Technical Training',
      description: 'Advanced electronics and communications training'
    },
    {
      id: 8,
      type: 'video',
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'videos',
      title: 'Retirement Announcement',
      description: 'Announcing upcoming retirement plans'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-navy-900 mb-6">
            Photo & Video Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments of service, leadership, and the bonds forged through a distinguished naval career
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer"
              onClick={() => setLightboxImage(item)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <SafeIcon icon={FiPlay} className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                )}
                
                {/* Expand Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <SafeIcon icon={FiMaximize2} className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-playfair font-semibold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-playfair font-bold text-navy-900 mb-4">
              Share Your Memories
            </h3>
            <p className="text-gray-600 mb-6">
              Have photos or videos to contribute? Help us build this gallery of memories.
            </p>
            <button className="px-6 py-3 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors">
              Upload Media
            </button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold-500 transition-colors"
            >
              <SafeIcon icon={FiX} className="h-8 w-8" />
            </button>
            
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-xl font-playfair font-bold text-white mb-2">
                {lightboxImage.title}
              </h3>
              <p className="text-gray-300">
                {lightboxImage.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;