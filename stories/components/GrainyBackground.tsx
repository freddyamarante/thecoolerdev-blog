'use client'

import { useEffect, useRef } from 'react'

interface GrainyBackgroundProps {
  backgroundColor?: string
  gradientColor?: string
  children?: React.ReactNode
}

export const GrainyBackground = ({
  backgroundColor = '#f5cb5c',
  gradientColor = '#343432',
  children,
  ...props
}: GrainyBackgroundProps) => {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveGradient = (event: MouseEvent) => {
      if (mainRef.current) {
        const divWidth = mainRef.current.clientWidth
        const divHeight = mainRef.current.clientHeight

        const mouseX = Math.round((event.pageX / divWidth) * 100)
        const mouseY = Math.round((event.pageY / divHeight) * 100)

        mainRef.current.style.setProperty('--mouse-x', mouseX.toString() + '%')
        mainRef.current.style.setProperty('--mouse-y', mouseY.toString() + '%')
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
      className="h-screen gradient-animated"
      data-scroll-container
      {...props}
    >
      {children}
      <style jsx>
        {`
          .gradient-animated {
            background: radial-gradient(
              120% 120% at var(--mouse-x) var(--mouse-y),
              ${gradientColor} 0%,
              ${backgroundColor} 100%
            );
          }
        `}
      </style>
    </div>
  )
}
