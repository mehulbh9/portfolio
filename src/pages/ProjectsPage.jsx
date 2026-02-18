import { motion } from 'framer-motion'
import Projects from '../components/Projects'

const ProjectsPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Projects</h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Explore my portfolio of projects that showcase my skills in machine learning, 
              AI development, data science, and web development.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Projects />
    </motion.div>
  )
}

export default ProjectsPage 