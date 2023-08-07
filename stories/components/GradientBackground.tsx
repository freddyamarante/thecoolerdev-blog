'use client'

import { motion, useSpring } from 'framer-motion'
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
  const ref = useRef<HTMLDivElement>(null)

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const mousePosition = {
      x: 50,
      y: 50,
    }

    ref.current?.style.setProperty('--mouse-x', mousePosition.x + '%')
    ref.current?.style.setProperty('--mouse-y', mousePosition.y + '%')

    const moveGradient = (event: MouseEvent) => {
      if (!ref.current) return

      const containerRect = ref.current.getBoundingClientRect()
      const containerWidth = containerRect.width
      const containerHeight = containerRect.height

      mousePosition.x = Math.round(
        ((event.clientX - containerRect.left) / containerWidth) * 100
      )
      mousePosition.y = Math.round(
        ((event.clientY - containerRect.top) / containerHeight) * 100
      )

      ref.current?.style.setProperty(
        '--mouse-x',
        mousePosition.x.toString() + '%'
      )
      ref.current?.style.setProperty(
        '--mouse-y',
        mousePosition.y.toString() + '%'
      )
    }

    const handleResize = () => {
      if (windowWidth >= 1024) {
        moveGradient
      } else if (windowWidth < 1024) {
        ref.current?.style.setProperty('--mouse-x', '50%')
        ref.current?.style.setProperty('--mouse-y', '50%')
      }

      setWindowWidth(window.innerWidth)
      console.log(windowWidth)
    }

    handleResize()
    document.addEventListener('mousemove', moveGradient)
    document.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('mousemove', moveGradient)
      document.removeEventListener('resize', handleResize)
    }
  }, [ref, windowWidth])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        background: `radial-gradient(${width}% ${height}% at var(--mouse-x) var(--mouse-y), ${gradientColor} 0%, ${backgroundColor} ${radius}%)`,
      }}
      data-scroll-container
      {...props}
    >
      {children}
    </div>
  )
}

export default GradientBackground
