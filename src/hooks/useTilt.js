import { useRef, useState, useEffect } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Hook for 3D tilt effect on cards - follows mouse/touch.
 * Returns motion values for rotateX, rotateY, and ref to attach to element.
 * On mobile/touch devices, uses reduced effect for performance.
 */
export function useTilt(options = {}) {
  const { max = 15, scale = 1.02, disabled = false } = options
  const ref = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useSpring(
    useTransform(y, [0, 1], [max, -max]),
    { stiffness: 300, damping: 30 }
  )
  const rotateY = useSpring(
    useTransform(x, [0, 1], [-max, max]),
    { stiffness: 300, damping: 30 }
  )
  const scaleSpring = useSpring(isHovering && !disabled && !isTouchDevice ? scale : 1, {
    stiffness: 300,
    damping: 20,
  })

  const handleMouseMove = (e) => {
    if (disabled || isTouchDevice) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const percentX = (e.clientX - rect.left) / rect.width
    const percentY = (e.clientY - rect.top) / rect.height
    x.set(percentX)
    y.set(percentY)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    if (!disabled && !isTouchDevice) setIsHovering(true)
  }

  return {
    ref,
    rotateX: disabled || isTouchDevice ? 0 : rotateX,
    rotateY: disabled || isTouchDevice ? 0 : rotateY,
    scale: scaleSpring,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
    style: !isTouchDevice && !disabled ? { perspective: 1000 } : {},
  }
}
