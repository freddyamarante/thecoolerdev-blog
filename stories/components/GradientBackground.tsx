'use client'

import { spring, useSpring } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface GradientBackgroundProps {
  backgroundColor?: string
  gradientColor?: string
  children?: React.ReactNode
  height?: number
  width?: number
  radius?: number
  className?: React.ComponentProps<'div'>['className']
}

const GradientBackground = ({
  backgroundColor = '#535350',
  gradientColor = '#f5cb5c',
  height = 200,
  width = 200,
  radius = 100,
  className,
  children,
  ...props
}: GradientBackgroundProps) => {
  const mainRef = useRef<HTMLDivElement>(null)

  const springConfig = {
    duration: 0.2,
    damping: 8,
  }

  // Initialize position of gradient
  const x = useSpring(50, springConfig)
  const y = useSpring(50, springConfig)

  const [currentX, setCurrentX] = useState(x.get())
  const [currentY, setCurrentY] = useState(y.get())

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (mainRef.current) {
        // Get the dimensions of the container
        const containerRect = mainRef.current.getBoundingClientRect()
        const containerWidth = containerRect.width
        const containerHeight = containerRect.height

        // Calculate the position in a percentage within the container
        const mousePositionInContainerX = Math.round(
          ((event.clientX - containerRect.left) / containerWidth) * 100
        )
        const mousePositionInContainerY = Math.round(
          ((event.clientY - containerRect.top) / containerHeight) * 100
        )

        // Set the position
        x.set(mousePositionInContainerX)
        y.set(mousePositionInContainerY)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mainRef, x, y])

  useEffect(() => x.on('change', (latest) => setCurrentX(latest)), [x])
  useEffect(() => y.on('change', (latest) => setCurrentY(latest)), [y])

  return (
    <div
      ref={mainRef}
      className={`gradient-animated ${className}`}
      data-scroll-container
      {...props}
    >
      {children}
      <style jsx>
        {`
          .gradient-animated {
            background: radial-gradient(
              ${width}% ${height}% at ${currentX}% ${currentY}%,
              ${gradientColor} 0%,
              ${backgroundColor} ${radius}%
            );
          }
        `}
      </style>
    </div>
  )
}

export default GradientBackground
