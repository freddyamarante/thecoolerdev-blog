'use client'

import { motion, useAnimation } from 'framer-motion'
import moment from 'moment'
import { useRef, useState, useEffect } from 'react'

import Image from 'next/image'
import Button from '../Button'
import Link from 'next/link'

type PostProps = {
  index?: number
  title: string
  mainImage: string | undefined
  publishedAt: string
  date: string
  tag: {
    title: string
  }
  summary: string
  className?: React.ComponentProps<'div'>['className']
  slug?: string
  isDescriptionHidden?: boolean
}

const defaultImage = '/javascriptImage.png'

const Post = ({
  index = 1,
  title,
  mainImage,
  publishedAt,
  date,
  tag,
  summary,
  className,
  slug = '',
  isDescriptionHidden = false,
}: PostProps) => {
  // State variable to track hover state
  const [isOpen, setIsOpen] = useState<boolean>(true)

  // Handling col-spans
  const [isXlScreen, setIsXlScreen] = useState<boolean>(false)

  // Return true if we're on Tailwind's lg: media min-width
  const handleResize = () => {
    setIsXlScreen(window.innerWidth >= 1280)
  }

  // Event listener for resizing
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Function to calculate the col-span class for each item based on the index
  const calculateColSpan = (index: number | null) => {
    if (!index) return

    if (!isXlScreen) return 'col-span-1'

    if (isDescriptionHidden) return 'col-span-1'

    // Pattern for grid layout
    return index % 4 < 2 ? 'col-span-1' : 'col-span-2'
  }

  // Animations
  const fadeOutAnimation = useAnimation()
  const infoSectionAnimation = useAnimation()
  const fadeInAnimation = useAnimation()

  // Refs
  const cardRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)

  // Date formatting
  const formattedDate = moment(date).format('LL')

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
    const padding = 32

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
      setIsOpen(!isOpen ? true : false)

      isOpen ? animationStart() : animationEnd()
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
      className={`relative ${calculateColSpan(
        index
      )} ${className} overflow-hidden`}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
    >
      <div className="relative isolate bg-night overflow-hidden flex flex-col shrink-0 justify-end  rounded-2xl h-96 px-4 pb-4">
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
            <time dateTime={publishedAt}>{formattedDate}</time>
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
          className={`absolute bottom-4 visible`}
        >
          <div className="relative flex flex-col gap-y-4 z-20">
            <p className="text-white text-md sm:text-lg line-clamp-5 pr-4 leading-tight ">
              {summary}
            </p>
            <Link href={`blog/${slug}`}>
              <Button label="Read the full article" size="medium" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.article>
  )
}

export default Post
