'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

import Navbar from './Navbar'

type NavProps = {
  name: string
  active: boolean
  image?: string
}

const Nav = ({ name, active, image }: NavProps) => {
  // State for handling when it's hidden or visible
  const [isHidden, setIsHidden] = useState<boolean>(false)

  // Save previous scroll value
  const [prevScrollY, setPrevScrollY] = useState<number>(0)

  const { scrollY } = useScroll()

  // Update state whether is scrolling up or down
  const update = (latest: number) => {
    setPrevScrollY(latest)

    if (latest < prevScrollY) {
      // Scrolling up
      setIsHidden(false)
    } else {
      // Scrolling down
      setIsHidden(true)
    }
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    update(latest)
  })

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }

  const elements = [
    {
      title: 'Who am I',
      id: 'aboutMe',
    },

    {
      title: 'Process',
      id: 'process',
    },

    {
      title: 'Blog',
      id: 'blog',
    },
    {
      title: 'Contact',
      id: 'contact',
    },
  ]

  return (
    <motion.div
      variants={variants}
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.2 }}
      className="fixed w-full px-2 sm:px-6 lg:px-10 pt-2 lg:pt-6 left-0 z-50"
    >
      <Navbar name={name} active={active} image={image} elements={elements} />
    </motion.div>
  )
}

export default Nav
