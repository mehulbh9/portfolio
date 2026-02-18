import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiBriefcase, FiBook, FiCheckCircle, FiMoreHorizontal, FiCamera } from 'react-icons/fi'

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work')
  const [isAnimating, setIsAnimating] = useState(false)
  const [expandedCourses, setExpandedCourses] = useState({})
  
  const handleTabChange = (tab) => {
    if (!isAnimating && tab !== activeTab) {
      setIsAnimating(true)
      setActiveTab(tab)
    }
  }
  
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500)
    return () => clearTimeout(timer)
  }, [activeTab])
  
  const education = [
    {
      id: "engsci",
      institution: "University of Toronto",
      degree: "Bachelor of Applied Science (BASc) in Engineering Science, Machine Intelligence Major",
      date: "2020 - 2025",
      description: [
        "Completed the most rigorous and prestigious engineering program in Canada, ranked #1 at UofT.",
        "Specialized in Machine Intelligence major in years 3 & 4, focusing on deep learning, neural networks, and AI systems design.",
      ],
      highlights: [
        "Machine Learning", "Neural Networks", "Probabilistic Reasoning", "AI Systems", "Research Thesis"
      ],
      courses: [
        "ECE421H1: Introduction to Machine Learning",
        "ECE324H1: Machine Intelligence, Software and Neural Networks",
        "ROB311H1: Artificial Intelligence",
        "ECE368H1: Probabilistic Reasoning",
        "CSC413H1: Neural Networks & Deep Learning",
        "ESC499Y1: Engineering Science Thesis"
      ],
      logo: "/logos/uoft_logo.png"
    }
  ]
  
  const work = [
    {
      id: "amd-data-analyst",
      company: "Advanced Micro Devices (AMD)",
      title: "Data Analyst – Automation & Program Analytics",
      date: "Jul 2025 – Present",
      location: "Toronto, Canada",
      type: "Full Time",
      skills: ["Python", "ETL", "Monte Carlo", "Jira", "Confluence", "Predictive Modeling", "Dashboards"],
      highlights: [
        "Python automation pipelines for task classification and ETL workflows",
        "Monte Carlo simulations & velocity-based forecasting for schedule risk",
        "Jira dashboards tracking 200+ builds across data center programs",
        "Confluence documentation for KPIs and analytical insights",
        "Weekly analytical reports for leadership decision-making"
      ],
      logo: "/logos/AMD_logo.png"
    },
    {
      id: "amd-data-scientist",
      company: "Advanced Micro Devices (AMD)",
      title: "Data Scientist Intern",
      date: "May 2024 - Sept 2024",
      location: "Toronto, Canada",
      type: "Internship",
      skills: ["Python", "Snowflake", "XGBoost", "SHAP", "Pandas", "Big Data", "K-means"],
      highlights: [
        "Processed 300M+ row, 500+ column dataset for scalable analytics",
        "Built XGBoost model with SHAP interpretability on 300M+ row datasets",
        "Engineered 10 specialized datasets from Snowflake cloud data",
        "Anomaly detection pipeline with k-means clustering"
      ],
      logo: "/logos/AMD_logo.png"
    },
    {
      id: "amd-project-manager",
      company: "Advanced Micro Devices (AMD)",
      title: "Project Manager Intern",
      date: "May 2023 - Sept 2024",
      location: "Toronto, Canada",
      type: "Internship",
      skills: ["Python", "Supply Chain", "Dashboards", "Gantt Charts", "Process Automation"],
      highlights: [
        "Reduced data processing time from 10+ minutes to under 5 seconds with Python automation",
        "Deployed real-time supply-demand dashboard for 200+ NPI builds",
        "Streamlined onboarding for 10+ team members with workflow documentation"
      ],
      logo: "/logos/AMD_logo.png"
    },
    {
      id: "uoft-research",
      company: "University of Toronto",
      title: "Undergraduate Research Assistant",
      date: "Sept 2024 - Present",
      location: "Toronto, Canada",
      type: "Research",
      skills: ["Gaussian Process", "Bayesian Optimization", "Active Learning", "Python", "3D Visualization"],
      highlights: [
        "GPR model with Active Learning for lithium sulfide manufacturing optimization",
        "Interactive 3D visualizations for Bayesian Optimization",
        "Imputation and feature engineering in low-data regime"
      ],
      logo: "/logos/uoft_logo.png"
    },
    {
      id: "gei-ai-ml",
      company: "GEI Consultants Inc.",
      title: "AI/ML Engineer - Capstone Project",
      date: "Sept 2024 - Feb 2025",
      location: "Toronto, Canada",
      type: "Capstone",
      skills: ["LLMs", "OpenAI API", "RAG", "Hugging Face", "Python"],
      highlights: [
        "AI-driven RFP response system using LLMs via OpenAI API",
        "RAG implementation with Hugging Face embeddings across 200+ documents",
        "Custom retrieval functions to prevent hallucinations"
      ],
      logo: "/logos/GEI_logo.png"
    },
    {
      id: "photography",
      company: "Instagram @photography_mehul",
      title: "Photography Content Creator",
      date: "Ongoing",
      location: "",
      type: "",
      skills: [],
      highlights: ["Nature and wildlife photography", "Landscape photography"],
      logo: ""
    }
  ]
  
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }
  
  const tabContentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  }

  const WorkItems = () => (
    <div className="space-y-8">
      {work.map((job, index) => (
        <motion.div
          key={job.id}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-slate-800/60 rounded-2xl p-6 md:p-8 border border-slate-600/50 shadow-sm hover:shadow-md hover:border-slate-500 transition-all duration-300"
        >
          <div className="flex flex-col gap-6">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/10">
                {job.logo ? (
                  <img src={job.logo} alt={job.company} className="w-10 h-10 object-contain" />
                ) : (
                  <FiCamera size={24} className="text-primary" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-primary font-bold text-lg">{job.company}</span>
                  {job.location && (
                    <span className="text-slate-400 text-sm">· {job.location}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="text-sm font-medium text-slate-400">{job.date}</span>
                  {job.type && (
                    <span className="text-xs px-3 py-1 rounded-full bg-primary text-white font-medium">
                      {job.type}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Skills/Tech stack - recruiter scan-friendly */}
            {job.skills && job.skills.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-3 py-1.5 rounded-lg bg-primary/20 text-primary font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key achievements */}
            <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Achievements</h4>
              <ul className="space-y-2">
                {job.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start text-slate-300 text-sm md:text-base">
                    <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
  
  const EducationItems = () => (
    <div className="space-y-8">
      {education.map((edu) => (
        <motion.div
          key={edu.id}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-slate-800/60 rounded-2xl p-6 md:p-8 border border-slate-600/50 shadow-sm hover:shadow-md hover:border-slate-500 transition-all duration-300"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/10">
                {edu.logo ? (
                  <img src={edu.logo} alt={edu.institution} className="w-10 h-10 object-contain" />
                ) : (
                  <FiBook size={24} className="text-primary" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-primary font-bold text-lg">{edu.institution}</span>
                <span className="text-slate-400 text-sm ml-2">{edu.date}</span>
                <h3 className="text-xl font-bold text-white mt-1">{edu.degree}</h3>
              </div>
            </div>
            <div className="space-y-2">
              {edu.description.map((p, i) => (
                <p key={i} className="text-slate-300 text-sm md:text-base">{p}</p>
              ))}
            </div>
            {edu.highlights && (
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((h, i) => (
                    <span key={i} className="text-sm px-3 py-1.5 rounded-lg bg-primary/20 text-primary font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {edu.courses && (
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Courses</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {edu.courses.slice(0, expandedCourses[edu.id] ? edu.courses.length : 6).map((c, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-300">
                      <FiCheckCircle className="text-primary mr-2 flex-shrink-0" size={14} />
                      {c}
                    </div>
                  ))}
                </div>
                {edu.courses.length > 6 && (
                  <button
                    onClick={() => setExpandedCourses(prev => ({ ...prev, [edu.id]: !prev[edu.id] }))}
                    className="mt-2 text-sm text-primary hover:text-primary/80 font-medium flex items-center"
                  >
                    <FiMoreHorizontal className="mr-1" />
                    {expandedCourses[edu.id] ? "Show fewer" : "See more courses"}
                  </button>
                )}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
  
  return (
    <section className="section bg-gradient-to-b from-slate-800 via-slate-900 to-cyan-950/20" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label text-primary">Background</p>
          <h2 className="section-title text-left text-white">
            Education & Experience
          </h2>
          <p className="text-slate-300 mt-2 max-w-2xl">
            Data science, AI, and program management—delivering impact across the full stack.
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-12 mt-10">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-lg border-2 border-slate-600 bg-slate-800/50 p-1 touch-manipulation">
            <button
              type="button"
              className={`px-5 py-2.5 text-sm font-medium rounded-md transition-colors flex items-center ${
                activeTab === 'work'
                  ? 'bg-primary text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
              onClick={() => handleTabChange('work')}
              disabled={isAnimating}
            >
              <FiBriefcase className="mr-2" /> Work Experience
            </button>
            <button
              type="button"
              className={`px-5 py-2.5 text-sm font-medium rounded-md transition-colors flex items-center ${
                activeTab === 'education'
                  ? 'bg-primary text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
              onClick={() => handleTabChange('education')}
              disabled={isAnimating}
            >
              <FiBook className="mr-2" /> Education
            </button>
          </div>
        </div>
        
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {activeTab === 'work' && <WorkItems />}
              {activeTab === 'education' && <EducationItems />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Experience
