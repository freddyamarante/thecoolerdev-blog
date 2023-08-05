'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

import Navbar from './Navbar'

interface NavProps {
  name: string
  active: boolean
  image?: string
  elements?: string[]
}

const Nav = ({ name, active, image, elements }: NavProps) => {
  // Handling scrolling and hovering animations
  // const [isVisible, setIsVisible] = useState<boolean>(true)
  // const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false)
  // const controls = useAnimation()

  // useEffect(() => {
  //   let lastScrollTop = 0

  //   const handleScroll = () => {
  //     const currentScrollTop = window.scrollY
  //     setIsScrollingUp(currentScrollTop < lastScrollTop)
  //     lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  // useEffect(() => {
  //   controls.start({ y: isVisible ? 0 : -100 })
  // }, [isVisible, controls])

  const [isHidden, setIsHidden] = useState<boolean>(false)
  const [prevScrollY, setPrevScrollY] = useState<number>(0)

  const { scrollY } = useScroll()

  const update = (latest: number) => {
    setPrevScrollY(latest)

    if (latest < prevScrollY) {
      setIsHidden(false)
    } else {
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

  return (
    <motion.div
      variants={variants}
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.2 }}
      className="fixed w-full px-2 sm:px-6 lg:px-10 pt-6 left-0 z-50"
    >
      <Navbar name={name} active={active} image={image} elements={elements} />
    </motion.div>
  )
}

export default Nav
