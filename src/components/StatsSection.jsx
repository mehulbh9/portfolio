import { motion } from 'framer-motion'

const stats = [
  { value: '4+', label: 'Years Experience', sublabel: 'Academic & industry combined' },
  { value: '10+', label: 'Projects Delivered', sublabel: 'ML, data science & analytics' },
  { value: '3+', label: 'Tech Companies', sublabel: 'AMD, GEI, UofT Research' },
  { value: '10×', label: 'Faster Processing', sublabel: 'Python automation at AMD (10+ min → 5 sec)' },
]

const StatsSection = () => {
  const statColors = ['text-primary', 'text-primary', 'text-primary', 'text-primary']
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950/40 text-white">
      <div className="container">
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label text-white/70 mb-2">My success in numbers</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight max-w-2xl text-white">
            Data Science + AI + Program Mgmt
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2 ${statColors[index]} group-hover:scale-105 transition-transform`}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-slate-200 mb-1">{stat.label}</div>
              <p className="text-sm text-slate-400">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
