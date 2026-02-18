import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiFilter, FiCpu, FiDatabase, FiServer, FiGlobe, FiChevronDown } from 'react-icons/fi'
import TiltCard from './TiltCard'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)
  
  const categories = [
    { id: 'all', name: 'All Projects', icon: <FiFilter /> },
    { id: 'ml', name: 'Machine Learning', icon: <FiCpu /> },
    { id: 'data', name: 'Data Science', icon: <FiDatabase /> },
    { id: 'backend', name: 'Backend', icon: <FiServer /> },
    { id: 'web', name: 'Web Dev', icon: <FiGlobe /> }
  ]
  
  const projects = [
    {
      title: 'Hidden Markov Model Inference',
      description: 'Implemented algorithms for performing inference in hidden Markov models (HMMs), including functions for computing forward and backward messages, calculating marginals, and finding the most likely sequence of states using the Viterbi algorithm.',
      tags: ['Machine Learning', 'Python', 'Algorithms', 'Probability', 'HMM'],
      category: 'ml',
      image: '/project1.jpg', // Placeholder
      links: {
        github: 'https://github.com/mehulbh9/Hidden-Markov-Model-Inference',
        demo: '#'
      },
      details: 'Built complete HMM inference toolset including forward/backward algorithms, marginal calculation and Viterbi decoding for optimal state sequences. Tested on real-world sequential data problems.'
    },
    {
      title: 'Spam Filter Using Bayesian Methods',
      description: 'Implemented a spam filter using Bayesian probability methods that classifies emails as spam or ham based on their content using a Naive Bayes classifier, with features for learning word distributions and calculating posterior probabilities.',
      tags: ['Machine Learning', 'Bayesian Methods', 'NLP', 'Python', 'Classification'],
      category: 'ml',
      image: '/project2.jpg', // Placeholder
      links: {
        github: 'https://github.com/mehulbh9/-Spam-Filter-Using-Bayesian-Methods',
        demo: '#'
      },
      details: 'Designed a system that learns word distributions from training data, classifies new emails, and measures performance on test datasets. Achieved 94% accuracy on spam detection with very low false positive rates.'
    },
    {
      title: 'Bayesian Regression Analysis',
      description: 'Created a Python script for performing Bayesian regression analysis, including plotting prior and posterior distributions and making predictions based on the regression model using a Gaussian prior and likelihood.',
      tags: ['Machine Learning', 'Bayesian Methods', 'Python', 'Statistics', 'Regression'],
      category: 'ml',
      image: '/project3.jpg', // Placeholder
      links: {
        github: 'https://github.com/mehulbh9/Bayesian-Regression-Analysis',
        demo: '#'
      },
      details: 'Implemented Bayesian inference for regression problems with visualization of uncertainty. Designed a modular approach that allows for different priors and likelihood functions.'
    },
    {
      title: 'IMDB Sentiment Analysis',
      description: 'Designed and implemented a classifier to determine the sentiment of movie reviews from the IMDB dataset (50,000 reviews), predicting whether reviews are positive or negative based on text analysis.',
      tags: ['NLP', 'Machine Learning', 'Python', 'Text Classification', 'Sentiment Analysis'],
      category: 'ml',
      image: '/project4.jpg', // Placeholder
      links: {
        github: 'https://github.com/mehulbh9/IMDB-sentiment-analysis',
        demo: '#'
      },
      details: 'Preprocessed text data with tokenization, stemming, and TF-IDF vectorization. Compared performance of multiple machine learning models including SVM, Random Forest, and neural networks for optimal sentiment classification.'
    },
    {
      title: 'K-means Clustering on Breast Cancer Dataset',
      description: 'Implemented the K-means clustering algorithm from scratch using NumPy and applied it to the UCI ML Breast Cancer Wisconsin dataset, computing cluster centroids and assignments.',
      tags: ['Machine Learning', 'Clustering', 'Python', 'NumPy', 'Healthcare'],
      category: 'ml',
      image: '/project5.jpg', // Placeholder
      links: {
        github: 'https://github.com/mehulbh9/k_means-algorithm',
        demo: '#'
      },
      details: 'Built K-means clustering from scratch with visualization of cluster convergence. Analyzed optimal k values using elbow method and silhouette scores. Applied dimensionality reduction for better visualization of high-dimensional medical data.'
    },
    {
      title: 'Synonyms Tester',
      description: 'Created a program that calculates word similarities between words using Euclidean norm and cosine similarity based on semantic descriptors derived from classical literature like Swann\'s Way and War and Peace.',
      tags: ['NLP', 'Python', 'Text Analysis', 'Semantic Similarity', 'Algorithms'],
      category: 'ml',
      image: '/project6.jpg', // Placeholder
      links: {
        github: 'https://github.com/mehulbh9/Synonyms-Tester',
        demo: '#'
      },
      details: 'Developed semantic vector representations for words based on their context in literature. Implemented multiple similarity metrics and evaluated performance against human-judged word similarity datasets.'
    },
    {
      title: 'Gomuku Game',
      description: 'Python implementation of the classic Gomuku game (Five in a Row) allowing a player to play against a computer opponent with the game board displayed in ASCII-art after each move.',
      tags: ['Python', 'Game Development', 'Algorithms', 'ASCII Art'],
      category: 'backend',
      image: '/project7.jpg', // Placeholder
      links: {
        github: 'https://github.com/mehulbh9/Gomuku',
        demo: '#'
      },
      details: 'Implemented game logic and AI opponent with basic strategy. The board is displayed in ASCII-art with clear status indicators and move history tracking. Includes game analysis functions for evaluating positions.'
    },
    {
      title: 'NewHacks 2021 - Student Productivity Tool',
      description: 'Developed a productivity and time management tool for students to manage their workload by generating a weekly calendar based on timetables, assignments, and exams with Pomodoro timer integration.',
      tags: ['Python', 'CLI', 'Productivity', 'Time Management', 'Education'],
      category: 'backend',
      image: '/project8.jpg', // Placeholder
      links: {
        github: 'https://github.com/mehulbh9/NewHacks2021',
        demo: '#'
      },
      details: 'Created a command-line interface for adding/removing courses, assignments, and exams. Implemented smart scheduling that adjusts to student workload patterns and priorities. Integrated a Pomodoro timer for focused study sessions.'
    },
    {
      title: 'The Skule Archive',
      description: 'Web project for preserving and showcasing the history of the University of Toronto\'s Engineering community, connecting past traditions with present-day students through multimedia elements.',
      tags: ['Web Development', 'HTML/CSS', 'JavaScript', 'Digital Archive', 'University'],
      category: 'web',
      image: '/project9.jpg', // Placeholder
      links: {
        github: 'https://github.com/mehulbh9/The-Skule-Archive',
        demo: '#'
      },
      details: 'Designed an interactive digital archive with historical timeline, searchable document repository, and media gallery. Implemented responsive design for accessibility across devices and optimized image loading for performance.'
    },
    {
      title: 'Personalized Image Culling System',
      description: 'Developed a deep learning system that intelligently selects the best images from large collections based on user preferences. Implemented RNN models to learn individual preferences and create personalized selection algorithms.',
      tags: ['Machine Learning', 'RNN', 'Deep Learning', 'Python', 'TensorFlow'],
      category: 'ml',
      image: '/project10.jpg', // Placeholder
      links: {
        github: 'https://github.com/mehulbhardwaj/photoml',
        demo: 'https://photoml-demo.vercel.app'
      },
      details: 'Used transfer learning with pre-trained convolutional neural networks for feature extraction. Implemented preference learning algorithms that adapt to user choices over time. The system achieved 83% accuracy in predicting user selections in testing.'
    },
    {
      title: 'Advanced Recommender System',
      description: 'Built a production-ready recommender system for engineering applications combining collaborative filtering and content-based approaches. Implemented advanced algorithms for personalized recommendations with real-time processing.',
      tags: ['AI', 'Recommender Systems', 'Python', 'FastAPI', 'MongoDB'],
      category: 'ml',
      image: '/project11.jpg', // Placeholder
      links: {
        github: 'https://github.com/mehulbhardwaj/recommender-system',
        demo: 'https://recommender-demo.herokuapp.com'
      },
      details: 'Implemented matrix factorization techniques and deep learning models to handle sparse data scenarios. Optimized for performance with caching mechanisms and efficient data structures, handling over 100,000 items with sub-second response times.'
    },
    {
      title: 'Supply Chain Analytics Dashboard',
      description: 'Developed a comprehensive analytics platform for AMD\'s supply chain operations. Integrated multiple data sources including Snowflake Cloud to provide actionable insights for business decisions.',
      tags: ['Big Data', 'SQL', 'Python', 'Snowflake', 'Tableau'],
      category: 'data',
      image: '/project12.jpg', // Placeholder
      links: {
        github: 'https://github.com/mehulbhardwaj/analytics-dashboard',
        demo: '#'
      },
      details: 'Created advanced visualization components and predictive models for inventory management. Implemented automated data pipelines that reduced manual reporting time by 75%. The system processed over 20GB of daily transaction data with optimized query performance.'
    }
  ]
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)
  
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
    hidden: { y: 50, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
  }
  
  return (
    <section className="section bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950/20" id="projects">
      <div className="container">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label text-primary">Selected Works</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="section-title text-left mb-0 text-white">
              Featured Projects
            </h2>
            <span className="text-primary font-medium">2020–2025</span>
          </div>
        </motion.div>
        
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-2 touch-manipulation"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 transition-colors text-sm sm:text-base touch-manipulation ${
                filter === category.id
                  ? 'bg-cyan-500 text-slate-900'
                  : 'bg-slate-700/50 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <TiltCard max={10} scale={1.02} className="h-full">
              <div
                className="bg-slate-800/60 rounded-xl overflow-hidden shadow-lg relative flex flex-col h-full border border-slate-600/50 hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`p-5 flex-grow flex flex-col transition-all duration-300 ${hoveredProject === index ? 'bg-slate-700/30' : ''}`}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  {project.links.github !== '#' && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                      aria-label="View GitHub"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                </div>
                <p className={`text-slate-300 mb-4 ${hoveredProject === index ? '' : 'line-clamp-3'}`}>{project.description}</p>
                
                <div className="mt-auto">
                  <div className={`text-sm text-slate-400 mb-3 ${hoveredProject === index ? '' : 'line-clamp-2'}`}>
                    <p>{project.details}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {(hoveredProject === index ? project.tags : project.tags.slice(0, 3)).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {hoveredProject !== index && project.tags.length > 3 && (
                      <span 
                        className="text-xs bg-slate-600/50 text-slate-400 px-2 py-1 rounded-md flex items-center"
                      >
                        +{project.tags.length - 3} <FiChevronDown className="ml-1" />
                      </span>
                    )}
                  </div>
                  
                  {hoveredProject === index && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 text-center"
                    >
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300"
                      >
                        <FiGithub className="mr-1" /> View on GitHub
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href="https://github.com/mehulbh9" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View More Projects <FiGithub className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 