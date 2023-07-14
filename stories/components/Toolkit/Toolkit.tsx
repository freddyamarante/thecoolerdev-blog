'use client'

import { useMotionValue, useTransform, motion } from 'framer-motion'
import Button from '../Button'
import Tool from './Tool'

import { useRef, useLayoutEffect, useState } from 'react'

interface ToolkitProps {
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
  const containerRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  const [boxWidth, setBoxWidth] = useState<number>(0)
  const [offset, setOffset] = useState<number>(0)

  useLayoutEffect(() => {
    const handleResize = () => {
      if (boxRef.current)
        setBoxWidth(boxRef.current.getBoundingClientRect().width)

      if (containerRef.current && infoRef.current)
        setOffset(
          containerRef.current.getBoundingClientRect().width -
            infoRef.current.getBoundingClientRect().width
        )
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      className="w-full px-12 py-16 rounded-xl bg-night text-white"
      ref={containerRef}
    >
      <div className="flex items-center">
        <div
          className="flex flex-col gap-8 pr-4 flex-shrink-0 basis-2/5"
          ref={infoRef}
        >
          <div className="text-4xl font-bold leading-normal">{subtitle}</div>
          <div className="text-2xl">{subBody}</div>
          <div className="flex justify-start">
            <Button mode="primary" label={button} />
          </div>
        </div>
        <div className="flex">
          <div className="relative top-0 overflow-hidden" ref={boxRef}>
            <motion.div
              drag="x"
              dragConstraints={{ left: -boxWidth + offset - 96, right: 0 }}
              className="flex items-center gap-8 ml-20 text-night"
            >
              {tools.map((tool, index) => (
                <Tool
                  title={tool.title}
                  description={tool.description}
                  key={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolkit
