import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub size={18} />, url: 'https://github.com/mehulbh9', label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, url: 'https://linkedin.com/in/mehulbh9', label: 'LinkedIn' },
    { icon: <FiMail size={18} />, url: 'mailto:mehulbh9@gmail.com', label: 'Email' }
  ]
  
  const statsItems = [
    { value: '4+', label: 'Years Academic Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '3+', label: 'Tech Companies' }
  ]

  // Add effect to ensure the background image loads properly
  useEffect(() => {
    // This effect will check if mehul.png exists and console.log if it doesn't
    // We can replace this with proper error handling later
    const img = new Image();
    img.src = '/logos/mehul.png';
    img.onerror = () => console.warn('Background image could not be loaded');
  }, []);
  
  return (
    <section className="min-h-[92vh] flex items-center pt-20 overflow-hidden relative">
      {/* Background image container */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Background image - will be visible when file exists */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url(/logos/mehul.png)',
            opacity: 1,
            filter: 'brightness(1.1) contrast(1.1)'
          }}
        ></div>
        
        {/* Semi-transparent overlay - reducing opacity to show image better */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/60 to-transparent z-10"></div>
        
        {/* Remove the full-background gradient to let the image show through */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gray-50"></div> */}
        <div className="absolute top-1/4 left-[15%] w-64 h-64 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-1/3 right-[10%] w-40 h-40 bg-accent/5 rounded-full"></div>
        <div className="absolute top-2/3 left-[5%] w-20 h-20 bg-secondary/5 rounded-full"></div>
        <div className="absolute top-1/5 right-[20%] w-32 h-32 bg-primary/5 rounded-full"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="flex items-center mb-6 space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            
            <motion.span
              className="text-primary font-semibold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hello, I'm
            </motion.span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-4">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Mehul
              </motion.span>
              <motion.span
                className="block text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Bhardwaj
              </motion.span>
            </h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl text-secondary font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              EngSci Machine Learning Student @ University of Toronto
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-6 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I'm passionate about leveraging AI and machine learning to solve complex real-world problems. 
              With experience as a Data Scientist & Supply Chain Project Manager at AMD, I combine technical expertise 
              with practical business acumen to deliver innovative solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/projects" className="btn btn-primary">
                View My Work <FiArrowRight className="ml-2" />
              </Link>
              <a 
                href="/2025_CV_MEHUL.pdf" 
                download
                className="btn btn-outline"
              >
                Download CV <FiDownload className="ml-2" />
              </a>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {statsItems.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <span className="block text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="text-gray-500 text-xs">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Organized badge grid */}
            <div className="w-full h-full grid grid-cols-2 gap-4">
              {/* Top Row */}
              <motion.div 
                className="bg-white p-3 rounded-lg shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 2v20M2 5h20M2 19h20"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark">Machine Learning</h3>
                    <p className="text-xs text-gray-500">AI Specialist</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-3 rounded-lg shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark">Data Science</h3>
                    <p className="text-xs text-gray-500">AMD Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Middle Row */}
              <motion.div 
                className="bg-white p-3 rounded-lg shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark">Project Management</h3>
                    <p className="text-xs text-gray-500">Supply Chain Expert</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-3 rounded-lg shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark">Academic Excellence</h3>
                    <p className="text-xs text-gray-500">University of Toronto</p>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Row */}
              <motion.div 
                className="bg-white p-3 rounded-lg shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                      <path d="M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.961c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.961c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark">Research</h3>
                    <p className="text-xs text-gray-500">ML Applications</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-3 rounded-lg shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-cyan-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600">
                      <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
                      <polyline points="13 11 9 17 15 17 11 23"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark">Cloud Computing</h3>
                    <p className="text-xs text-gray-500">AWS & Azure</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 