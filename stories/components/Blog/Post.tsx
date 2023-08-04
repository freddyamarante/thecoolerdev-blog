'use client'

import { motion, useAnimation } from 'framer-motion'
import { useRef, useState } from 'react'

import Image from 'next/image'
import Button from '../Button'

interface PostProps {
  title: string
  mainImage: string
  publishedAt: string
  date: string
  tag: {
    title: string
  }
  summary: string
}

const defaultImage =
  'https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'

const Post = ({
  title,
  mainImage,
  publishedAt,
  date,
  tag,
  summary,
}: PostProps) => {
  // State variable to track hover state
  const [isOpen, setIsOpen] = useState<boolean>(true)

  // Animations
  const fadeOutAnimation = useAnimation()
  const infoSectionAnimation = useAnimation()
  const fadeInAnimation = useAnimation()

  // Refs
  const cardRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)

  const animationStart = () => {
    fadeOutAnimation.start({
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    })

    // Get the total height of the card and the info section
    const cardHeight = cardRef.current
      ? cardRef.current.getBoundingClientRect().height
      : 0
    const infoSectionHeight = infoRef.current
      ? infoRef.current.getBoundingClientRect().height
      : 0
    const padding = 46

    // Handle go to top animation
    infoSectionAnimation.start({
      y: -cardHeight + infoSectionHeight + padding,
      transition: { duration: 0.3, ease: 'easeInOut' },
    })

    // Handle fade in animation
    fadeInAnimation.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    })
  }

  const animationEnd = () => {
    const cardHeight = cardRef.current
      ? cardRef.current.getBoundingClientRect().height
      : 0

    fadeOutAnimation.start({
      opacity: 1,
      transition: { duration: 0.1 },
    })

    infoSectionAnimation.start({
      y: 0,
      transition: { duration: 0.2, ease: 'easeInOut' },
    })

    fadeInAnimation.start({
      opacity: 0,
      y: cardHeight,
      transition: { duration: 0.1 },
    })
  }

  const handleClick = () => {
    if (window.innerWidth < 640) {
      setIsOpen(!isOpen)

      isOpen ? animationStart() : animationEnd()

      console.log(isOpen, title)
    }
  }

  const handleHoverStart = () => {
    if (window.innerWidth > 640) {
      setIsOpen(true)
      animationStart()
    }
  }

  const handleHoverEnd = () => {
    if (window.innerWidth > 640) {
      setIsOpen(false)
      animationEnd()
    }
  }

  return (
    <motion.article
      ref={cardRef}
      className="relative col-span-1 overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
    >
      <div className="relative isolate bg-night overflow-hidden flex flex-col justify-end  rounded-2xl h-96 px-4 pb-4">
        {/* Background image */}
        <motion.div animate={fadeOutAnimation}>
          <Image
            src={mainImage ? mainImage : defaultImage}
            alt={title}
            width={600}
            height={700}
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-110"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night-dark/70 via-night/20" />
          <div className="absolute inset-0 -z-10 ring-1 ring-inset ring-night/10" />
        </motion.div>

        {/* Info section */}
        <motion.div
          ref={infoRef}
          animate={infoSectionAnimation}
          className="relative flex flex-col z-10"
        >
          <div className="flex items-center gap-y-1 gap-x-4 overflow-hidden text-md text-white">
            <time dateTime={publishedAt}>{date}</time>
            <div>/</div>
            {tag && (
              <span className="inline-flex items-center rounded-full bg-cloud px-2 py-1 text-xs font-medium text-black">
                {tag.title}
              </span>
            )}
          </div>
          <h3 className="text-xl font-semibold leading-6 text-white mt-2 inset-0">
            {title}
          </h3>
        </motion.div>

        {/* Summary (only shows up on hover) */}
        <motion.div
          ref={summaryRef}
          animate={fadeInAnimation}
          initial={{ opacity: 0 }}
          className={`flex flex-col gap-y-4 absolute bottom-4 z-10 visible`}
        >
          <p className="text-white text-lg sm:text-xl pr-4 leading-tight">
            {summary}
          </p>
          <Button label="Read the full article" size="medium" />
        </motion.div>
      </div>
    </motion.article>
  )
}

export default Post
