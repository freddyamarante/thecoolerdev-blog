'use client'

import { ChevronDown, ChevronUp } from '../resources/Icons'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface StepProps {
  number?: number
  title: string
  description: string
  isOpen: boolean
  onToggle: () => void
}

const Step = ({
  number = 1,
  title,
  description,
  isOpen,
  onToggle,
}: StepProps) => {
  return (
    <div className="bg-night w-full rounded-xl px-3">
      <div
        className="flex flex-col justify-center w-full cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <div className="relative flex flex-row text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-none gap-x-9 z-10">
            <div>{`0${(number + 1).toString()}`}</div>
            <div>{title}</div>
          </div>
          <div className="flex rounded-2xl p-2 my-3 text-white hover:bg-night-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">More information</span>
            {isOpen ? (
              <ChevronUp aria-hidden="true" />
            ) : (
              <ChevronDown aria-hidden="true" />
            )}
          </div>
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
              className="overflow-hidden"
            >
              <div className="relative px-4 py-6 rounded-2xl text-white text-lg sm:text-xl lg:text-2xl z-10">
                {description}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Step
