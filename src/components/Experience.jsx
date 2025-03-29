import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronRight, FiCalendar, FiMapPin, FiBriefcase, FiBook, FiCheckCircle, FiMoreHorizontal, FiCamera } from 'react-icons/fi'

// Base64 encoded SVG logos
const logoGEI = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxwYXRoIGQ9Ik01MDAgMTAwYTQwMCA0MDAgMCAxIDAgMCA4MDAgNDAwIDQwMCAwIDAgMCAwLTgwMHptLTExNyA1NjFjMCAyMy0xOSA0Mi00MiA0MkgyNjFhNDIgNDIgMCAwIDEtNDItNDJWMzM5YzAtMjMgMTktNDIgNDItNDJoODBjMjMgMCA0MiAxOSA0MiA0MnYzMjJ6bTMyMC0xNjNINDkyYy0yMyAwLTQyLTE5LTQyLTQydi04MGMwLTIzIDE5LTQyIDQyLTQyaDE3MWEzMyAzMyAwIDAgMCAzMy0zM3YtMTkuNWEzMyAzMyAwIDAgMC0zMy0zM0g0MjBjLTIzIDAtNDIgMTktNDIgNDJWNDUyYzAgMjMgMTkgNDIgNDIgNDJoMjgzYzIzIDAgNDIgMTkgNDIgNDJ2NDJhNDIgNDIgMCAwIDEtNDIgNDJIMzgwYy0yMyAwLTQyLTE5LTQyLTQydi04YTggOCAwIDAgMC04LTh2MTZjMCAzMiAyNiA1OCA1OCA1OGgzMjVjMzIgMCA1OC0yNiA1OC01OHYtNDJjMC0zMi0yNi01OC01OC01OHoiIGZpbGw9IiMwMDViOWUiLz48L3N2Zz4=";

