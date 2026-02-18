import { motion } from 'framer-motion'
import { FiDatabase, FiCpu, FiLayers } from 'react-icons/fi'

const pillars = [
  {
    icon: <FiDatabase size={28} />,
    title: 'Data Science',
    description: '300M+ row datasets, Snowflake, ETL pipelines, dashboards. I turn raw data into clear, actionable insights.',
    highlight: 'Scale & rigor',
  },
  {
    icon: <FiCpu size={28} />,
    title: 'AI & ML',
    description: 'XGBoost, Bayesian Optimization, LLMs, RAG. From predictive models to production AI systems.',
    highlight: 'Cutting-edge',
  },
  {
    icon: <FiLayers size={28} />,
    title: 'Program Management',
    description: 'Jira dashboards, Monte Carlo forecasting, cross-team coordination. I bridge technical depth with execution.',
    highlight: 'Delivery focus',
  },
]

const ValueProp = () => (
  <section className="py-16 md:py-24 bg-slate-900/50 border-y border-slate-700/50">
    <div className="container">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label text-primary mb-3">What sets me apart</p>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white max-w-3xl mx-auto leading-tight">
          Data Science + AI + Program Management
        </h2>
        <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
          An elite combo—technical depth to build, strategic vision to lead, and the execution chops to ship.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="h-full p-6 md:p-8 rounded-2xl bg-slate-800/60 border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:bg-cyan-500/30 transition-colors">
                {pillar.icon}
              </div>
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                {pillar.highlight}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mt-2 mb-3">
                {pillar.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-slate-500 text-sm mt-10 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        Few combine deep technical skills with program-level ownership. I deliver both.
      </motion.p>
    </div>
  </section>
)

export default ValueProp
