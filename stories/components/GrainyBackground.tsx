'use client'

import { useEffect, useRef } from 'react'

import '../resources/gradients.css'

export const GrainyBackground = ({ ...props }) => {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveGradient = (event: MouseEvent) => {
      const winWidth = window.innerWidth
      const winHeight = window.innerHeight

      const mouseX = Math.round((event.pageX / winWidth) * 100)
      const mouseY = Math.round((event.pageY / winHeight) * 100) - 7.5

      if (mainRef.current) {
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
      className="h-screen w-screen gradient-animated"
      data-scroll-container
      {...props}
    ></div>
  )
}
