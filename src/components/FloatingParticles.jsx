import { motion } from 'framer-motion'

const PARTICLE_COUNT = 40

const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  size: Math.random() * 2 + 0.5,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 5,
  opacity: 0.15 + Math.random() * 0.25,
}))

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {particles.map((p) => (
      <motion.div
        key={p.id}
        className="absolute rounded-full bg-white"
        style={{
          width: p.size,
          height: p.size,
          left: p.left,
          top: p.top,
          opacity: p.opacity,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.5],
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: p.delay,
        }}
      />
    ))}
  </div>
)

export default FloatingParticles
