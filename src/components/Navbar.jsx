import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  const toggleMenu = () => setIsOpen(!isOpen)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ]
  
  const isLightNav = false
  
  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-black/10 py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.span 
            className="text-2xl font-bold font-display mr-1 text-white"
            whileHover={{ scale: 1.05 }}
          >
            MB
          </motion.span>
          <motion.span 
            className="font-display text-xl font-semibold hidden sm:inline-block text-white/90"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Mehul Bhardwaj
          </motion.span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <motion.li key={link.path} whileHover={{ y: -2 }}>
                <Link 
                  to={link.path}
                  className={`font-medium transition-colors ${
                    isLightNav 
                      ? (location.pathname === link.path ? 'text-primary font-semibold' : 'text-dark hover:text-primary')
                      : (location.pathname === link.path ? 'text-white font-semibold' : 'text-white/70 hover:text-white')
                  }`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <motion.button 
          className="md:hidden p-2 rounded-lg transition-colors touch-manipulation text-white hover:bg-white/10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
        
        {/* Mobile Menu - slide down with backdrop */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div 
                className="absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl shadow-2xl md:hidden z-50 overflow-hidden"
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <ul className="flex flex-col py-4">
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={link.path} 
                      className="px-6 py-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                    >
                      <Link 
                        to={link.path}
                        className={`block font-medium py-2 transition-colors ${
                          location.pathname === link.path ? 'text-cyan-400 font-semibold' : 'text-white/90 hover:text-cyan-400'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Navbar 