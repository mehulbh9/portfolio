import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayers, FiBriefcase, FiCommand, FiCloud, FiCpu } from 'react-icons/fi'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null)
  
  const handleCategoryClick = (id) => {
    setActiveCategory(activeCategory === id ? null : id)
  }
  
  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <FiCode size={24} />,
      color: 'bg-blue-50',
      description: 'Proficient in multiple programming languages with a focus on building efficient, maintainable code for various applications.',
      skills: [
        { name: 'Python', proficiency: 95, description: 'Expert-level proficiency with extensive experience in data science, machine learning, and backend development.' },
        { name: 'JavaScript', proficiency: 85, description: 'Strong frontend and backend development skills including React, Node.js, and modern JS frameworks.' },
        { name: 'SQL', proficiency: 90, description: 'Advanced database query optimization, schema design, and performance tuning across multiple database systems.' },
        { name: 'Java', proficiency: 75, description: 'Solid understanding of object-oriented programming principles and enterprise application development.' },
        { name: 'C++', proficiency: 70, description: 'Experience with algorithm implementation and performance-critical applications.' }
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: <FiCpu size={24} />,
      color: 'bg-purple-50',
      description: 'Deep expertise in developing and implementing advanced machine learning models for real-world applications.',
      skills: [
        { name: 'Deep Learning', proficiency: 90, description: 'Extensive experience with neural networks, CNNs, RNNs, and transformer architectures using TensorFlow and PyTorch.' },
        { name: 'Recommender Systems', proficiency: 95, description: 'Built production-grade collaborative filtering and content-based recommendation engines with personalization algorithms.' },
        { name: 'Natural Language Processing', proficiency: 85, description: 'Implemented text classification, sentiment analysis, and information extraction systems using BERT and other transformer models.' },
        { name: 'Computer Vision', proficiency: 80, description: 'Developed image classification, object detection, and image segmentation models for diverse applications.' },
        { name: 'Reinforcement Learning', proficiency: 75, description: 'Applied RL algorithms to optimize decision-making processes in complex environments.' }
      ]
    },
    {
      id: 'data',
      title: 'Data Analysis',
      icon: <FiDatabase size={24} />,
      color: 'bg-green-50',
      description: 'Strong analytical skills with the ability to extract meaningful insights from complex datasets through statistical analysis and visualization.',
      skills: [
        { name: 'Exploratory Data Analysis', proficiency: 95, description: 'Expert in uncovering patterns, anomalies, and insights from complex datasets using statistical methods and visualization.' },
        { name: 'Big Data Analytics', proficiency: 90, description: 'Experience with distributed processing frameworks like Spark for analyzing large-scale datasets.' },
        { name: 'Pandas/NumPy', proficiency: 95, description: 'Advanced data manipulation, cleaning, and preprocessing for analytics and machine learning pipelines.' },
        { name: 'Data Visualization', proficiency: 85, description: 'Skilled in creating insightful visualizations using libraries like Matplotlib, Seaborn, and Tableau.' },
        { name: 'Statistical Analysis', proficiency: 88, description: 'Applied statistical methods for hypothesis testing, regression analysis, and inferential statistics.' }
      ]
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: <FiLayers size={24} />,
      color: 'bg-yellow-50',
      description: 'Full-stack development skills with experience in creating responsive, user-friendly web applications using modern frameworks and best practices.',
      skills: [
        { name: 'React', proficiency: 85, description: 'Built interactive single-page applications with state management, hooks, and component-based architecture.' },
        { name: 'HTML/CSS', proficiency: 90, description: 'Created semantic, accessible, and responsive layouts with modern CSS techniques including Flexbox and Grid.' },
        { name: 'Bootstrap/Tailwind', proficiency: 85, description: 'Rapid UI development using utility-first CSS frameworks and component libraries.' },
        { name: 'WordPress', proficiency: 80, description: 'Custom theme development, plugin integration, and content management system implementation.' },
        { name: 'SEO', proficiency: 75, description: 'Implemented technical SEO best practices, content optimization, and performance improvements for better rankings.' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: <FiCloud size={24} />,
      color: 'bg-indigo-50',
      description: 'Experience with cloud platforms and DevOps practices for deploying and managing scalable applications.',
      skills: [
        { name: 'Snowflake Cloud', proficiency: 90, description: 'Implemented data warehousing solutions, optimized queries, and designed ETL pipelines for analytics workloads.' },
        { name: 'AWS', proficiency: 80, description: 'Deployed and managed services like EC2, S3, Lambda, and RDS for scalable application architectures.' },
        { name: 'Docker', proficiency: 85, description: 'Containerized applications for consistent development, testing, and production environments.' },
        { name: 'CI/CD', proficiency: 75, description: 'Set up automated testing and deployment pipelines for reliable software delivery.' },
        { name: 'Kubernetes', proficiency: 70, description: 'Basic understanding of container orchestration for microservices deployment and scaling.' }
      ]
    },
    {
      id: 'soft',
      title: 'Professional Skills',
      icon: <FiBriefcase size={24} />,
      color: 'bg-red-50',
      description: 'Strong leadership, communication, and project management abilities that complement technical expertise.',
      skills: [
        { name: 'Project Management', proficiency: 90, description: 'Led complex projects from conception to delivery, managing resources, timelines, and stakeholders effectively.' },
        { name: 'Teaching', proficiency: 85, description: 'Communicated complex technical concepts clearly and effectively to diverse audiences.' },
        { name: 'Leadership', proficiency: 90, description: 'Guided technical teams, fostered collaboration, and mentored junior developers to achieve project goals.' },
        { name: 'Problem Solving', proficiency: 95, description: 'Approached complex challenges with analytical thinking and creative solutions.' },
        { name: 'Communication', proficiency: 85, description: 'Excellent verbal and written communication skills for technical and non-technical audiences.' }
      ]
    }
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.2 }
    }
  }
  
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          With a strong foundation in machine learning, data science, and software development, 
          I bring a versatile skill set to tackle complex technical challenges across various domains.
        </p>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`${category.color} rounded-xl p-6 border border-gray-100 cursor-pointer transform transition-all duration-300 ${activeCategory === category.id ? 'scale-[1.02] shadow-lg' : ''}`}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">
                {category.description}
              </p>
              
              <div className={`space-y-4 transition-all duration-300 overflow-hidden ${activeCategory === category.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-dark">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.proficiency}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: activeCategory === category.id ? `${skill.proficiency}%` : 0 }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                      ></motion.div>
                    </div>
                    
                    <p className="text-xs text-gray-600 mt-1">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
              
              {activeCategory !== category.id && (
                <ul className="space-y-2">
                  {category.skills.slice(0, 3).map((skill, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                      <span>{skill.name}</span>
                    </li>
                  ))}
                  {category.skills.length > 3 && (
                    <li className="text-sm text-primary font-medium">
                      + {category.skills.length - 3} more skills...
                    </li>
                  )}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 