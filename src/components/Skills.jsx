import { motion } from 'framer-motion'
import TiltCard from './TiltCard'

const services = [
  {
    num: '01',
    title: 'Data Science & Analytics',
    tags: ['Python', 'ETL', 'Snowflake', 'Dashboards'],
    description: 'I turn 300M+ row datasets into clear insights. Automation pipelines, ETL workflows, and dashboards that drive program visibility and data-based decisions.',
  },
  {
    num: '02',
    title: 'AI & Machine Learning',
    tags: ['XGBoost', 'LLMs', 'RAG', 'Bayesian Optimization'],
    description: 'From Monte Carlo forecasting to LLM-powered RAG systems. I build models that quantify risk, optimize processes, and ship AI that works in production.',
  },
  {
    num: '03',
    title: 'Program Management',
    tags: ['Jira', 'Confluence', 'Monte Carlo', 'Cross-team'],
    description: 'I bridge technical depth with execution. Jira dashboards for 200+ builds, velocity forecasting, and leadership reports that drive decisions.',
  },
  {
    num: '04',
    title: 'Full-Stack & Tools',
    tags: ['React', 'Python', 'APIs'],
    description: 'I build the tools that connect data to users. Dashboards, APIs, and applications that make insights actionable.',
  },
]

const Skills = () => {
  return (
    <section className="section bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950/20" id="skills">
      <div className="container">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label text-primary">Here's how I can help you</p>
          <h2 className="section-title text-left md:text-4xl lg:text-5xl max-w-2xl text-white">
            The full stack: Data · AI · Delivery
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard max={6} scale={1.01} className="h-full">
                <div className="group p-8 md:p-10 rounded-2xl border border-slate-600/50 hover:border-cyan-500/40 bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-500 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl md:text-6xl font-display font-bold text-cyan-500/30 group-hover:text-cyan-500/50 transition-colors">
                      [{service.num}]
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-cyan-300 bg-cyan-500/20 px-3 py-1.5 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
