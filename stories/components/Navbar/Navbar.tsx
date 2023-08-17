'use client'

import NavElement from './NavElement'
import Status from './Status'
import { Bars3, XMark } from '../resources/Icons'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type NavbarProps = {
  name: string
  active: boolean
  image?: string
  elements?: { title: string; id: string }[]
}

const Navbar = ({ name, active, image, elements = [] }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const listElements = elements.map((element) => (
    <NavElement label={element.title} key={element.id} id={element.id} />
  ))

  return (
    <nav className="bg-night w-full rounded-2xl px-3">
      <div className="flex flex-col justify-start">
        <div className="flex flex-row justify-between">
          <Status name={name} active={active} image={image} />

          {/* Mobile navigation elements */}
          <button
            onClick={handleToggle}
            className="flex md:hidden rounded-2xl p-2 my-3 text-white hover:bg-night-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <XMark aria-hidden="true" />
            ) : (
              <Bars3 aria-hidden="true" />
            )}
          </button>

          {/* Desktop navigation elements */}
          <div className="hidden md:flex gap-5 py-5">{listElements}</div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
              }}
              className="md:hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="py-4"
              >
                {listElements}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