const logoSEDS = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxjaXJjbGUgY3g9IjUwMCIgY3k9IjUwMCIgcj0iNDUwIiBmaWxsPSIjMDA3NmRlIi8+PGNpcmNsZSBjeD0iNTAwIiBjeT0iNTAwIiByPSI0MDAiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNTAwIDEzMGE2MC42IDYwLjYgMCAwIDAtNjAuNiA2MC43IDYwLjYgNjAuNiAwIDAgMCA2MC42IDYwLjcgNjAuNiA2MC42IDAgMCAwIDYwLjctNjAuN0E2MC42IDYwLjYgMCAwIDAgNTAwIDEzMHptMCA0ODYuM2E2MC42IDYwLjYgMCAwIDAtNjAuNiA2MC43IDYwLjYgNjAuNiAwIDAgMCA2MC42IDYwLjcgNjAuNiA2MC42IDAgMCAwIDYwLjctNjAuN3pNMzQ3LjUgMjQzLjZhNjAuNiA2MC42IDAgMCAwLTYwLjcgNjAuNiA2MC42IDYwLjYgMCAwIDAgNjAuNyA2MC43IDYwLjYgNjAuNiAwIDAgMCA2MC42LTYwLjcgNjAuNiA2MC42IDAgMCAwLTYwLjYtNjAuNnoiIGZpbGw9IiMwMDc2ZGUiLz48cGF0aCBkPSJNNjM3LjggNTM1LjZjMCA2LjgtNS41IDEyLjItMTIuMiAxMi4ySDQ0OWMtNzMgMC0xMzIuOS01OS42LTEzMi45LTEzMi44di0yNC44YzAtNi43LTUuNS0xMi4yLTEyLjItMTIuMmgtNS4xYy02LjcgMC0xMi4yIDUuNS0xMi4yIDEyLjJ2MjQuOGMwIDk5LjkgODEuMyAxODEuMiAxODEuMyAxODEuMmgxOTQuNGM2LjcgMCAxMi4yLTUuNSAxMi4yLTEyLjJ2LTI0LjN6IiBmaWxsPSIjMDA3NmRlIi8+PC9zdmc+";

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work')
  const [isAnimating, setIsAnimating] = useState(false)
  const [expandedCourses, setExpandedCourses] = useState({})
  
  // Handle tab switching with animation control
  const handleTabChange = (tab) => {
    if (!isAnimating && tab !== activeTab) {
      setIsAnimating(true)
      setActiveTab(tab)
    }
  }
  
  useEffect(() => {
    // Animation complete
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [activeTab])
  
  const education = [
    {
      id: "engsci",
      institution: "University of Toronto",
      degree: "Bachelor of Applied Science (BASc) in Engineering Science, Machine Intelligence Major",
      date: "2020 - 2025",
      description: [
        "Completed the most rigorous and prestigious engineering program in Canada, ranked #1 at UofT and widely recognized as one of the most challenging undergraduate engineering programs globally (top 25 in the world, 7th in AI).",
        "Specialized in Machine Intelligence major in years 3 & 4, focusing on deep learning, neural networks, and AI systems design in UofT's world-class AI ecosystem.",
        "Core curriculum included advanced mathematics (vector calculus, ODE, linear algebra), algorithms, quantum and thermal physics, fluid mechanics, and electrical systems with a distinct first-principles approach.",
        "Machine Intelligence specialization included neural networks, machine learning, probabilistic reasoning, AI systems, decision support systems and advanced technical electives.",
        "Completed a research-based thesis project on advanced neural network architectures, mandatory for all Engineering Science students.",
        "Participated in Engineering Science Option Seminar focusing on cutting-edge research in machine learning and AI applications.",
        "Completed the Practical Experience Requirement (PER) through industry experience in the AI and high-performance computing sector.",
        "Maintained academic excellence in an elite cohort with course load and curriculum specifically designed at a more academically demanding level than standard engineering programs."
      ],
      highlights: [
        "Program designed with unique '2+2' structure: foundation years followed by specialization",
        "Curriculum includes more mathematics, science and engineering with first-principles approach",
        "All students complete independent research-based thesis projects",
        "Machine Intelligence curriculum covers foundations of AI, ML, neural networks and advanced systems",
        "Specialized course sequence: Machine Learning, Neural Networks, Probabilistic Reasoning, AI Systems",
        "Technical electives in Natural Language Computing, Computer Vision, Knowledge Representation"
      ],
      courses: [
        "ECE421H1: Introduction to Machine Learning",
        "ECE324H1: Machine Intelligence, Software and Neural Networks",
        "ROB311H1: Artificial Intelligence",
        "ECE368H1: Probabilistic Reasoning",
        "MIE429H1: Machine Intelligence Capstone Design",
        "MIE451H1: Decision Support Systems",
        "ECE355H1: Signal Analysis and Communication",
        "ECE411H1: Adaptive Control and Reinforcement Learning",
        "CSC401H1: Natural Language Computing",
        "CSC413H1: Neural Networks & Deep Learning",
        "ESC499Y1: Engineering Science Thesis"
      ],
      logo: "/logos/uoft_logo.png"
    }
  ]
  
  const work = [
    {
      id: "amd-data-scientist",
      company: "Advanced Micro Devices (AMD)",
      title: "Data Scientist Intern",
      date: "May 2024 - Sept 2024",
      subtitle: "Data Analytics & Process Optimization",
      description: [
        "Leveraged cutting-edge Python libraries for advanced data wrangling, ETL, and Big Data processing—filtering a massive 500+ column, 300M+ row dataset to drive scalable analytics.",
        "Engineered key features and organized cloud data from Snowflake into 10 specialized datasets using Pandas, enhancing data quality for EDA.",
        "Leveraged correlation analysis, SHAP values, and hypothesis testing—to engineer XGBoost based predictive model achieving 92% accuracy and fueling data-driven decision-making.",
        "Designed an anomaly detection pipeline employing interactive data visualization and k-means clustering to identify 5 critical variables impacting performance."
      ],
      logo: "/logos/AMD_logo.png"
    },
    {
      id: "amd-project-manager",
      company: "Advanced Micro Devices (AMD)",
      title: "Project Manager Intern",
      date: "May 2023 - Sept 2024",
      subtitle: "Supply Chain Management & Dashboard Development",
      description: [
        "Streamlined workflow documentation, including detailed flowcharts for process visualization and Gantt charts for timeline tracking, streamlining the onboarding of 10+ new team members.",
        "Developed Python scripts to reduce processing time from over 10 minutes to under 5 seconds, achieving automated data processing and minimizing manual errors.",
        "Deployed an interactive real-time supply-demand analysis dashboard, optimizing tracking for 200+ NPI builds across multiple data center programs."
      ],
      logo: "/logos/AMD_logo.png"
    },
    {
      id: "uoft-research",
      company: "University of Toronto",
      title: "Undergraduate Research Assistant",
      date: "Sept 2024 - Present",
      subtitle: "Gaussian Process Regression for Li2S Manufacturing",
      description: [
        "Developed a Gaussian Process Regression (GPR) model with Active Learning to optimize lithium sulfide manufacturing and reduce experimental costs.",
        "Designed interactive 3D visualizations to map uncertainty and guide Bayesian Optimization using acquisition functions like Expected Improvement.",
        "Applied imputation, uncertainty-aware modeling, and feature engineering in a low-data regime with significant missing values."
      ],
      logo: "/logos/uoft_logo.png"
    },
    {
      id: "gei-ai-ml",
      company: "GEI Consultants Inc.",
      title: "AI/ML Engineer - Capstone Project",
      date: "Sept 2024 - Feb 2025",
      subtitle: "RFP Response System Development",
      description: [
        "Developed an AI-driven RFP response system using Large Language Models (LLMs) via the OpenAI API to streamline proposal generation.",
        "Implemented Retrieval-Augmented Generation (RAG) with Hugging Face embeddings to enhance document relevance across 200+ documents.",
        "Developed custom Python functions to prevent hallucinations by retrieving only relevant documents with verifiable references, using similarity-based retrieval to enhance accuracy and contextual relevance."
      ],
      logo: "/logos/GEI_logo.png"
    },
    {
      id: "photography",
      company: "Instagram @photography_mehul",
      title: "Photography Content Creator",
      date: "",
      subtitle: "",
      description: [
        "Nature lover capturing the beauty of wildlife and landscapes through photography."
      ],
      logo: ""
    }
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  }
  
  const tabContentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    }
  }
  
  // Helper to render work items in timeline format
  const WorkItems = () => (
    <div className="relative py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Experience Timeline</h2>
      <div className="border-b-4 border-primary w-24 mx-auto mb-16"></div>

      {/* Timeline line - centered */}
      <div className="absolute left-1/2 top-32 bottom-4 w-1 bg-blue-500 transform -translate-x-1/2"></div>
      
      {/* Timeline items */}
      <div className="relative">
        {work.map((job, index) => (
          <motion.div 
            key={job.id}
            variants={itemVariants}
            className="mb-32 relative"
          >
            {/* Timeline dot with date label */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                {index === 0 && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20"></span>}
              </div>
              {/* Date label - position it to the left or right side based on card position */}
              <div className={`absolute top-0 bg-blue-500 text-white text-sm font-medium py-1 px-4 rounded-md shadow-sm text-center whitespace-nowrap ${index % 2 === 0 ? 'right-full mr-4' : 'left-full ml-4'}`}>
                {job.date}
              </div>
            </div>

            {/* Content card - alternating sides with more spacing */}
            <div className={`w-[42%] ${index % 2 === 0 ? 'ml-auto mr-[8%]' : 'mr-auto ml-[8%]'}`}>
              <div className="bg-blue-50 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start">
                  {/* Logo - larger */}
                  <div className="w-16 h-16 bg-white rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden mr-4 border border-gray-200 p-1">
                    {job.logo ? (
                      <img 
                        src={job.logo} 
                        alt={job.company} 
                        className="max-w-[90%] max-h-[90%] object-contain" 
                      />
                    ) : (
                      job.id === "photography" ? (
                        <FiCamera size={30} className="text-primary" />
                      ) : (
                        <FiBriefcase size={30} className="text-primary" />
                      )
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <a href="#" className="text-blue-500 font-bold hover:underline">{job.company}</a>
                    <h3 className="text-xl font-bold text-gray-800 mt-1">{job.title}</h3>
                    
                    {job.subtitle && (
                      <div className="text-gray-600 text-sm mt-1">
                        {job.subtitle}
                      </div>
                    )}
                    
                    <div className="mt-4">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {job.description[0]}
                      </p>
                      
                      {job.description.length > 1 && (
                        <ul className="mt-3 space-y-2">
                          {job.description.slice(1).map((item, idx) => (
                            <li key={idx} className="text-gray-700 text-sm flex items-start">
                              <span className="mr-2 text-gray-500 font-semibold">–</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
  
  // Helper to render education items with general format (not timeline)
  const EducationItems = () => (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Education</h2>
      <div className="border-b-4 border-primary w-24 mx-auto mb-16"></div>
      
      {/* Education items in general format */}
      <div className="max-w-4xl mx-auto">
        {education.map((edu) => (
          <motion.div 
            key={edu.id}
            variants={itemVariants}
            className="mb-12"
          >
            <div className="bg-blue-50 rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Logo and basic info */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-200 p-2 mb-3">
                    {edu.logo ? (
                      <img 
                        src={edu.logo} 
                        alt={edu.institution}
                        className="max-w-[90%] max-h-[90%] object-contain" 
                      />
                    ) : (
                      <FiBook size={40} className="text-primary" />
                    )}
                  </div>
                  <div className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full mb-2 text-center">
                    {edu.date}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <a href="#" className="text-blue-500 text-xl font-bold hover:underline">{edu.institution}</a>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">{edu.degree}</h3>
                  
                  <div className="mt-4">
                    <p className="text-gray-700 text-base leading-relaxed">
                      {edu.description[0]}
                    </p>
                    
                    {edu.description.length > 1 && (
                      <div className="mt-4 border-l-4 border-blue-200 pl-4">
                        <p className="text-gray-700 text-base font-medium italic">
                          {edu.description[1]}
                        </p>
                      </div>
                    )}
                    
                    {/* Show highlights as tags */}
                    {edu.highlights && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-3">Program Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, index) => (
                            <span key={index} className="text-sm bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full">
                              {highlight.split(":")[0]}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Key courses section */}
                    {edu.courses && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-3">Key Courses</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {edu.courses.slice(0, expandedCourses[edu.id] ? edu.courses.length : 6).map((course, index) => (
                            <div key={index} className="flex items-center">
                              <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{course}</span>
                            </div>
                          ))}
                        </div>
                        {edu.courses.length > 6 && (
                          <button 
                            className="mt-3 text-blue-500 hover:text-blue-700 text-sm flex items-center"
                            onClick={() => setExpandedCourses(prev => ({
                              ...prev,
                              [edu.id]: !prev[edu.id]
                            }))}
                          >
                            <FiMoreHorizontal className="mr-1" /> 
                            {expandedCourses[edu.id] ? "Show fewer courses" : "See more courses"}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
  
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education & Experience
        </motion.h2>
        
        <div className="flex justify-center mb-10 mt-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-5 py-2.5 text-sm font-medium ${
                activeTab === 'work'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } rounded-l-lg transition-colors flex items-center`}
              onClick={() => handleTabChange('work')}
              disabled={isAnimating}
            >
              <FiBriefcase className="mr-2" /> Work Experience
            </button>
            <button
              type="button"
              className={`px-5 py-2.5 text-sm font-medium ${
                activeTab === 'education'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } rounded-r-lg transition-colors flex items-center`}
              onClick={() => handleTabChange('education')}
              disabled={isAnimating}
            >
              <FiBook className="mr-2" /> Education
            </button>
          </div>
        </div>
        
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8"
            >
              {activeTab === 'work' && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <WorkItems />
                </motion.div>
              )}
              
              {activeTab === 'education' && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  <EducationItems />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Experience 