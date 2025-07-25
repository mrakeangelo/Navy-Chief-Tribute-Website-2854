import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiTarget, FiTrendingUp, FiAward, FiMapPin, FiPhone, FiMail } = FiIcons;

const CurrentRole = () => {
  const achievements = [
    {
      metric: '150+',
      label: 'Sailors Recruited',
      description: 'Outstanding recruitment numbers over the past 3 years'
    },
    {
      metric: '95%',
      label: 'Success Rate',
      description: 'Percentage of recruits who successfully complete training'
    },
    {
      metric: '25+',
      label: 'Community Events',
      description: 'Naval outreach programs and school visits organized'
    },
    {
      metric: '4.9/5',
      label: 'Satisfaction Rating',
      description: 'Average rating from recruits and their families'
    }
  ];

  const testimonials = [
    {
      name: 'Seaman Recruit Johnson',
      message: 'Chief Thompson believed in me when I didn\'t believe in myself. His guidance helped me find my path in the Navy.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Mrs. Sarah Davis (Parent)',
      message: 'Chief Thompson took the time to address all our concerns about my son joining the Navy. His professionalism and care were exceptional.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Petty Officer Martinez',
      message: 'The Chief\'s mentorship didn\'t end at recruitment. He continues to check on our progress and celebrate our achievements.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const responsibilities = [
    {
      icon: FiUsers,
      title: 'Recruitment & Selection',
      description: 'Identifying and recruiting high-quality candidates for Navy service across multiple communities'
    },
    {
      icon: FiTarget,
      title: 'Community Outreach',
      description: 'Building relationships with schools, community organizations, and local leaders to promote Navy opportunities'
    },
    {
      icon: FiTrendingUp,
      title: 'Performance Management',
      description: 'Tracking recruitment metrics, analyzing trends, and implementing strategies to exceed targets'
    },
    {
      icon: FiAward,
      title: 'Mentorship & Training',
      description: 'Providing guidance to new recruits and training junior recruiters in best practices'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-navy-900 mb-6">
            Navy Reserve Recruiter
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building the future of our Navy, one exceptional sailor at a time
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1559050520-67de3c37dfc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Chief Thompson at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 to-transparent"></div>
            </div>
            
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-playfair font-bold text-navy-900 mb-6">
                Leading Navy Recruitment Excellence
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As a Navy Reserve Recruiter, Chief Thompson combines his extensive naval experience with exceptional interpersonal skills to identify and guide the next generation of sailors. His approach goes beyond recruitment – he's a mentor, advisor, and advocate for every person who walks through his door.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <SafeIcon icon={FiMapPin} className="h-5 w-5 text-gold-500" />
                <span className="text-gray-600">Naval Reserve Recruiting Station, San Diego</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+1-555-0123"
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
                >
                  <SafeIcon icon={FiPhone} className="mr-2 h-5 w-5" />
                  Contact Chief Thompson
                </a>
                <a
                  href="mailto:chief.thompson@navy.mil"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors"
                >
                  <SafeIcon icon={FiMail} className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center card-hover">
              <div className="text-4xl font-bold text-gold-500 mb-2">{achievement.metric}</div>
              <div className="text-lg font-semibold text-navy-900 mb-2">{achievement.label}</div>
              <div className="text-sm text-gray-600">{achievement.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-navy-900 text-center mb-12">
            Key Responsibilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 p-3 rounded-lg">
                    <SafeIcon icon={responsibility.icon} className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">
                      {responsibility.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {responsibility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-navy-900 text-center mb-12">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-navy-900">{testimonial.name}</h3>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-gold-500">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.message}"
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-navy-900 rounded-xl p-8 text-center"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-6">
            Ready to Serve Your Country?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Chief Thompson is here to guide you through your Navy journey. Whether you're interested in active duty or reserve opportunities, 
            he'll help you find the perfect path to serve your country while building your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-555-0123"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors"
            >
              <SafeIcon icon={FiPhone} className="mr-2 h-5 w-5" />
              Schedule a Meeting
            </a>
            <a
              href="https://navy.mil/careers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy-900 transition-colors"
            >
              Learn More About Navy Careers
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CurrentRole;