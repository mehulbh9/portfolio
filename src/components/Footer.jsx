import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/mehulbh9', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/mehulbh9', label: 'LinkedIn' },
    { icon: <FiMail size={20} />, url: 'mailto:mehulbh9@gmail.com', label: 'Email' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ]
  
  const relevantLinks = [
    { name: 'University of Toronto', url: 'https://www.utoronto.ca/' },
    { name: 'AMD', url: 'https://www.amd.com/' },
    { name: 'GEI Consultants', url: 'https://www.geiconsultants.com/' },
    { name: 'SEDS Canada', url: 'https://www.seds.ca/' }
  ]
  
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold mb-4 inline-block hover:text-primary transition-colors">
              Mehul Bhardwaj
            </Link>
            <p className="text-gray-300 mb-6 max-w-xs">
              Engineering Science Machine Learning Student at University of Toronto with experience in 
              AI, data science, and supply chain management.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-300 hover:text-primary transition-colors"
                  whileHover={{ y: -2, color: '#0466c8' }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-primary/50 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-primary transition-colors inline-flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-primary/50 pb-2">
              Relevant Links
            </h3>
            <ul className="space-y-3">
              {relevantLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors inline-flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-2"></span>
                    {link.name}
                    <FiExternalLink size={12} className="ml-1.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-primary/50 pb-2">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="text-primary mt-1 mr-3" size={18} />
                <div>
                  <p className="text-gray-300">Toronto, Ontario</p>
                  <p className="text-gray-400 text-sm">Canada</p>
                </div>
              </li>
              <li className="flex items-start">
                <FiMail className="text-primary mt-1 mr-3" size={18} />
                <div>
                  <a href="mailto:mehulbh9@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                    mehulbh9@gmail.com
                  </a>
                  <p className="text-gray-400 text-sm">Email me anytime</p>
                </div>
              </li>
              <li className="flex items-start">
                <FiPhone className="text-primary mt-1 mr-3" size={18} />
                <div>
                  <p className="text-gray-300">+1 437-989-1815</p>
                  <p className="text-gray-400 text-sm">Mon-Fri, 9am-5pm EST</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="h-px bg-gray-700 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Mehul Bhardwaj. All rights reserved.
          </p>
          <div className="text-sm text-gray-400">
            <span>Designed and Built with ❤️ using React, Tailwind CSS & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 