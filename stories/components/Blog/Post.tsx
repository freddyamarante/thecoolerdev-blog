'use client'

import { motion, useAnimation } from 'framer-motion'

import { useRef } from 'react'
import Image from 'next/image'

interface PostProps {
  title: string
  mainImage: string
  publishedAt: string
  date: string
  tags?: string[]
  summary: string
}

const defaultImage =
  'https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'

const Post = ({
  title,
  mainImage,
  publishedAt,
  date,
  tags,
  summary,
}: PostProps) => {
  const fadeOutAnimation = useAnimation()
  const infoSectionAnimation = useAnimation()

  const cardRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  const handleHoverStart = () => {
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

    // Get the total width of the card and the info section
    const cardWidth = cardRef.current
      ? cardRef.current.getBoundingClientRect().width
      : 0
    const infoSectionWidth = infoRef.current
      ? infoRef.current.getBoundingClientRect().width
      : 0

    // Handle go to top animation
    infoSectionAnimation.start({
      scale: 0.8,
      x: -cardWidth + infoSectionWidth + padding * 0.2,
      y: -cardHeight + infoSectionHeight + padding,
      transition: { duration: 0.3, ease: 'easeInOut' },
    })
  }

  const handleHoverEnd = () => {
    fadeOutAnimation.start({
      opacity: 1,
      transition: { duration: 0.1 },
    })
    infoSectionAnimation.start({
      scale: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.1, ease: 'easeInOut' },
    })
  }

  return (
    <motion.article
      ref={cardRef}
      className="relative isolate col-span-1 flex flex-col justify-end overflow-hidden rounded-2xl bg-night h-96 px-4 pb-4"
      whileHover={{ scale: 1.05 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <motion.div animate={fadeOutAnimation}>
        <Image
          src={mainImage ? mainImage : defaultImage}
          alt={title}
          width={600}
          height={700}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night-dark via-night/40" />
        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-night/10" />
      </motion.div>

      <motion.div
        ref={infoRef}
        animate={infoSectionAnimation}
        className="flex flex-col"
      >
        <div className="flex items-center gap-y-1 gap-x-4 overflow-hidden text-md text-white">
          <time dateTime={publishedAt}>{date}</time>
          <div>/</div>
          {tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-cloud px-2 py-1 text-xs font-medium text-black"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold leading-6 text-white inset-0">
          {title}
        </h3>
      </motion.div>
    </motion.article>
  )
}

export default Post
