import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiCalendar, FiAward, FiUsers } = FiIcons;

const Timeline = () => {
  const timelineData = [
    {
      year: '2005-2009',
      title: 'Petty Officer Third Class',
      location: 'Naval Station Norfolk, VA',
      description: 'Began naval career with distinction in communications and electronics. Demonstrated exceptional leadership potential and technical expertise.',
      image: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      achievements: ['Communications Specialist', 'Honor Graduate', 'Volunteer of the Year']
    },
    {
      year: '2009-2013',
      title: 'Petty Officer Second Class',
      location: 'USS Enterprise (CVN-65)',
      description: 'Served aboard the legendary USS Enterprise during multiple deployments. Led communications team through critical operations.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      achievements: ['Deployment Ribbon', 'Team Leader', 'Meritorious Service']
    },
    {
      year: '2013-2017',
      title: 'Petty Officer First Class',
      location: 'Naval Air Station Pensacola, FL',
      description: 'Advanced to senior enlisted leadership role. Mentored junior sailors and managed complex training programs.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      achievements: ['Training Instructor', 'Mentor Award', 'Leadership Excellence']
    },
    {
      year: '2017-2021',
      title: 'Senior Chief Petty Officer',
      location: 'Naval Reserve Center, San Diego, CA',
      description: 'Promoted to Senior Chief, overseeing recruitment and training operations. Recognized for exceptional service and dedication.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      achievements: ['Recruitment Excellence', 'Community Outreach', 'Senior Leader']
    },
    {
      year: '2021-Present',
      title: 'Chief Petty Officer',
      location: 'Naval Reserve Recruiting Command',
      description: 'Currently serving as Chief and Reserve Recruiter, inspiring the next generation of sailors while preparing for well-deserved retirement.',
      image: 'https://images.unsplash.com/photo-1559050520-67de3c37dfc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      achievements: ['Chief Promotion', 'Recruiter of the Year', 'Legacy Builder']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-navy-900 mb-6">
            Career Timeline
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through decades of distinguished service, leadership, and unwavering commitment to the United States Navy
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 timeline-line"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gold-500 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <SafeIcon icon={FiCalendar} className="h-4 w-4" />
                        <span className="text-sm font-medium">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-playfair font-bold">{item.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <SafeIcon icon={FiMapPin} className="h-4 w-4 text-gold-500" />
                      <span className="text-sm font-medium text-gray-600">{item.location}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gold-100 text-gold-800 text-xs font-medium rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-navy-900 rounded-xl p-8 text-white">
            <SafeIcon icon={FiAward} className="h-12 w-12 text-gold-500 mx-auto mb-4" />
            <h3 className="text-2xl font-playfair font-bold mb-4">
              A Legacy of Excellence
            </h3>
            <p className="text-gray-300 mb-6">
              Over two decades of distinguished service, countless lives impacted, and a legacy that will inspire generations of sailors to come.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-500">20+</div>
                <div className="text-gray-300">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-500">100+</div>
                <div className="text-gray-300">Sailors Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-500">5</div>
                <div className="text-gray-300">Duty Stations</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;