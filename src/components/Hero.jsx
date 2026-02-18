import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import FloatingParticles from './FloatingParticles'

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub size={18} />, url: 'https://github.com/mehulbh9', label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, url: 'https://linkedin.com/in/mehulbh9', label: 'LinkedIn' },
    { icon: <FiMail size={18} />, url: 'mailto:mehulbh9@gmail.com', label: 'Email' }
  ]

  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 300], [0, 80])
  const opacity = useTransform(scrollY, [0, 200], [1, 0.3])

  useEffect(() => {
    const img = new Image()
    img.src = '/logos/website_pic.jpg'
    img.onerror = () => console.warn('Hero image could not be loaded')
  }, [])

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 overflow-x-hidden overflow-y-auto relative bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950/30">
      {/* Floating particles - cosmic vibe like nareshkhatri.site */}
      <FloatingParticles />
      {/* Subtle accent orbs - kept dim so text stays readable */}
      <motion.div 
        className="absolute top-1/4 left-[15%] w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-[10%] w-48 h-48 bg-primary/8 rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      
      {/* Grid: text left, photo right - no overlap */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left column - text only, max width so it never overlaps photo */}
          <div className="order-2 lg:order-1 max-w-xl">
          {/* Social links - top right feel */}
          <motion.div 
            className="flex items-center gap-4 mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full border border-white/80 text-white hover:border-white flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Intro */}
          <motion.p
            className="text-white text-lg md:text-xl mb-4 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hey there, I'm
          </motion.p>

          {/* Name - first and last on separate lines, always visible */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-sm"
            style={{ fontFamily: 'Syne, sans-serif' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block">Mehul</span>
            <span className="block text-cyan-400">Bhardwaj</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-display font-bold text-white leading-tight">
              Data Science · AI · Program Management
            </span>
          </motion.div>

          {/* Availability badge */}
          <motion.p
            className="text-slate-200 text-base md:text-lg mb-8 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Currently at AMD Toronto · Open to collaborations
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-slate-200 text-base md:text-lg max-w-2xl leading-relaxed mb-10 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            A powerhouse combining data science, AI, and program management—technical depth 
            to build, strategic vision to lead, and the execution chops to ship at scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Link to="/projects">
              <motion.span
                className="inline-flex items-center px-6 py-3 bg-cyan-500 text-slate-900 font-semibold rounded-full hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work <FiArrowRight className="ml-2" />
              </motion.span>
            </Link>
            <a href="/2025_CV_MEHUL.pdf" download>
              <motion.span
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV <FiDownload className="ml-2" />
              </motion.span>
            </a>
          </motion.div>
          </div>

          {/* Right column - photo only, face clearly visible */}
          <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[75vh] min-h-[300px]">
            <motion.div 
              className="absolute inset-0 bg-cover bg-no-repeat rounded-2xl overflow-hidden shadow-2xl"
              style={{ 
                backgroundImage: 'url(/logos/website_pic.jpg)',
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
                filter: 'brightness(1.02) contrast(1.05)',
                y: bgY,
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
