"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md
                ${scrolled 
                  ? 'bg-black/80 shadow-lg shadow-teal-500/5 border-b border-teal-900/30' 
                  : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="flex-shrink-0 text-3xl font-bold bg-gradient-to-r from-pink-900 via-blue-400 to-purple-800 
                         bg-clip-text text-transparent hover:from-pink-800 hover:via-blue-300 hover:to-purple-700 
                         transition-all duration-300"
            >
              Tayyab.
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white 
                           transition-colors duration-300 rounded-md group"
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-900 via-blue-400 to-purple-800 
                             transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 text-sm font-semibold text-white 
                       bg-gradient-to-r from-pink-900 via-blue-400 to-purple-800 
                       rounded-lg hover:from-pink-800 hover:via-blue-300 hover:to-purple-700 
                       transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
            >
              Hire Me
            </motion.button>
          </nav>

          {/* Mobile Menu Button with animation */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md 
                      focus:outline-none text-white "
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6 ">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="absolute w-full h-0.5 bg-current transform transition-transform"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute w-full h-0.5 bg-current top-2.5"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 5 }}
                className="absolute w-full h-0.5 bg-current transform transition-transform"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation with AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-gray-900/90 backdrop-blur-sm rounded-b-2xl"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-300 
                               hover:text-white hover:bg-gray-800/50 rounded-lg 
                               transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;