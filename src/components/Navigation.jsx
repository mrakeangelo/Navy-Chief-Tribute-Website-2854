import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiAnchor, FiHome, FiClock, FiImage, FiMessageSquare, FiLock, FiUser, FiMail } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: FiHome },
    { path: '/timeline', label: 'Timeline', icon: FiClock },
    { path: '/gallery', label: 'Gallery', icon: FiImage },
    { path: '/messages', label: 'Messages', icon: FiMessageSquare },
    { path: '/time-capsule', label: 'Time Capsule', icon: FiLock },
    { path: '/current-role', label: 'Current Role', icon: FiUser },
    { path: '/contact', label: 'Contact', icon: FiMail },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <SafeIcon icon={FiAnchor} className="h-8 w-8 text-gold-500" />
            <span className="text-xl font-playfair font-bold text-white">Chief Legacy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-gold-500 bg-navy-800'
                    : 'text-white hover:text-gold-500 hover:bg-navy-800'
                }`}
              >
                <SafeIcon icon={item.icon} className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold-500 transition-colors"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-navy-900/95 backdrop-blur-md rounded-b-lg shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-gold-500 bg-navy-800'
                      : 'text-white hover:text-gold-500 hover:bg-navy-800'
                  }`}
                >
                  <SafeIcon icon={item.icon} className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;