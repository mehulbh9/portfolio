import { motion } from 'framer-motion'
import { useTilt } from '../hooks/useTilt'

/**
 * Wrapper that adds 3D tilt effect on hover (desktop only).
 * On mobile: simple scale/lift, no mouse-follow.
 */
export default function TiltCard({ children, className = '', max = 12, scale = 1.02, ...props }) {
  const tilt = useTilt({ max, scale })

  return (
    <motion.div
      ref={tilt.ref}
      className={className}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onMouseEnter={tilt.onMouseEnter}
      style={{
        ...tilt.style,
        transformStyle: 'preserve-3d',
      }}
      {...props}
    >
      <motion.div
        style={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          scale: tilt.scale,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
