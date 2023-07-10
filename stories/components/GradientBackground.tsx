'use client'

import { useEffect, useRef } from 'react'

interface GradientBackgroundProps {
  backgroundColor?: string
  gradientColor?: string
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'extralarge'
  className?: React.ComponentProps<'div'>['className']
}

const GradientBackground = ({
  backgroundColor = '#f5cb5c',
  gradientColor = '#343432',
  size = 'medium',
  className,
  children,
  ...props
}: GradientBackgroundProps) => {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

        mainRef.current.style.setProperty('--mouse-x', mouseX.toString() + '%')
        mainRef.current.style.setProperty('--mouse-y', mouseY.toString() + '%')
      }
    }

    document.addEventListener('mousemove', moveGradient)

    return () => {
      document.removeEventListener('mousemove', moveGradient)
    }
  }, [mainRef])

  let gradientSize: number

  switch (size) {
    case 'extralarge':
      gradientSize = 200
      break
    case 'large':
      gradientSize = 150
      break
    case 'medium':
      gradientSize = 120
      break
    case 'small':
      gradientSize = 100
      break
  }

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
              ${gradientSize}% ${gradientSize}% at var(--mouse-x) var(--mouse-y),
              ${gradientColor} 0%,
              ${backgroundColor} 100%
            );
          }
        `}
      </style>
    </div>
  )
}

export default GradientBackground
