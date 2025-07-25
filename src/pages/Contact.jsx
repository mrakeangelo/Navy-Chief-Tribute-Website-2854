import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiCalendar, FiGlobe } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      type: 'general'
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtitle: 'Available Mon-Fri, 9AM-5PM PST'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: 'chief.thompson@navy.mil',
      subtitle: 'Response within 24 hours'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      details: 'Naval Reserve Recruiting Station',
      subtitle: 'San Diego, California'
    },
    {
      icon: FiGlobe,
      title: 'Website',
      details: 'navy.mil/careers',
      subtitle: 'Official Navy Careers Portal'
    }
  ];

  const upcomingEvents = [
    {
      date: '2024-02-15',
      title: 'Retirement Ceremony',
      location: 'Naval Base San Diego',
      time: '2:00 PM PST'
    },
    {
      date: '2024-02-20',
      title: 'Career Fair',
      location: 'San Diego Convention Center',
      time: '10:00 AM - 4:00 PM'
    },
    {
      date: '2024-03-01',
      title: 'Speaking Engagement',
      location: 'Local High School',
      time: '1:00 PM PST'
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
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're interested in Navy careers, have questions about service, or want to connect with Chief Thompson, we're here to help
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-playfair font-bold text-navy-900 mb-6">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="recruitment">Navy Recruitment</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="media">Media Request</option>
                      <option value="personal">Personal Message</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Brief subject line"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gold-500 text-navy-900 font-semibold py-3 px-6 rounded-lg hover:bg-gold-400 transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiSend} className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Events */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-playfair font-bold text-navy-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-gold-100 p-2 rounded-lg">
                      <SafeIcon icon={info.icon} className="h-5 w-5 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">{info.title}</h4>
                      <p className="text-gray-700 font-medium">{info.details}</p>
                      <p className="text-gray-500 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-playfair font-bold text-navy-900 mb-6 flex items-center">
                <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5 text-gold-500" />
                Upcoming Events
              </h3>
              
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-gold-500 pl-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-navy-900">{event.title}</h4>
                        <p className="text-gray-600 text-sm">{event.location}</p>
                        <p className="text-gray-500 text-sm">{event.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gold-600 font-medium text-sm">
                          {new Date(event.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-navy-900 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-playfair font-bold text-white mb-6">
                Quick Links
              </h3>
              
              <div className="space-y-3">
                <a
                  href="https://navy.mil/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-gold-500 transition-colors"
                >
                  Navy Careers Portal
                </a>
                <a
                  href="https://navy.mil/reserve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-gold-500 transition-colors"
                >
                  Navy Reserve Information
                </a>
                <a
                  href="tel:+1-555-123-4567"
                  className="block text-gray-300 hover:text-gold-500 transition-colors"
                >
                  Call Recruiting Office
                </a>
                <a
                  href="mailto:chief.thompson@navy.mil"
                  className="block text-gray-300 hover:text-gold-500 transition-colors"
                >
                  Email Chief Thompson
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <h3 className="text-xl font-playfair font-bold text-navy-900 mb-4">
              Naval Reserve Recruiting Station
            </h3>
            <p className="text-gray-600 mb-4">
              Located in the heart of San Diego, our recruiting station serves the greater San Diego area and surrounding communities.
            </p>
          </div>
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon={FiMapPin} className="h-12 w-12 text-gold-500 mx-auto mb-2" />
              <p className="text-gray-600">Interactive Map</p>
              <p className="text-sm text-gray-500">San Diego, California</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;