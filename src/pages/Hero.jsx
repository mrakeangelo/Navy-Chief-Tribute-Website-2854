import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageSquare, FiArrowRight, FiStar, FiAnchor } = FiIcons;

const Hero = () => {
  return (
    <div className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 naval-pattern"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <SafeIcon icon={FiAnchor} className="h-16 w-16 text-gold-500/20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <SafeIcon icon={FiStar} className="h-12 w-12 text-gold-500/20" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-gold-500 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559050520-67de3c37dfc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Chief Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 text-shadow"
          >
            Chief Michael J. Thompson
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gold-300 mb-8 font-inter"
          >
            A Life of Service, Leadership, and Legacy
          </motion.p>

          {/* Service Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {['U.S. Navy Chief', 'Reserve Recruiter', 'Mentor', 'Patriot'].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium border border-gold-500/30"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/messages"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors shadow-lg"
            >
              <SafeIcon icon={FiMessageSquare} className="mr-2 h-5 w-5" />
              Leave a Message
            </Link>
            <Link
              to="/timeline"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy-900 transition-colors"
            >
              Explore His Journey
              <SafeIcon icon={FiArrowRight} className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;