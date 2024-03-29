'use client'

import { motion } from 'framer-motion'
import { useRef, useLayoutEffect, useState } from 'react'

import GradientBackground from '../GradientBackground'
import Tool from './Tool'

type ToolkitProps = {
  subtitle?: string
  subBody?: string
  button?: string
  tools?: {
    title: string
    description: string
    image: string | null
  }[]
}

const Toolkit = ({
  subtitle,
  subBody,
  button = 'Learn more',
  tools = [],
}: ToolkitProps) => {
  // Container refs for sizes
  const containerRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const mobileBoxRef = useRef<HTMLDivElement>(null)

  // For calculating the size of the drag constraints
  const [boxWidth, setBoxWidth] = useState<number>(0)
  const [mobileBoxWidth, setMobileBoxWidth] = useState<number>(0)
  const [containerWidth, setContainerWidth] = useState<number>(0)

  const [offset, setOffset] = useState<number>(0)

  const [windowWidth, setWindowWidth] = useState<number>(0)

  useLayoutEffect(() => {
    const handleResize = () => {
      if (boxRef.current)
        setBoxWidth(boxRef.current.getBoundingClientRect().width)

      if (containerRef.current && infoRef.current)
        setOffset(
          containerRef.current.getBoundingClientRect().width -
            infoRef.current.getBoundingClientRect().width
        )

      if (mobileBoxRef.current) {
        setMobileBoxWidth(mobileBoxRef.current.getBoundingClientRect().width)
      }

      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width)
      }

      setWindowWidth(window.innerWidth) // Force re-render on window resize
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <GradientBackground
      backgroundColor="#242423"
      gradientColor="#3E3E3D"
      width={100}
      height={80}
      className="w-full px-8 lg:px-12 py-8 lg:py-16 rounded-2xl bg-night text-white"
      key={windowWidth.toString()}
    >
      <div
        className="flex flex-col lg:flex-row lg:items-center"
        ref={containerRef}
      >
        <div
          className="relative flex flex-col gap-6 lg:pr-4 flex-shrink-0 basis-2/5 z-10"
          ref={infoRef}
        >
          <div className="text-4xl font-bold leading-normal">{subtitle}</div>
          <div className="text-2xl">{subBody}</div>

          {/* Removed until further pages implementation */}
          {/* <div className="flex justify-start">
            <Button mode="primary" label={button} />
          </div> */}
        </div>

        {/* Desktop carousel */}
        <div className="hidden lg:flex cursor-grab">
          <div className="relative overflow-x-hidden" ref={boxRef}>
            <motion.div
              layoutScroll
              drag="x"
              dragConstraints={{ left: -boxWidth + offset, right: 0 }}
              className="flex items-center gap-8 ml-20 text-night"
            >
              {tools.map((tool, index) => (
                <Tool
                  title={tool.title}
                  description={tool.description}
                  image={tool.image ? tool.image : undefined}
                  key={index}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile carousel */}

        <motion.div
          layoutScroll
          ref={mobileBoxRef}
          drag="x"
          dragConstraints={{ left: -mobileBoxWidth + containerWidth, right: 0 }}
          className="flex lg:hidden items-center gap-4 md:gap-8 text-night mt-12 w-fit"
        >
          {tools.map((tool, index) => (
            <Tool
              title={tool.title}
              description={tool.description}
              image={tool.image ? tool.image : undefined}
              key={index}
            />
          ))}
        </motion.div>
      </div>
    </GradientBackground>
  )
}

export default Toolkit
