import { motion } from 'framer-motion'
import { FiDownload, FiCalendar, FiBriefcase, FiAward, FiBookOpen } from 'react-icons/fi'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Achievements from '../components/Achievements'

const ResumePage = () => {
  const education = [
    {
      degree: 'Bachelor of Applied Science (BASc) in Engineering Science, Machine Intelligence Major',
      institution: 'University of Toronto',
      period: '2019 - 2023',
      description: 'Completed the prestigious Engineering Science program with specialization in Machine Intelligence. Core curriculum included advanced mathematics, physics, algorithms, neural networks, machine learning, and AI systems, with accelerated discipline-specific learning in years 3 & 4.'
    }
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="pt-28 pb-10 bg-slate-900">
        <div className="container">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="section-label text-primary mb-2">Resume</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">My Resume</h1>
            <p className="text-slate-300 max-w-2xl mx-auto mb-6">
              A summary of my educational background, professional experiences, and technical skills.
            </p>
            <a href="/2025_CV_MEHUL.pdf" download className="btn btn-primary inline-flex items-center">
              Download CV <FiDownload className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
      
      <section className="section bg-white" id="education">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label text-primary">Overview</p>
            <h2 className="section-title text-left text-white">Education</h2>
          </motion.div>
          
          <motion.div
            className="max-w-3xl mx-auto mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="mb-12 relative"
                variants={itemVariants}
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FiBookOpen className="text-primary" size={20} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark">{edu.degree}</h3>
                    <div className="flex flex-wrap gap-2 items-center mt-1 mb-2">
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FiCalendar className="mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-slate-300">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <Experience />
      <Skills />
      <Achievements />
    </motion.div>
  )
}

export default ResumePage 