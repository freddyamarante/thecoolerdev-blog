'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

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
  backgroundColor = '#f5cb5c',
  gradientColor = '#343432',
  height = 120,
  width = 120,
  radius = 100,
  className,
  children,
  ...props
}: GradientBackgroundProps) => {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mainRef.current?.style.setProperty('--mouse-x', '50%')
    mainRef.current?.style.setProperty('--mouse-y', '50%')

    const moveGradient = (event: MouseEvent) => {
      if (mainRef.current) {
        const containerRect = mainRef.current.getBoundingClientRect()
        const containerWidth = containerRect.width
        const containerHeight = containerRect.height

        const mouseX = Math.round(
          ((event.clientX - containerRect.left) / containerWidth) * 100
        )
        const mouseY = Math.round(
          ((event.clientY - containerRect.top) / containerHeight) * 100
        )

        // Ease-in
        const easingAmount = 0.1
        const currentX =
          parseFloat(mainRef.current?.style.getPropertyValue('--mouse-x')) || 50
        const currentY =
          parseFloat(mainRef.current?.style.getPropertyValue('--mouse-y')) || 50

        const targetX = mouseX
        const targetY = mouseY

        const newX = currentX + (targetX - currentX) * easingAmount
        const newY = currentY + (targetY - currentY) * easingAmount

        mainRef.current?.style.setProperty('--mouse-x', newX.toString() + '%')
        mainRef.current?.style.setProperty('--mouse-y', newY.toString() + '%')
      }
    }

    document.addEventListener('mousemove', moveGradient)

    return () => {
      document.removeEventListener('mousemove', moveGradient)
    }
  }, [mainRef])

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
              ${width}% ${height}% at var(--mouse-x) var(--mouse-y),
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
